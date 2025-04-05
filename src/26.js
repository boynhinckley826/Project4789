function isPunctual(currentTime) {
  const currentTimeString = currentTime.split(' ')[0];
  if (currentTimeString.includes("AM")) {
    return true;
  } else {
    return false;
  }
}
