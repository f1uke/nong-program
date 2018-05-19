---
title: โปรแกรมคำนวณเกรด
author:
  name: nakorndev
  url: https://github.com/nakorndev
level: 3
date: 2018-05-04 17:54:00 +0700
---

> **หมายเหตุ:** ควรมีความรู้ด้านการใช้งาน OOP, Object, Arrow function, Inline function และเนื้อหา Advance อื่นๆเพิ่มเติม สำหรับเนื้อหาเสริมส่วนล่างของการเขียนเโปรแกรมด้วย

## ตัวอย่างพื้นฐาน

ในการคำนวณเกรดโดยพื้นฐานเราสามารถใช้ค่าระหว่าง (Between) ด้วยการใช้ `amount >= X && amount <= Y` เพื่อหาค่าที่อยู่ในระหว่างเลข `X ถึง Y` ได้

```javascript
let grade = prompt('กรุณาระบุเกรดของคุณ'); // แสดงและรับข้อมูล
let result; // ประกาศตัวแปรสำหรับรอเก็บค่า
if (grade == 4) { // grade เท่ากับ 4
  result = 'A'; // เก็บค่า A
} else if (grade >= 3.5 && grade < 4) { // grade มากกว่าหรือเท่ากับ 3.5 และน้อยกว่า 4 (หมายถึง 3.5 ถึง 3.99)
  result = 'B+'; // เก็บค่า B
} else if (grade >= 3 && grade < 3.5) {
  result = 'B';
} else if (grade >= 2.5 && grade < 3) {
  result = 'C+';
} else if (grade >= 2 && grade < 2.5) {
  result = 'C';
} else if (grade >= 1.5 && grade < 2) {
  result = 'D+';
} else if (grade >= 1 && grade < 1.5) {
  result = 'D';
} else if (grade < 1) {
  result = 'F';
} else { // เมื่อเป็นค่าอื่นๆที่ไม่ได้ระบุ
  result = 'ใส่ค่าผิด?';
}
alert(`เกรดของคุณคือ ${result}`);
```

## การดักข้อมูล

เนื่องจากข้อมูลที่เราได้รับ ผู้ใช้อาจจะใส่เป็นข้อความ หรืออื่นๆที่เราไม่อนุญาต เช่น เกรดจะต้องเป็น 1, 1.5, 2, 2.5, 3, 3.5 และ 4 เท่านั้น สามารถดักได้ดังตัวอย่าง โดยเพื่อไม่ต้องเรียกตัวแปร `grade` ซ้ำซากบ่อยๆเราสามารถใช้ `switch()...case` แทนได้

```javascript
let grade = prompt('กรุณาระบุเกรดของคุณเฉพาะ 1, 1.5, 2, 2.5, 3, 3.5 และ 4 เท่านั้น');
let failValidate = false; // กรณีที่มีปัญหา
let result;
switch (Number(grade)) { // จำเป็นต้องใช้ Number(grade) เพื่อแปลงเป็น Number เพราะ case เราใช้ Number เทียบ
  case 4: result = 'A'; break;
  case 3.5: result = 'B+'; break;
  case 3: result = 'B'; break;
  case 2.5: result = 'C+'; break;
  case 2: result = 'C'; break;
  case 1.5: result = 'D+'; break;
  case 1: result = 'D'; break;
  default: failValidate = true; break;
}
if (failValidate) {
  alert('คุณใส่ค่าไม่ถูกต้อง');
} else {
  alert(`เกรดของคุณคือ ${result}`);
}
```

หรือสามารถใช้ `while()` เพื่อตรวจสอบเงื่อนไขได้ หากใส่ไม่ถูกต้องโปรแกรมจะทำการลูปจนกว่าจะใส่ถูก

