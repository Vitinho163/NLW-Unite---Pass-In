export function generateSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0360-\u036f\u0300-\u035f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};