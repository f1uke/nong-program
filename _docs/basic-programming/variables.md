---
title: Variables
subtitle: การใช้งาน <strong>ตัวแปร</strong> ในการกำหนดค่า
icon: fas fa-font
difficulty: 1
duration: 3
---

## การใช้งานของตัวแปร

**ตัวแปร หรือ Variables** ในการเขียนโปรแกรม ก็เหมือนๆกับการกำหนดตัวแปร `x` หรือ `y` ที่เราอาจจะคุ้นเคยกันในวิชาคณิตศาสตร์ เพื่อแทนค่าอะไรบางอย่าง เช่น

> กำหนดค่า **x เท่ากับ 3** เมื่อเรานำ **x + 2** จะได้เท่ากับ **5**
{:.is-light}

โดยการจัดให้เป็นรูปแบบในการเขียนโปรแกรมได้ดังนี้

```javascript
let x = 3; // กำหนดค่า x เท่ากับ 3
alert(x + 2); // แสดงผล x + 2
```

เมื่อเราทำการ Run ผลลัพธ์ที่ได้คือ **5** ตามผลลัพธ์ของ `alert()` ที่สั่งให้แสดงผลของ `x + 2` โดยเราจะใช้คำสั่ง `let` เพื่อการกำหนดชื่อตัวแปร และใช้เครื่องหมาย `=` ในการกำหนดค่าให้กับตัวแปร

### การกำหนดค่าตัวแปร

ในการกำหนดตัวแปรของ JavaScript จะเรียกใช้คำสั่ง `let`

```js
let message; // กำหนดตัวแปร message แบบไม่มีค่า
```

จากนั้นในการกำหนดค่า เราจะใช้คำสั่ง `=`

```js
let message; // กำหนดตัวแปร message แบบไม่มีค่า
message = 'Hello World!'; // กำหนดให้ message มีค่าเท่ากับ 'Hello World!'
```

จากนั้นเราจะได้ว่า `message` มีค่าเท่ากับ `'Hello World!` เมื่อทำการแสดงผลด้วย `alert()`

```javascript
let message; // กำหนดตัวแปร message แบบไม่มีค่า
message = 'Hello World!'; // กำหนดให้ message มีค่าเท่ากับ 'Hello World!'
alert(message); // แสดงผล message
```

> **เพิ่มเติม:** ในการใช้ชื่อตัวแปร **พิมพ์เล็ก-พิมพ์ใหญ่** มีผลต่อการใช้งาน เช่นดังตัวอย่างที่ใช้ `Message` เป็นพิมพ์ใหญ่นำหน้า
>
> ```javascript
> let Message = 'Hello World!';
> alert(message);
> ```
>
> จะพบว่ามี Error เตือนว่า `message is not defined` ตามที่แปลได้ตรงๆ คือ message ไม่ได้ถูกกำหนดค่าไว้ ดังนั้นจึงต้องเปลี่ยนเป็นพิมพ์เล็ก-ใหญ่ให้ถูกต้องด้วย
{:.is-warning}

> **เพิ่มเติม:** การกำหนดชื่อตัวแปร จะไม่สามารถใช้คำสงวนได้ เช่น `let` ด้วยกันเองดังตัวอย่าง
>
> ```javascript
> let let = 'Let me gooo!';
> ```
>
> จะพบว่ามี Error เตือนว่า `Unexpected strict mode reserved word` เนื่องจากเป็นคำสงวนที่ซ้ำกับคำสั่งพื้นฐานบน JavaScript ซึ่งนอกเหนือจากนั้น
>
> ```javascript
> let 123Hi = '123, Hi!';
> ```
>
> ```javascript
> let message! = 'Show me a message!!!';
> ```
{:.is-warning}

### การแทนค่าตัวแปร

จากตัวอย่างเก่า เราจะใช้

```javascript
let message; // กำหนดตัวแปร message แบบไม่มีค่า
message = 'Hello World!'; // กำหนดให้ message มีค่าเท่ากับ 'Hello World!'
alert(message); // แสดงผล message

```
