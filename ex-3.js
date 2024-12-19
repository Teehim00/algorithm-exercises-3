function sortByRating(shops) {
  // Start coding here
  for (let i = 0; i < shops.length - 1; i++) {
    for (let j = 0; j < shops.length - 1; j++) {
      if (shops[j].rating < shops[j + 1].rating) {
        let titles = shops[j];
        shops[j] = shops[j + 1];
        shops[j + 1] = titles;
      }
    }
  }
  return shops;
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้
  ----- ตอบ Bubble Sort
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  ----- ตอบ Bubble Sort เพราะต้องเข้าถึงreating แต่ละอันที่อยู่ใน arrar object และต้องจัดเรียง reating ให้เรียงจากมากไปน้อย
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ----- ตอบ O(n²) เพราะใช้ loop ซ่อน loop ***** อันนี้ผมเปิดดูครับ ลืมครับ
*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
