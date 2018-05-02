---
title: Functions
subtitle: ทำความรู้จักกับ <strong>ฟังก์ชั่น</strong> ของโปรแกรม
icon: fas fa-code
difficulty: 1
duration: 1
useful: 1
---

จริงๆเราเคยได้ใช้ส่วนของฟังก์ชั่นโปรแกรมมาก่อนแล้ว อาทิเช่น `alert()` หรือ `if()` ก็จัดว่าเป็นฟังก์ชั่นโดยเราสามารถสังเกตได้อย่างง่ายด้วยเครื่องหมาย `()` ที่ลงท้ายบนคำศัพท์ล้วนเป็นฟังก์ชั่นทั้งหมด

## การใช้งานฟังก์ชั่น

ในการใช้งานฟังก์ชั่นเราอาจจะทราบกันดีแล้วว่า เราอาจจะจำเป็นต้องระบุค่าบางอย่างลงใน `()` นั้นคือการใส่ **Arguments (อาร์กิวเมนต์)** เพื่อให้ฟังก์ชั่นทำการรับค่าบางอย่างในการทำงานของตนต่อไป ตัวอย่างการใช้ `alert()` เราก็จะจำเป็นต้องใส่ข้อความลงไปผ่านอาร์กิวเมนต์ เพื่อให้ฟังก์ชั่นทราบว่าเราต้องการแสดงผลในอาร์กิวเมนต์นั้นๆ

```javascript
// ฟังก์ชั่น ( อาร์กิวเมนต์ );
   alert ('Hello world');
```

## การเขียนฟังก์ชั่น

เราสามารถสร้างฟังก์ชั่นและรอการรับค่าเป็นของเราเองได้ โดยการใช้อาร์กิวเมนต์คือการ **ส่งค่า** ขณะที่การใช้ **Parameters (พารามิเตอร์)** คือการ **รับค่า** ซึ่งเราไม่ได้จำเป็นจะต้องใส่พารามิเตอร์เสมอไป โดยการสร้างฟังก์ชั่นจะใช้คำว่า `function` เป็น Keywords บน JavaScript

```javascript
// function ชื่อฟังก์ชั่น(พารามิเตอร์) { ...statement... }
   function sayHello(name) {
     alert(`Hello, ${name}`);
   }

sayHello('John Doe'); // alert('Hello, John Doe')
sayHello('Neko'); // alert('Hello, Neko')
```

ซึ่งในการใช้พารามิเตอร์จะเป็นการรับค่าจากฟังก์ชั่น ซึ่งในกรณีเราไม่ได้ระบุจะทำให้ตัวแปรบนพารามิเตอร์กลายเป็น `undefined`

```javascript
function sayHi(to) {
  alert(`Hi, ${to}`);
}
sayHi(); // Hi, undefined
// ไม่เกิด Error แต่จะไม่มีข้อมูลที่ได้
```
{:.is-danger}

ดังนั้นเราสามารถทำให้พารามิเตอร์เป็น **Optional (ไม่จำเป็น)** ได้โดยการกำหนดค่า Default (ค่าเริ่มต้น) ให้แก่ฟังก์ชั่น

```javascript
function showNumber(number = 1) {
  alert(`Your number is ${number}`);
}
showNumber(); // 1
showNumber(50); // 50
```

และแน่นอนว่ายังมี **คำสงวน** เช่นเดียวกับการประกาศตัวแปร หากเราใช้ชื่อฟังก์ชั่นที่มีอยู่แล้วบน JavaScript อาทิเช่น `alert()` `confirm()` `prompt()` อาจจะทำให้ฟังก์ชั่นเดิมที่มีอีกหน้าที่หนึ่ง ถูกเปลี่ยนหน้าที่เดิมกลายเป็นอย่างอื่นได้

```javascript
function prompt() {
  alert('Hello alert, not prompt() ?');
}
prompt();
```
{:.is-danger}

## return

การ `return` คือการคืนค่าใดค่าหนึ่งให้แก่ผู้เรียกฟังก์ชั่น ยกตัวอย่างเช่น การเรียก `let number = 1 + 2;` ในส่วนของ `1 + 2` โปรแกรมจะทำการคำนวณให้ และได้ค่า `3` กลับมาทำให้กลายเป็น `let number = 3;` ซึ่งก็คือการ **return ค่า** จึงทำให้โปรแกรมสามารถเข้าใจได้ว่าค่านั้นจริงๆควรจะเป็นค่าอย่างไรก่อนนำไปใช้งานต่อ

