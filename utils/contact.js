/**
 * Returns the WhatsApp number based on the current day of the month.
 * Odd days: 65541506
 * Even days: 60431553
 */
export function getWhatsAppNumber() {
  const day = new Date().getDate();
  return day % 2 === 0 ? '60431553' : '65541506';
}

/**
 * Returns the full WhatsApp link for the current day.
 */
export function getWhatsAppLink(message = '') {
  const number = getWhatsAppNumber();
  const baseUrl = `https://wa.me/852${number}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
