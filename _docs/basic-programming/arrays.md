---
title: Arrays
subtitle: การใช้ข้อมูลแบบ <strong>อาเรย์</strong>
icon: fab fa-buromobelexperte
difficulty: 1
duration: 1
useful: 1
---

ข้อมูลแบบ Array คือการทำข้อมูลเดิมที่เป็นเหมือนหนังสือ 1 เล่ม กลายเป็นชั้นวางหนังสือที่มีหนังสือได้หลายเล่ม ที่ทำให้ 1 ตัวแปรสามารถเก็บได้ทีล่ะหลายๆค่าพร้อมกันได้

## การประกาศ

การประกาศตัวแปรแบบ Array สามารถทำกับข้อมูลชนิดใดๆก็ได้ โดยการใช้เครื่องหมาย `[]` หรือการใช้ Object ของ `Array()` แต่เนื่องจากเรายังไม่ได้ใช้ Object กันมาก่อนเราจะเลือกใช้ `[]` กันเป็นหลัก และสามารถใช้งานได้ง่ายกว่า

```js
let number = [];
let number = new Array(); // เขียนยาวกว่า และเหมือนกับ []
```

โดยเราสามารถใช้เครื่องหมาย `,` ในการแบ่งข้อมูล ได้ดังตัวอย่าง

```js
let students = ['John', 'Jane', 'Joe', 'Joy', 'Jun'];
```

ซึ่งวิธีการเรียกใช้ข้อมูล จะทำการใช้เครื่องหมาย `[]` ตามด้วยการระบุตำแหน่งของ **Index** ซึ่งจะเริ่มจาก 0

```javascript
let students = ['John', 'Jane', 'Joe', 'Joy', 'Jun'];
alert(students[0]); // คนแรก John
alert(students[1]); // คนที่สอง Jane
alert(students[4]); // คนที่ห้า Jun
alert(students[5]); // undefined เพราะไม่มีค่าใน Index ดังกล่าว
alert(typeof(students)); // object เพราะ Array คือ Object ชนิดหนึ่ง
alert(typeof(students[1])); // string ตามข้อมูลของ 'Jane'
```

ดังนั้นเราสามารถใช้วิธีการวนลูป เพื่อแสดงข้อมูลของนักเรียนทั้งหมดได้

```javascript
let students = ['John', 'Jane', 'Joe', 'Joy', 'Jun'];
for (let index = 0; index < 5; index++) {
  alert(`Student NO: ${index + 1} name is ${students[index]}`);
  // เนื่องจาก Index เริ่มต้นที่ 1 เราจึงต้องใช้เลข 0 ในการเรียก
  // และในทางการแสดงผลเราต้องการคนที่ 1 จึงต้องนำ index + 1 มิเช่นนั้นจะเป็นเลข 0 ตอนเริ่มต้น
  // จากนั้นแสดง students[index] หรือก็คือ students[0] ในลูปครั้งแรกจนถึง students[4] ตามเงื่อนไข
}
```

และเราสามารถแทนที่ค่าใหม่ได้ดังตัวอย่าง ซึ่งจะทำให้ค่าอื่นๆถูกเปลี่ยนแปลง

```javascript
let students = ['John', 'Jane', 'Joe', 'Joy', 'Jun'];
for (let index = 0; index < 5; index++) {
  students[index] = `NO: ${index + 1}, ${students[index]}`;
}
alert(`${students[0]} | ${students[1]}`);
```

## การลูปบนของ Array

ในการวนลูปของ Array เราสามารถทำได้ตามตัวอย่างที่แล้ว คือการสร้างตัวแปรสำหรับการเก็บตำแหน่งของ Index ตั้งแต่ 0 จนถึงตำแหน่งที่เราต้องการเรียกใช้ แต่ในกรณีที่หากตัวแปร Array มีการเปลี่ยนแปลงบ่อยครั้งอาจจะทำให้การกำหนดของจำนวนครั้งที่ต้องการลูปได้ยาก ดังนั้นจึงมีหลายวิธีที่จะวนลูปจนกว่าจะครบจำนวน Index บน Array

- ใช้ `.length` ของ Object ที่เป็น Array เพื่อนับจำนวน Index ทั้งหมด

```javascript
let animals = ['cat', 'dog', 'bird'];
alert(animals.length); // 3
```

```javascript
let animals = ['cat', 'dog', 'bird'];
for (let index = 0; index < animals.length; index++) {
  alert(animals[index]);
}
```

- ใช้ `for (... in ...)` ซึ่งการใช้ `in` เป็น Keywords สำหรับภาษาโปรแกรมใน JavaScript อีกตัวในการลูปตามจำนวน Object โดยสามารถนำตำแหน่ง Index ของ Array ออกมาได้

```javascript
let animals = ['cat', 'dog', 'bird'];
for (let index in animals) {
  alert(`Index: ${index}, Value: ${animals[index]}`);
}
```

- **วิธีที่ดีที่สุด** โดยการใช้ `for (... of ...)` ซึ่งการใช้ `of` เป็น Keywords สำหรับภาษาโปรแกรม JavaScript เช่นกัน แต่จะวนลูปได้เฉพาะ Array และจะได้ค่าออกมาทันที

```javascript
let animals = ['cat', 'dog', 'bird'];
for (let animal of animals) {
  alert(animal);
}
```

> **เพิ่มเติม:** ในการกำหนดชื่อตัวแปรของ Array ควรใช้ Plural หรือคำนามพหูพจน์ที่จะช่วยให้เข้าใจถึงตัวแปรมากขึ้น ว่ามีหลายๆค่า เช่นในตัวอย่างที่เราใช้ `animals` ในการเก็บค่าเป็น Array และเราจะใช้ลูปดึงตัวแปรของ `animal` ที่จะเข้าใจได้ว่าคือค่าๆเดียวภายใน `animals`

