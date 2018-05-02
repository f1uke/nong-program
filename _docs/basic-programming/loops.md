---
title: Loops
subtitle: การใช้งาน <strong>วนลูป</strong> เพื่อการทำซ้ำในโปรแกรม
icon: fas fa-undo
difficulty: 1
duration: 1
useful: 1
---

## while

**While** คือการวนลูปก็ต่อเมื่อเงื่อนไขเป็นจริง จนกว่าเงื่อนไขจะถูกเปลี่ยนเป็นเท็จ โดยจะใช้คำสั่ง `while()`

```javascript
let number = 1;
while (number <= 5) {
  alert(`${number} alert`);
  number++; // number = number + 1
}
```

เราจะเห็นว่าโปรแกรมจะทำงานวนรอบ `alert()` จนกว่าจะครบ `number > 5` ซึ่งก็คือเมื่อเงื่อนไขเป็นเท็จนั้นเอง โดยตัวอย่างด้านบนหากจำในบทของการใช้เครื่องหมาย `++` กันได้ เราสามารถใช้ใน Inline เพื่อแสดงผลก่อน จากนั้นทำการคำนวณเพิ่มทีล่ะค่าได้ทันที

```javascript
let number = 1;
while (number <= 5) {
  alert(`${number++} alert`); // number = number + 1
}
```

ซึ่งเราสามารถใช้ `while()` เพื่อวนลูปหลายๆจุดประสงค์การใช้งาน อาทิเช่น การตรวจสอบข้อมูลจนกว่าจะได้รับที่ถูกต้อง ซึ่งในตามตัวอย่างจะเป็นการรอรับค่าและตรวจสอบว่าต้องไม่ใช่ `null` หรือค่าว่าง ถ้าหากว่างจะทำการร้องขอให้ใส่ข้อมูลอีกครั้ง

```javascript
let name;
while (!name) { // while name is null or false
  name = prompt('Please input your name');
}
alert(`Your name is ${name}`);
```

> **คำเตือน:** ต้องระมัดระวังในการใช้คำสั่งวนลูปใดๆก็ตามให้ดี มิเช่นนั้นโปรแกรมอาจจะเกิดการวนลูปไม่มีสิ้นสุดได้ และจะทำให้โปรแกรมค้าง
>
> ```js
> let n = 0;
> while (n < 0) { // เงื่อนไขไม่มีทางเป็นไปได้ ทำให้เกิดการลูปไร้สิ้นสุด
>    n++;
> }
> ```
> {:.is-danger}
{:.is-danger}

## do...while

การใช้ `do...while` จะเป็นการกำหนดลูปเช่นเดียวกับ `while()` เพียงแต่จะเริ่มทำงานก่อน 1 ครั้งแล้วทำการเช็คเงื่อนไข

```javascript
let name = 'John Doe'; // กำหนดค่า name
while (!name) { // ตรวจเงื่อนไขก่อนลูป
  name = prompt('Please input your name');
}
alert(`Your name is ${name}`);
```

```javascript
let name = 'John Doe'; // กำหนดค่า name
do {
  name = prompt('Please input your name'); // รับค่าใหม่ไปยัง name
} while (!name); // ตรวจเงื่อนไขภายหลังลูปครั้งแรก
alert(`Your name is ${name}`);
```

> **คำเตือน:** เฉพาะการใช้ `do...while` ในส่วนของ `while()` จะมีเครื่องหมาย `;` ปิดท้ายด้วย
{:.is-danger}

## break

การใช้ `break` จะเป็นการสั่งออกจากลูปภายใน Statement นั้นๆ

```javascript
let sum = 0;
while (true) { // ลูปไร้สิ้นสุด
  let number = prompt(`
    Input number only to sum them.
    Other value like "String" or 0 to exit.

    Sum is ${sum} now.
  `);
  if (isNaN(+number)) { // isNaN() ใช้เพื่อตรวจสอบว่าเป็นค่า NaN หรือไม่ เพราะหากเราใส่ String และแปลงค่า +number จะกลายเป็นไม่ใช่จำนวน
    alert('Your input is not a number');
    break; // ออกจากลูป
  }
  if (+number == 0) { // เช็คว่าเป็น null, 0 หรือกด cancel หรือไม่
    alert('Your input is null or zero or you hit cancel');
    break; // ออกจากลูป
  }
  sum += +number; // sum = sum + +number ที่ต้องเติม +number เพราะต้องแปลงจาก String เป็น Number
}
alert(`Final result is: ${sum}`);
```

> **หมายเหตุ:** หากยังจำกันได้ในส่วนของ `switch() { case ... }` เราจะเห็นว่าต้องมีการใช้ `break` ทุกครั้งหลังจากที่จบ `case` ดังกล่าว จึงกล่าวได้ว่า `break` มีหน้าที่การหยุด Statement นั้นๆให้จบการทำงานลง