โดยในการใช้ฟังก์ชั่นเราสามารถ `return` ค่าที่เราต้องการให้โปรแกรมทราบว่า สิ่งที่จะได้จากฟังก์ชั่นนั้นคือค่าอะไร

```javascript
function multiple(number) {
  return number * number
}
alert(multiple(4)); // 4 * 4 = 16
// กล่าวคือโปรแกรมจะมอง multiple(4) คือ 16 เพราะจากการ return ค่าที่ได้
```

```javascript
function getName(index) {
  let people = ['John', 'Jane', 'Joe'];
  return people[index];
}
let input = prompt('Input between 0 - 2 to get their name');
let output = getName(input);
alert(output);
```

## Scope

**Scope** คือการที่ตัวแปรจะสามารถเข้าถึงกับตัวแปรอื่นๆได้อย่างไร โดยแบ่งเป็น 2 หมวดย่อยๆคือ **Local** กับ **Global**

> **ยกตัวอย่าง:** ข่าวระดับโลก (Global) เช่น เศรษฐกิจโลก ภัยพิบัติ สงคราม จะมีผู้คนสามารถเข้าถึงได้มากกว่าและรับรู้ทุกที่ ในขณะที่ข่าวท้องถิ่น (Local) เช่น เศรษฐกิจท้องถิ่น ฟ้าอากาศประจำจังหวัด ข่าวรถชนกัน อาจจะรับรู้ได้เพียงชุมชนในบริเวณนั้นเท่านั้น

กล่าวคือตัวแปรที่อยู่ภายใน Local โปรแกรมจะนำมาใช้ได้เพียง Scope ของ Block statement นั้นๆ ไม่สามารถออกนอก Statement ได้ เช่น

```javascript
function showName() {     // \
  let name = 'John Doe';  //  | ตัวแปร name = 'John Doe' เป็น Local
  alert(name);            //  | โดยจาก Scope จะรู้จักแค่ภายใน Statement ของฟังก์ชั่นนี้
}                         // /

showName(); // alert('John Doe');
alert(name); // alert(); ไม่มีค่า เพราะ name รู้จักแค่ภายใน Local ของ showName()
```

ขณะที่ตัวแปรที่อยู่ด้านนอก (Global) จะทำให้ฟังก์ชั่นอื่นๆที่เป็น Local สามารถเรียกใช้ได้

```javascript
let name = 'John Doe';              // \
                                    //  |
function showName() {               //  |
  alert(name);                      //  | ตัวแปร name = 'John Doe' เป็น Global
}                                   //  | ทำให้ใน Scope ทั้งหมดรู้จักตัวแปร name
                                    //  |
showName(); // alert('John Doe');   //  |
alert(name); // alert('John Doe');  // /
```

โดยการทำความเข้าใจกับ Scope อาจจะค่อนข้างยาก เพราะยังมีการ **Override (ทับข้อมูล)** ของตัวแปร ทำให้ตัวแปรเดิมที่อาจจะทำงานเป็น Global ถูกเปลี่ยนเป็นใช้เฉพาะภายใน Local นั้นๆด้วยชื่อตัวแปรเดียวกันได้ เนื่องจากภายใน Local จะพยายามหาตัวแปรของ Local ด้วยกันเองก่อน หากไม่มีจึงจะหาตัวแปรจาก Global อีกที ในกรณีที่ไม่พบทั้งสองตัวจะทำให้เป็น undefined หรือไม่มีข้อความ

```javascript
let name = 'John Doe'; // กำหนด Global: name = 'John Doe'

function showName() {
  let name = 'Nakorn Sinpadung'; // กำหนด Local: name = 'Nakorn Sinpadung'
  alert(name); // แสดงบน Local ถ้าไม่มีแสดงบน Global
}

showName(); // เรียกฟังก์ชั่น
alert(name); // แสดงบน Global

name = 'Jane Dee'; // เปลี่ยนค่าบน Global

showName(); // เรียกฟังก์ชั่น ได้ค่าบน Local
alert(name); // แสดงบน Global ได้ค่าบน Global
```