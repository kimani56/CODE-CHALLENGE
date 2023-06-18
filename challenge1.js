const marks = process.argv.slice(2);
const parsedMarks = marks.map(mark => parseInt(mark));

if (parsedMarks.every(mark => mark >= 0 && mark <= 100)) {

  const grades = parsedMarks.map(mark => {
    if (mark > 79) {
      return "A";
    } else if (mark >= 60 && mark <= 79) {
      return "B";
    } else if (mark >= 50 && mark <= 59) {
      return "C";
    } else if (mark >= 40 && mark <= 49) {
      return "D";
    } else {
      return "E";
    }
  });


  grades.forEach((grade, index) => {
    console.log(`Grade for mark ${parsedMarks[index]}: ${grade}`);
  });
} else {
  console.log("Invalid input! Please enter marks between 0 and 100.");
}