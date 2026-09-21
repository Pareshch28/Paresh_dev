// Festival "welcome blast" — a celebratory overlay shown when someone opens
// the site anywhere in a window around a festival date: `daysBefore` days
// ahead (a countdown message) through the day itself (the main greeting)
// through `daysAfter` days after (a "hope it was wonderful" message). Once
// the window ends, the site is exactly as normal — no code changes needed.
//
// IMPORTANT — these dates shift every year (most Hindu festivals follow the
// lunar/lunisolar calendar), so this list needs a yearly check. Dates below
// are 2026 dates for India, sourced from published Hindu Panchang calendars
// (e.g. drikpanchang.com) at the time this was written — double-check
// against a current Panchang if anything looks off, especially Diwali/
// Janmashtami, which can shift by a day depending on region/timezone.
//
// month is 1-indexed (1 = January).
// daysBefore / daysAfter default to 10 / 5 if omitted, per your request —
// tune per-festival if you want a tighter or wider window for a specific one.

export const festivals = [
  { id: "makar-sankranti", name: "Makar Sankranti", month: 1, day: 14, emoji: "🎉🪁☀️" },
  { id: "vasant-panchami", name: "Vasant Panchami", month: 1, day: 23, emoji: "🎉🌼📚" },
  { id: "maha-shivaratri", name: "Maha Shivaratri", month: 2, day: 15, emoji: "🎉🔱🕉️" },
  { id: "holi", name: "Holi", month: 3, day: 3, emoji: "🎉🎨🌈" },
  { id: "gudi-padwa-ugadi", name: "Gudi Padwa / Ugadi", month: 3, day: 19, emoji: "🎉🎊🌺" },
  { id: "rama-navami", name: "Rama Navami", month: 3, day: 26, emoji: "🎉🏹🙏" },
  { id: "hanuman-jayanti", name: "Hanuman Jayanti", month: 4, day: 1, emoji: "🎉🚩💪" },
  { id: "akshaya-tritiya", name: "Akshaya Tritiya", month: 4, day: 19, emoji: "🎉✨🪙" },
  { id: "buddha-purnima", name: "Buddha Purnima", month: 5, day: 1, emoji: "🎉🕊️🪷" },
  { id: "rath-yatra", name: "Jagannath Rath Yatra", month: 7, day: 15, emoji: "🎉🛺🙏" },
  { id: "guru-purnima", name: "Guru Purnima", month: 7, day: 29, emoji: "🎉🙏📿" },
  { id: "raksha-bandhan", name: "Raksha Bandhan", month: 8, day: 27, emoji: "🎉🧵❤️" },
  { id: "janmashtami", name: "Krishna Janmashtami", month: 9, day: 3, emoji: "🎉🦚🪈" },
  { id: "ganesh-chaturthi", name: "Ganesh Chaturthi", month: 9, day: 14, emoji: "🎉🎊🐘" },
  { id: "navratri", name: "Navratri", month: 10, day: 11, emoji: "🎉💃🪔" },
  { id: "dussehra", name: "Dussehra / Vijayadashami", month: 10, day: 20, emoji: "🎉🏹🔥" },
  { id: "karwa-chauth", name: "Karwa Chauth", month: 10, day: 28, emoji: "🎉🌕❤️" },
  { id: "dhanteras", name: "Dhanteras", month: 11, day: 6, emoji: "🎉🪔🪙" },
  { id: "diwali", name: "Diwali", month: 11, day: 8, emoji: "🎉🪔✨" },
  { id: "bhai-dooj", name: "Bhai Dooj", month: 11, day: 10, emoji: "🎉👫❤️" },
  { id: "chhath-puja", name: "Chhath Puja", month: 11, day: 15, emoji: "🎉🌅🙏" },
  { id: "tulsi-vivah", name: "Tulsi Vivah", month: 11, day: 21, emoji: "🎉🌿💐" },
  { id: "new-year", name: "New Year", month: 1, day: 1, emoji: "🎉🎊✨" },
];

const DAY_MS = 24 * 60 * 60 * 1000;

/** Finds the occurrence of {month, day} closest to `today`, checking the
 *  surrounding years so dates near Dec 31 / Jan 1 still match correctly. */
function closestOccurrence(month, day, today) {
  const year = today.getFullYear();
  const candidates = [year - 1, year, year + 1].map((y) => new Date(y, month - 1, day));
  return candidates.reduce((closest, d) =>
    Math.abs(d - today) < Math.abs(closest - today) ? d : closest
  );
}

/**
 * Returns the festival whose before/after window contains `today`, plus how
 * many days away it is and which phase we're in — or null if none match.
 * If more than one festival's window contains today, the closest one wins.
 */
export function getTodaysFestival(today = new Date()) {
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let best = null;
  for (const festival of festivals) {
    const daysBefore = festival.daysBefore ?? 10;
    const daysAfter = festival.daysAfter ?? 5;
    const occurrence = closestOccurrence(festival.month, festival.day, todayMidnight);
    const diffDays = Math.round((todayMidnight - occurrence) / DAY_MS); // negative = before, 0 = on, positive = after

    if (diffDays >= -daysBefore && diffDays <= daysAfter) {
      if (!best || Math.abs(diffDays) < Math.abs(best.diffDays)) {
        const phase = diffDays < 0 ? "before" : diffDays > 0 ? "after" : "on";
        best = { ...festival, diffDays, phase };
      }
    }
  }
  return best;
}