## อาเรย์หลายมิติ

ในการใช้ Array อย่างที่เราได้เปรียบเทียบว่าเหมือนหนังสือ ที่อยู่ในชั้นวางหนังสือ แต่บางครั้งชั้นวางหนังสือก็ไม่ได้มีเพียงชั้นเดียว สามารถมีได้หลายชั้น และขณะที่ชั้นวางหนังสือหลายๆชั้นนั้นก็ยังมีห้องสมุดที่มีหลายๆชั้นวางหนังสืออีก อ่านแล้วอาจจะสับสนแต่ก็สามารถเปรียบได้ดังตัวอย่างนี้

```javascript
let shelf = [ // ชั้นวางหนังสือ
  ['Science', 'Math', 'Manga'], // ชั้น 0 มีหนังสือ 0, 1, 2
  ['Novel', 'News'], // ชั้น 1 มีหนังสือ 0, 1
  ['Programming', 'Travel', 'Magazine', 'Kids', 'Design'] // ชั้น 2 มีหนังสือ 0, 1, 2, 3, 4
];
alert(shelf[0][2]); // เรียกชั้น 0 หนังสือที่ 2 คือ Manga
alert(shelf[1][0]); // เรียกชั้น 1 หนังสือที่ 0 คือ Novel
alert(shelf[2][3]); // เรียกชั้น 2 หนังสือที่ 3 คือ Kid
```

```javascript
let library = [ // ห้องสมุด
  [ // ชั้นวางหนังสือที่ 0
    ['Science', 'Math', 'Manga'], // ชั้น 0 มีหนังสือ 0, 1, 2
    ['Novel', 'News'], // ชั้น 1 มีหนังสือ 0, 1
    ['Programming', 'Travel', 'Magazine', 'Kids', 'Design'] // ชั้น 2 มีหนังสือ 0, 1, 2, 3, 4
  ],
  [ // ชั้นวางหนังสือที่ 1
    ['Technology', 'Cooking'], // ชั้น 0 มีหนังสือ 0, 1
    ['English', 'Thai', 'Chinese', 'Japanese'], // ชั้น 1 มีหนังสือ 0, 1, 2, 3
    ['Funny', 'Animals'] // ชั้น 2 มีหนังสือ 0, 1
  ]
];
alert(library); // เรียกรายการหนังสือทั้งห้องสมุด
alert(library[1]); // เฉพาะชั้นวางหนังสือที่ 1
alert(library[1][2]); // เฉพาะชั้นวางหนังสือที่ 1 ชั้น 2
alert(library[1][2][0]); // หนังสือบนชั้นวางหนังสือที่ 1 ชั้น 2 ตำแหน่งที่ 0 เพียงเล่มเดียว
```

ซึ่งเราจะเห็นว่าการเรียกใช้ Array หลายมิติจะใช้เครื่องหมาย `[]` ตามจำนวนมิติที่มี และเราสามารถวนลูปเพื่อดึงค่าทีล่ะหลายมิติได้ด้วย

```javascript
let library = [
  [
    ['Science', 'Math', 'Manga'],
    ['Novel', 'News'],
    ['Programming', 'Travel', 'Magazine', 'Kids', 'Design']
  ],
  [
    ['Technology', 'Cooking'],
    ['English', 'Thai', 'Chinese', 'Japanese'],
    ['Funny', 'Animals']
  ]
];
let output = 'Book lists from library';
let shelfIndex = 0;
for (let shelfs of library) {
  let levelIndex = 0;
  output += `\n\nShelf ${++shelfIndex}\n`;
  for (let levels of shelfs) {
    let bookIndex = 0;
    output += `- Level ${++levelIndex}\n`;
    for (let book of levels) {
      output += `[${shelfIndex}-${levelIndex}-${++bookIndex}: ${book}] `;
    }
    output += `\n`;
  }
}
alert(output);
```

> **คำเตือน:** ในการแบ่งของ Array แต่ล่ะ Index จำเป็นต้องมีเครื่องหมาย `,` แบ่งให้ถูกต้องด้วย ซึ่งหากแบ่งไม่ถูกต้องจะทำให้เกิด Error ที่อาจจะอ่านเข้าใจยากได้
{:.is-danger}

> **หมายเหตุ:** บางครั้งการใช้ `alert()` อาจจะมีช่วงที่การแสดงผลเต็มหากมีหลายบรรทัด ทำให้แสดงได้แค่บางส่วนเท่านั้น

## บทสรุป

- Array คือการเก็บข้อมูลหลายๆค่าในตัวแปรเดียว
  - ตำแหน่งของแต่ล่ะค่าจะเรียกว่า Index
- ประกาศใช้โดย `[]`
  - แบ่งข้อมูลโดย `,`
  - เรียกใช้ข้อมูลภายในโดยระบุตำแหน่งภายใน `[]` โดยเริ่มจาก 0
- การใช้ลูปของ Array
  - `.length` เพื่อหาขนาดของ Array
  - `for (... in ...) ลูปตามจำนวนของ Index โดยได้ตำแหน่งกลับมา
  - `for (... of ...) ลูปตามจำนวนของ Index โดยได้ค่ากลับมา
- การใช้ Array หลายมิติ
  - เรียกข้อมูลโดยการใช้ `variable[x][x]`
  - การประกาศใช้ `variable = [[x, y], [x, y]]`