## continue

การใช้ `continue` จะเป็นการข้าม Statement นั้น และทำงานลูปต่อไป

```javascript
let number = 0;
while (number < 10) {
  number++;
  if (number % 2 == 0) { // หากหาร 2 ลงตัว หมายถึงเป็นเลขคู่
    continue; // หากเป็นเลขคู่ ให้ข้ามเลขนี้ไป และไปลูปต่อไป
  }
  alert(number); // แสดงเฉพาะเลขคี่
}
```

> **คำเตือน:** ทั้ง `continue` และ `break` จะไม่ใช่เครื่องหมาย `()` และจบด้วย `;` ทันที และใช้ได้เฉพาะภายในลูปเท่านั้น
{:.is-danger}

## for()

การใช้ลูป `for()` จะต่างกับ `while()` คือมีรูปแบบการวนลูปที่ชัดเจนกว่า ทำให้สามารถกำหนดจำนวนที่ต้องการได้ดีกว่า เพราะมีการใช้ Statement เฉพาะช่วงเริ่มต้น การตรวจสอบ และขั้นตอนก่อนเริ่มลูปต่อไป

จากตัวอย่างคือการเปรียบเทียบเพื่อวนลูปทั้งหมด 5 ครั้ง

```javascript
let start = 1, end = 5;
while (start <= end) {
  alert(start++); // แสดงผลก่อน แล้วค่อยบวก
}
```

```javascript
for (let start = 1, end = 5; start <= end; start++) {
  // ช่วงเริ่มลูปทั้งแรก ; เงื่อนไขที่จะลูป ; เมื่อจบทุกๆรูปให้ทำการบางอย่าง
  alert(start); // ไม่จำเป็นต้องใช้ start++ เพราะทุกๆจบรูปจะทำงานส่วนหลังสุดบน for() ให้
}
```

ดังนั้นเราจะเห็นว่าการใช้ `for()` จะช่วยให้การวนลูปที่มีจำนวนครั้งแน่นอนได้ดีกว่า เพราะมีการบังคับให้กำหนด Statement ภายใน `()` ได้ 3 ส่วน โดยการใช้ `;` แบ่งทั้งหมด 3 ช่วง แต่ขณะที่ `while()` กำหนดได้เพียงตรวจสอบเงื่อนไข จึงทำให้เราอาจจะลืมการเขียนพวก `start++` ตามตัวอย่างทำให้เกิดลูปไม่มีสิ้นสุดได้

แต่ `while()` ก็จะมีประโยชน์ในการใช้ลูปคู่กับ `break` หรือต้องการใช้เพียงเพื่อตรวจสอบการ Input หากไม่ถูกต้องโปรแกรมจะทำการลูปขอข้อมูลใหม่อีกครั้ง เพราะมีจำนวนลูปที่ไม่แน่นอนขึ้นอยู่กับเมื่อไหร่ผู้ใช้จะใส่ข้อมูลได้ถูกต้อง

โดยเราก็สามารถนำการหาเลขคี่จากตัวอย่างก่อนหน้านี้ นำมาใช้กับ `for()` เพื่อทำให้อ่านข้อมูลการลูปได้เข้าใจมากขึ้น

```javascript
for (let number = 0; number < 10; number++) {
  if (number % 2 == 0) {
    continue;
  }
  alert(number); // แสดงเฉพาะเลขคี่
}
```

และเราสามารถใช้ `for()` หรือเทคนิกอื่นๆเพื่อนับค่าถอยหลังได้

```javascript
for (let start = 0, end = -5; start >= end; start--) {
  alert(start);
}
```

> **หมายเหตุ:** ถึงอย่างไรก็ตามทั้ง 2 ลูปสามารถใช้ร่วมกันได้ เพราะมีความสามารถในการวนจำนวนรอบเช่นเดียวกัน

## บทสรุป

- การใช้ `while()` หากเงื่อนไขเป็นจริงจะทำการลูป
- การใช้ `do { ... } while` จะทำการงานก่อน 1 ครั้ง จากนั้นตรวจเงื่อนไข
  - เฉพาะ `do` การใช้ `while()` จะต้องมี `;` ปิดท้าย
- `break` เพื่อหยุดหรือออกจากลูปใน Statement นั้นๆ
- `continue` เพื่อดำเนินการต่อหรือการข้ามใน Statement นั้นๆ
- `for()` มักจะถูกนำมาใช้เพื่อกำหนดจำนวนครั้งที่จะลูปอย่างชัดเจน โดยมี 3 ช่วงการดำเนินการ
  - การทำงานเฉพาะช่วงเริ่มต้น ; ตรวจสอบเงื่อนไขหากจริงทำการวนลูป ; การทำงานทุกๆครั้งที่จบลูป