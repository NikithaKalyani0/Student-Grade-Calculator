document.getElementById("gradeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const marks = [...document.getElementsByClassName("marks")].map(input => Number(input.value));

  const total = marks.reduce((a, b) => a + b, 0);
  const average = total / marks.length;

  let grade = "";
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "Fail";

  document.getElementById("result").innerHTML = `
    <strong>${name}</strong><br>
    Total Marks: ${total}<br>
    Average: ${average.toFixed(2)}<br>
    Grade: ${grade}
  `;
});