```javascript
let grade
  , failValidate
  , result;
do { // ต้องทำงานอย่างน้อย 1 ครั้งจึงใช้ do
  failValidate = false; // Reset สถานะ
  grade = prompt('กรุณาระบุเกรดของคุณเฉพาะ 1, 1.5, 2, 2.5, 3, 3.5 และ 4 เท่านั้น');
  switch (Number(grade)) {
    case 4: result = 'A'; break;
    case 3.5: result = 'B+'; break;
    case 3: result = 'B'; break;
    case 2.5: result = 'C+'; break;
    case 2: result = 'C'; break;
    case 1.5: result = 'D+'; break;
    case 1: result = 'D'; break;
    default: failValidate = true; break;
  }
  if (failValidate) {
    alert('คุณใส่ค่าไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง');
  }
} while (failValidate); // เมื่อผิดพลาดให้ลูปต่อ
alert(`เกรดของคุณคือ ${result}`);
```

หรือใช้การสร้างฟังก์ชั่นแบบ Inline ทำให้การเขียน `switch()...case` จะไม่จำเป็นต้องกำหนด `result = X` เข้าไปใหม่ทุกครั้ง และใช้การ `return` แทน

```javascript
let getGrade = () => { // สร้างฟังก์ชั่นแบบ Inline ด้วย Arrow function
  while(true) { // ลูปไร้สิ้นสุด
    let grade = prompt('กรุณาระบุเกรดของคุณเฉพาะ 1, 1.5, 2, 2.5, 3, 3.5 และ 4 เท่านั้น');
    switch (Number(grade)) {
      case 4: return 'A'; // เนื่องจาก return ฟังก์ชั่นจะหยุดทำงานเพียงเท่านี้และคืนค่า จึงไม่จำเป็นต้องมี break ก็ได้
      case 3.5: return 'B+';
      case 3: return 'B';
      case 2.5: return 'C+';
      case 2: return 'C';
      case 1.5: return 'D+';
      case 1: return 'D';
    }
    alert('คุณใส่ค่าไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง'); // ในกรณีไม่เข้าเงื่อนไขสัก case โปรแกรมจะแสดงส่วนนี้อยู่แล้ว
  }
}
alert(`เกรดของคุณคือ ${getGrade()}`); // เรียกฟังก์ชั่น Inline และหากได้ค่าแสดงค่าบนนี้ทันที
```

## การจับคู่และการใช้ Object

โดยเราอาจจะใช้ข้อมูลเก็บเป็น Array และ Object เพื่อนำมาจับคู่และแสดงผลลัพธ์ได้

```javascript
let grades = [ // Array
  { label: 'A', value: 4 }, // Object
  { label: 'B+', value: 3.5 },
  { label: 'B', value: 3 },
  { label: 'C+', value: 2.5 },
  { label: 'C', value: 2 },
  { label: 'D+', value: 1.5 },
  { label: 'D', value: 1 },
];
let input = prompt('กรุณาระบุเกรดของคุณเฉพาะ 1, 1.5, 2, 2.5, 3, 3.5 และ 4 เท่านั้น');
let result;
for (let grade of grades) { // ลูปทุกๆ Index จาก grades
  if (grade.value == input) { // ตรวจสอบว่า .value เท่ากับ input ที่เราใส่หรือไม่
    alert(`เกรดของคุณคือ ${grade.label}`);
  }
}
```

และสามารถเพิ่มจำนวนเกรดอื่นๆ เพื่อทำให้โปรแกรมสามารถคำนวณเกรดพร้อมกับคำนวณหน่วยกิตและเกรดเฉลี่ยรวม (GPAX) ได้โดยการใช้วิธีประยุกต์จาก Object อื่นๆมาคำนวณร่วมกัน

โดยอธิบายวิธีการคำนวณเกรดได้ว่า

> ใช้ CA (หน่วยกิตรวมทั้งหมด) นำมาหารกับ GP (ผลรวมจาก (หน่วยกิต * เกรดที่ได้) ของแต่ล่ะวิชา)

