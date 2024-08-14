export function formatTime(i: number) {
  let newValue: string = "";
  if (i < 10) {
    newValue = "0" + i.toString();
  }
  return newValue;
}
