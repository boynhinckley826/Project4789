function isPunctual(time) {
  const currentTime = new Date();
  if (currentTime.getHours() === time[0] && currentTime.getMinutes() === time[1]) {
    return true;
  } else {
    return false;
  }
}