```javascript
let output = ''
  , CA = 0
  , GP = 0
  , grades = [
    { label: 'A',   score: [80, 100], value: 4 },
    { label: 'B+',  score: [75, 79],  value: 3.5 },
    { label: 'B',   score: [70, 74],  value: 3 },
    { label: 'C+',  score: [65, 69],  value: 2.5 },
    { label: 'C',   score: [60, 64],  value: 2 },
    { label: 'D+',  score: [55, 59],  value: 1.5 },
    { label: 'D',   score: [50, 54],  value: 1 },
    { label: 'F',   score: [0, 49],   value: 0 },
  ], subjects = [
    { key: 'SCIE-GLOBAL',   credit: 3,  label: 'วิทยาศาสตร์และโลก' },
    { key: 'PROG-SQL',      credit: 6,  label: 'การเขียนโปรแกรม SQL' },
    { key: 'PROG-NODEJS',   credit: 6,  label: 'การเขียนโปรแกรม Node.js' },
    { key: 'SENI-PROJECT',  credit: 12, label: 'โครงงานวิทยาศาสตร์คอมพิวเตอร์' },
    { key: 'SPOR-INDIVID',  credit: 1,  label: 'กีฬาประเภทบุคคล' },
    { key: 'ENGL-GENERAL',  credit: 3,  label: 'ภาษาอังกฤษทั่วไป' },
    { key: 'PROG-VCS',      credit: 6,  label: 'การควบคุมเวอร์ชั่นโปรแกรม' },
  ];
for (let subject of subjects) {
  let input;
  let attempt = 0;
  for (input = 0; input < 1 || input > 100; attempt++) {
    input = prompt(`${output ? output + '\n' : '' }${attempt > 0 ? `กรุณาลองใหม่ (คุณใส่ผิดครั้งที่ ${attempt})\n\n` : ''}ระบุคะแนนที่ได้จากวิชา [${subject.key}] ${subject.label} (1 ถึง 100)`);
  }
  let selectedGrade = grades.find(element => {
    return input >= element.score[0] && input <= element.score[1];
  });
  CA += subject.credit;
  GP += selectedGrade.value * subject.credit;
  output += `${subject.label} หน่วจกิต ${subject.credit} ได้คะแนน ${input} เกรด ${selectedGrade.label} (${selectedGrade.value})\n`;
}
alert(`${output}
CA: ${CA}
GP: ${GP}
GPAX: ${(GP / CA).toFixed(2)}
`);
```

ตัวอย่างนี้อาจจะยาวสักนิด เราก็จะไป Deepdown กันทีล่ะจุดกันดูเพื่อเพิ่มความเข้าใจ

- เริ่มด้วยที่ `grades` ข้อนี้ผมจะใช้ `.score` เพิ่มเติมในการกำหนดอาเรย์ของ `[0]` สำหรับค่าอย่างน้อยและ `[1]` สำหรับค่าอย่างมากเพื่อไว้เทียบค่าว่าเกรดจะอยู่ที่ใดเมื่อใส่เลขเป็นคะแนนตั้งแต่ 1 - 100

```js
let grades = [
  { label: 'A',   score: [80, 100], value: 4 }, // กล่าวคือเกรด 4 (A) ตั้งแต่ 80 - 100
  { label: 'B+',  score: [75, 79],  value: 3.5 }, // กล่าวคือเกรด 3.5 (B+) ตั้งแต่ 75 - 79
  { label: 'B',   score: [70, 74],  value: 3 },
  { label: 'C+',  score: [65, 69],  value: 2.5 },
  { label: 'C',   score: [60, 64],  value: 2 },
  { label: 'D+',  score: [55, 59],  value: 1.5 },
  { label: 'D',   score: [50, 54],  value: 1 },
  { label: 'F',   score: [0, 49],   value: 0 },
];
```

