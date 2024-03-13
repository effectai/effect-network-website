export function formatNumber(num) {
  const suffixes = ["", "k", "m", "b", "t"]; // List of suffixes for thousands, millions, billions, etc.
  let suffixIndex = 0;
  while (Math.abs(num) >= 1000 && suffixIndex < suffixes.length - 1) {
    num /= 1000; // Divide the number by 1000 for the next suffix
    suffixIndex++;
  }
  const formattedNum = num.toFixed(1).replace(/\.0$/, ""); // Removes decimal places if unnecessary
  return { value: formattedNum, suffix: suffixes[suffixIndex] };
}
