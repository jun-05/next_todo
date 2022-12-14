export function parseDateNow() {
  const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const now = new Date();

  const month = monthArr[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  return `${month} ${day}, ${year}`;
}
