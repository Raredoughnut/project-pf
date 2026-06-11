// 1200 → "1.2k", 980 → "980"
export function formatCompactNumber(value: number): string {
  if (value < 1000) {
    return String(value);
  }

  const thousands = value / 1000;
  const rounded = Math.round(thousands * 10) / 10;
  return `${rounded}k`;
}
