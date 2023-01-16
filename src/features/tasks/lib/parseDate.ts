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

export function parseDateNow() {

  const now = new Date();

  const month = monthArr[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function parseDate(date:string){
  
  const getDate = new Date(date);

  const month = monthArr[getDate.getMonth()];
  const day = getDate.getDate();
  const year = getDate.getFullYear();

  const hours = getDate.getHours()
  const minute = getDate.getMinutes()

  const parseHours = hours < 12 ? `AM${hours}` : `PM${hours-12}`

  return `${month} ${day}, ${parseHours} ${minute}M`;
}