- ต่อมาที่ `subjects` ไม่มีอะไรพิเศษมากมาย คือใช้ `.credit` สำหรับคำนวณหน่วยกิต และจะมีการวนลูป `for()` จนกว่าจะครบรายวิชาทั้งหมด สำหรับ Input คะแนนที่เราได้

```js
let subjects = [
  { key: 'SCIE-GLOBAL',   credit: 3,  label: 'วิทยาศาสตร์และโลก' },
  { key: 'PROG-SQL',      credit: 6,  label: 'การเขียนโปรแกรม SQL' },
  { key: 'PROG-NODEJS',   credit: 6,  label: 'การเขียนโปรแกรม Node.js' },
  { key: 'SENI-PROJECT',  credit: 12, label: 'โครงงานวิทยาศาสตร์คอมพิวเตอร์' },
  { key: 'SPOR-INDIVID',  credit: 1,  label: 'กีฬาประเภทบุคคล' },
  { key: 'ENGL-GENERAL',  credit: 3,  label: 'ภาษาอังกฤษทั่วไป' },
  { key: 'PROG-VCS',      credit: 6,  label: 'การควบคุมเวอร์ชั่นโปรแกรม' },
]
```

- จากนั้นผมจะใช้การ `for( ... of ... )` สำหรับการลูปและดึงค่าของ `subjects` มาทีล่ะตัว โดยจะใช้คำนามพหูพจน์กับเอกพจน์ในการตั้งชื่อตัวแปรและวนลูปตามหลักการลูปที่ทำให้อ่านตัวแปรเข้าใจได้ง่ายกว่า

```js
for (let subject of subjects) {
  //
}
```

- จากนั้นจะมีตัวแปรที่ต้องการคือ `input` สำหรับรับค่าและ `attempt` สำหรับตรวจสอบว่าใส่ค่าผิดไปกี่ครั้งแล้ว กล่าวคือ input จะต้องไม่น้อยกว่า 1 และไม่มากกว่า 100 เพราะเราต้องการค่าระหว่าง 1 - 100 เท่านั้น ซึ่งหากผิดจะเข้าเงื่อนไขลูปต้องทำการ `attempt++` ผมจึงใช้ทางเลือกของลูป `for()` แทนเพราะสามารถกำหนด `;;` ให้ทำงานทุกๆลูปได้ทันที เพราะหากใช้ `while()` จะต้องเขียนการเพิ่มค่า `attempt` แยก Statement ต่างหากอีก

```js
for (let subject of subjects) {
  let input;
  let attempt = 0;
  for (input = 0; input < 1 || input > 100; attempt++) {
    input = prompt(`${attempt > 0 ? 'Show warn message' : ''}`); // เมื่อ attempt มากกว่า 0 ให้แสดงข้อความเตือนโดยใช้ If shorthand
  }
}
```

- โดยภายในลูปยังต้องการข้อมูลจากเกรด สามารถใช้ `Array.prototype.find()` ในการหาค่า Array ว่า Index ใดที่มีค่าระหว่าง `.score[0]` กับ `.score[1]` ที่เราได้กล่าวไว้บนตัวแปร `grades` เพื่อตรวจสอบว่าค่าที่เราใส่เป็นเกรดใดกันแน่? โดยในตัวแปร `selectedGrade` ก็จะรับค่า `grades[index]` ที่เงื่อนไขถูกต้องเพียงอันเดียว

```js
let selectedGrade = grades.find(element => { // Arrow function
  return input >= element.score[0] && input <= element.score[1];
});
```

- หลังจากได้ข้อมูลทั้งเกรด วิชาปัจจุบัน และคะแนนที่ผู้ใช้ใส่มาเรียบร้อย ถึงขั้นตอน Logic ทางคณิตศาสตร์ที่จะเก็บค่าไว้ใช้คำนวณในขั้นตอนสุดท้าย กล่าวคือเราต้องการ `เกรดที่ได้ * หน่วยกิต` ของวิชาปัจจุบัน และต้องรวมทั้งหมดเพื่อให้ได้ตามสูตรของ GP และจากนั้นผมจะทำการเก็บค่าไว้ที่ `output` สำหรับการแสดงผลต่อๆไป

