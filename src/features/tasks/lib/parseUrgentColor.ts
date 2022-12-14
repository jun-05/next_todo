export function parseUrgentColor(urgent: number) {
  switch (urgent) {
    case 1:
      return 'red';
    case 2:
      return 'blue';
    case 3:
      return 'gray';
    default:
      break;
  }
}
