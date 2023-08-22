export default function HTMLtoJSDate(dateString, timeString) {
  let dateArray = dateString.split("-");
  dateArray[1] = dateArray[1] * 1 - 1;
  return new Date(...dateArray, ...timeString.split(":"));
}
