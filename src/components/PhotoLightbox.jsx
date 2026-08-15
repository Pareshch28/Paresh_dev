import { useEffect } from "react";

export default function PhotoLightbox({ photos, index, onClose, onNav }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  if (index == null) return null;
  const photo = photos[index];
  if (!photo) return null;

  let touchStartX = 0;
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) onNav(dx > 0 ? -1 : 1);
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lightbox__nav lightbox__nav--prev" onClick={() => onNav(-1)} aria-label="Previous photo">‹</button>
      <img src={photo.src} alt={photo.caption || "Photo"} className="lightbox__img" />
      <button className="lightbox__nav lightbox__nav--next" onClick={() => onNav(1)} aria-label="Next photo">›</button>
      {photo.caption && <p className="lightbox__caption">{photo.caption}</p>}
      <div className="lightbox__backdrop" onClick={onClose} />
    </div>
  );
}
