function calculatePunctuality(punctualStudents) {
  const totalStudents = punctualStudents.length;
  if (totalStudents === 0) return "No students are punctual.";
  
  let averagePercentage = Math.floor(totalStudents / 10); // Assuming 10% is the acceptable punctuality rate
  for (let i = 0; i < punctualStudents.length; i++) {
    const student = punctualStudents[i];
    if (student.totalTime > averagePercentage) return `${student.name} has a high punctuality rating.`;
  }
  
  return "All students have good punctuality.";
}
