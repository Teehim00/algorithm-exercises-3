function findStudentIndex(students, searchStudent) {
  // Start coding here
  let left = 0;
  let right = students.length - 1;
  while (left <= right) {
    let name = Math.floor((left + right) / 2);
    if (students[name] === searchStudent) {
      return name;
    } else if (students[name] < searchStudent) {
      left = name + 1;
    } else {
      right = name - 1;
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  ----- ตอบ binarySearch
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  ----- ตอบ ข้อมูลไม่ได้เรียงลำดับตัวอักษร เลยเลือกใช้ binarySearch
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ----- ตอบ O(log n) **** อันนี้เปิดดูครับ ลืมครับผม
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

findStudentIndex(students, "John");
console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
