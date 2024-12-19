function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++)
    if (students[i] === searchStudent) {
      return i;
    }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  ----- ตอบ LinearSearch
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  ----- ตอบ ข้อมูลไม่ได้เรียงลำดับตัวอักษร เลยเลือกใช้ LinearSearch
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ----- ตอบ O(n) **** อันนี้เปิดดูครับ ลืมครับผม
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
