function isPunctual() {
    // Add your logic to check if the student is punctually on time
    const today = new Date();
    const currentTime = new Date().getTime();

    if (today.getMinutes() === 0 || today.getHours() !== 12) {
        return "not punctual";
    } else {
        return "punctual";
    }
}

console.log(isPunctual());
