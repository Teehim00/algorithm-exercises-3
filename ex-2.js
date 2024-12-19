function findBookIndex(books, searchBook) {
  // Start coding here
  let left = 0;
  let right = books.length - 1;
  while (left <= right) {
    let titles = Math.floor((left + right) / 2);
    if (books[titles].title === searchBook) {
      return titles;
    } else if (books[titles].title < searchBook) {
      left = titles + 1;
    } else {
      right = titles - 1;
    }
  }
  return -1;
}

/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  ----- ตอบ binary
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  ----- ตอบ ข้อมูล title เรียงลำดับตัวอักษร เลยเลือกใช้ binarySearch 
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ----- ตอบ O(log n) วน loop ทุกตัว**** อันนี้เปิดดูครับ ลืมครับผม
*/

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
