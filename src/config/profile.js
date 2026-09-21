// Edit this file to update your identity, hero copy and headline info.
// Nothing here is fabricated — leave a field empty/placeholder if not ready.

export const profile = {
  name: "Paresh",
  // The hero heading, split into two parts so they can be laid out with a
  // controlled gap (see Hero.jsx + .hero__title in styles.css) instead of
  // relying on literal spaces in one string.
  heroTitleParts: ["Hi…", "I'm Paresh."],
  subtitle: "MUSIC LOVER · TRAVELLER · EXPLORER",
  tagline: "Building things. Exploring places. Collecting stories.",

  ctaPrimary: { label: "EXPLORE MY WORLD", href: "#about" },
  ctaSecondary: { label: "MY JOURNEY", href: "#travel" },

  // Shown as the small "Currently" line in the hero. `songs` cycles through
  // in shuffled order, one at a time, fading between each — add/remove/reorder
  // freely. `rotateMs` controls how long each song stays on screen before
  // swapping to the next — currently 15 minutes; set it to 60 * 60 * 1000
  // for hourly instead.
  currently: {
    emoji: "🎧",
    songs: [
      // Your stated favourite ghazals (from the Music section)
      "Chupke Chupke Raat Din — Ghulam Ali",
      "Ranjish Hi Sahi — Mehdi Hassan",
      "Chitthi Na Koi Sandesh — Jagjit Singh",
      "Joshwalon Ko Khabar Kya — Jagjit Singh",
      // Evergreen Hindi 80s/90s hits
      "Papa Kehte Hain — Qayamat Se Qayamat Tak (1988)",
      "Ae Mere Humsafar — Qayamat Se Qayamat Tak (1988)",
      "Jimmy Jimmy Aaja Aaja — Disco Dancer (1982)",
      "Mera Dil Bhi Kitna Pagal Hai — Saajan (1991)",
      "Pehla Nasha — Jo Jeeta Wohi Sikandar (1992)",
      "Chura Ke Dil Mera — Main Khiladi Tu Anari (1994)",
      "Ek Ladki Ko Dekha Toh Aisa Laga — 1942: A Love Story (1994)",
      "Tujhe Dekha To Yeh Jaana Sanam — Dilwale Dulhania Le Jayenge (1995)",
      "Tirchi Topi Wale — Raja Hindustani (1996)",
      "Dil To Pagal Hai — Dil To Pagal Hai (1997)",
      "Jiya Jale — Dil Se (1998)",
      "Kuch Kuch Hota Hai — Kuch Kuch Hota Hai (1998)",
      "Chunari Chunari — Biwi No. 1 (1999)",
    ],
    rotateMs: 15 * 60 * 1000, // 15 minutes
  },

  location: "India",

  // Leave empty and the UI will render "[Add email]" instead of inventing one.
  email: "",
};
