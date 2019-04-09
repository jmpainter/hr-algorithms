function timeConversion(s) {
  let hours = parseInt(s.slice(0, 3), 10);
  const isPM = s.slice(-2) === 'PM';
  if (isPM && hours < 12) {
    hours = hours + 12;
  }
  if (!isPM && hours === 12) {
    hours = 0;
  }
  hours = hours.toString().padStart(2, '0');
  return hours + s.slice(2, 8);
}

// console.log(timeConversion('07:05:45PM'));
// console.log(timeConversion('11:59:45PM'));
console.log(timeConversion('12:45:54PM'));
// console.log(timeConversion('11:59:00AM'));
// console.log(timeConversion('11:59:00PM'));
// console.log(timeConversion('01:00:00AM'));