```js
CA += subject.credit;
GP += selectedGrade.value * subject.credit;
output += `Another output result\n`;
```

- จากนั้นในลูปต่อๆไป ผมจึงใช้วิธีการเรียก Template literals โดยตรวจสอบก่อนว่ามี `output` หรือยัง เพื่อแสดงผลข้างต้นว่าก่อนหน้านั้นเราเคยใส่ค่าอะไรไว้บ้างโดยใช้ If shorthand เพื่อตรวจสอบเงื่อนไขว่า `output` มีค่าหรือยัง หากมีให้แสดงพร้อมกับ `\n` เพื่อเว้นบรรทัดด้วย

```js
prompt(`${output ? output + '\n' : '' }${attempt > 0 ? `กรุณาลองใหม่ (คุณใส่ผิดครั้งที่ ${attempt})\n\n` : ''}ระบุคะแนนที่ได้จากวิชา [${subject.key}] ${subject.label} (1 ถึง 100)`);
```

- และจบที่การแสดงผลด้วยสูตรของ `GP / CA` สำหรับการหา GPAX และใช้ `.toFixed(2)` เพื่อแสดงจุดทศนิยม 2 ต่ำแหน่ง

## การทำเป็น OOP

โดยปกติเมื่อโปรแกรมที่มีขนาดใหญ่และมีกระบวนการมากขึ้น ควรมีโครงสร้างเป็น OOP และมี Methods แยกไว้อย่างชัดเจนว่าทำงานสำหรับอย่างไร

```javascript
class GradeCalc {
  constructor(subjects) {
    this.output = '';
    this.CA = 0;
    this.GP = 0;
    this.GPAX = 0;
    this.subjects = this.expect(subjects);
    this.grades = [
      { label: 'A',   score: [80, 100], value: 4 },
      { label: 'B+',  score: [75, 79],  value: 3.5 },
      { label: 'B',   score: [70, 74],  value: 3 },
      { label: 'C+',  score: [65, 69],  value: 2.5 },
      { label: 'C',   score: [60, 64],  value: 2 },
      { label: 'D+',  score: [55, 59],  value: 1.5 },
      { label: 'D',   score: [50, 54],  value: 1 },
      { label: 'F',   score: [0, 49],   value: 0 },
    ]
  }
  expect(data) {
    switch (true) {
      case !data: throw 'argument is needed at least 1 item of array';
      case !(data instanceof Array): throw 'argument is needed to be array';
      default:
        for (let item of data) {
          switch (true) {
            case !item.key: throw '.key is needed';
            case !item.credit: throw '.credit is needed';
            case !item.label: throw '.label is needed';
            case typeof(item.key) !== 'string': throw '.key is allow for string only';
            case typeof(item.credit) !== 'number': throw '.credit is allow for number only';
            case typeof(item.label) !== 'string': throw '.label is allow for string only';
            case !Number.isInteger(item.credit): throw '.credit is needed to be integer only (not floating-point)';
          }
        }
    }
    return data;
  }
  init() {
    for (let subject of this.subjects) {
      let input = this.askGrade(subject);
      let grade = this.getGrade(input);
      this.calcCA(subject.credit);
      this.calcGP(grade.value, subject.credit);
      this.generateOutput(grade, subject, input);
    }
    this.GPAX = this.calcGPAX();
    return this;
  }
  showOutput() {
    return `${this.output}
      CA: ${this.CA}
      GP: ${this.GP}
      GPAX: ${this.GPAX}
    `;
  }
  askGrade(subject) {
    let input, attempt = 0;
    for (input = 0; input < 1 || input > 100; attempt++) {
      input = prompt(`${this.output ? this.output + '\n' : '' }${attempt > 0 ? `กรุณาลองใหม่ (คุณใส่ผิดครั้งที่ ${attempt})\n\n` : ''}ระบุคะแนนที่ได้จากวิชา [${subject.key}] ${subject.label} (1 ถึง 100)`);
    }
    return input;
  }
  getGrade(input) {
    return this.grades.find(element => {
      return input >= element.score[0] && input <= element.score[1];
    });
  }
  calcCA(credit) {
    this.CA += credit;
  }
  calcGP(grade, credit) {
    this.GP += grade * credit;
  }
  calcGPAX() {
    return (this.GP / this.CA).toFixed(2);
  }
  generateOutput(grade, subject, input) {
    this.output += `${subject.label} หน่วจกิต ${subject.credit} ได้คะแนน ${input} เกรด ${grade.label} (${grade.value})\n`;
  }
}

let gradeCalc = new GradeCalc([
  { key: 'SCIE-GLOBAL',   credit: 3,  label: 'วิทยาศาสตร์และโลก' },
  { key: 'PROG-SQL',      credit: 6,  label: 'การเขียนโปรแกรม SQL' },
  { key: 'PROG-NODEJS',   credit: 6,  label: 'การเขียนโปรแกรม Node.js' },
  { key: 'SENI-PROJECT',  credit: 12, label: 'โครงงานวิทยาศาสตร์คอมพิวเตอร์' },
  { key: 'SPOR-INDIVID',  credit: 1,  label: 'กีฬาประเภทบุคคล' },
  { key: 'ENGL-GENERAL',  credit: 3,  label: 'ภาษาอังกฤษทั่วไป' },
  { key: 'PROG-VCS',      credit: 6,  label: 'การควบคุมเวอร์ชั่นโปรแกรม' },
]).init();
alert(gradeCalc.showOutput());
```

โดยใช้โค้ดเดิมทั้งหมด ซึ่งอธิบาย Methods ได้ดังนี้

- `constructor()` ต้องการ Arguments สำหรับการใส่ข้อมูล `subjects` เพื่อเก็บค่าลง Property เป็น Array ที่มี Object ในรูปแบบตามนี้

```js
[
  {
    key: String,
    credit: Number,
    label String
  },
  {
    //
  }
]
```

- ในช่วงเริ่มทำงาน OOP จะเรียกใช้ `expect()` สำหรับตรวจสอบว่ามีค่าใดผิดพลาดหรือไม่ เช่น ไม่ได้ใส่ค่า ค่าหาย หรือค่าไม่ถูกประเภท หากผิดให้ทำการ `throw`
- หลังจากนั้นให้ทำการเรียก `init()` ด้วยตนเอง สำหรับการเริ่มทำงานของ Class นี้ เช่นเดียวกับการทำงานของโปรแกรมด้านบน จะมี Methods แบ่งสำหรับการทำงานดังนี้
  - ภายใน `init()` ทำการลูป `subjects` ทั้งหมด และรันคำสั่งต่อไปนี้
    - `askGrade(subject)` สำหรับการขึ้น `prompt()` เพื่อกรอกเกรด ต้องการ `subject` ปัจจุบันบน Argument
    - `getGrade(input)` สำหรับการ `Array.prototype.find()` เพื่อหาว่า `subject` ที่อยู่ปัจจุบันมีค่าเท่าใด
    - `calcCA(credit)` และ `calcGP(grade, credit)` สำหรับการคำนวณดังชื่อของ Method
    - `generateOutput(grade, subject, input)` สำหรับการสร้างเนื้อหาไว้แสดงผล
  - เมื่อครบลูป ให้ทำการ `calcGPAX()` เพื่อคำนวณ GPAX ที่ได้ และ `return this;` เพื่อคืนค่าทั้งหมดของ Object
- หลังจากนั้นเรียก `show()` สำหรับการดึงข้อความของผลลัพธ์ออกมา
