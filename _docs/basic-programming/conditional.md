---
title: Conditional
subtitle: การทำงานของโปรแกรมตาม <strong>เงื่อนไข</strong>
icon: fas fa-exchange-alt
difficulty: 1
duration: 1
useful: 1
---

## if()

การใช้ `if()` จะเป็นการตรวจสอบเงื่อนไขภายในวงเล็บ `()`

- ข้อมูลที่เป็น `true` `ค่าที่มากกว่า 1` `มีข้อความใดๆก็ได้` จะถือว่าเป็น **จริง** และทำเงื่อนไขดังกล่าว
- แต่หากมีค่าเป็น `false` `0` `null` `undefined` หรือที่บอกได้ว่าไม่มีค่ากับเป็นค่าเท็จ จะถือว่าเป็น **เท็จ** และทำให้ข้ามเงื่อนไขดังกล่าว

```javascript
let number = 1
  , bool = true
  , string = 'foobar';
if (number) {
  alert('Number!');
}
if (bool) {
  alert('Boolean!');
}
if (string) {
  alert('String!');
}
alert('All tests are done');
```

```javascript
let number = 0
  , bool = false
  , string = '';
if (number) {
  alert('Number!');
}
if (bool) {
  alert('Boolean!');
}
if (string) {
  alert('String!');
}
alert('All tests are done');
```

หรืออาจจะยกตัวอย่างพร้อมการใช้ `confirm()` เพื่อช่วยให้เข้าใจมากขึ้น

```javascript
let isProgrammer = confirm('Are you programmer?');
alert(`Your answer is ${isProgrammer}; Type is ${typeof(isProgrammer)}`);
if (isProgrammer) { // เมื่อเงื่อนไข isProgrammer เป็นจริง โปรแกรมจะทำงานภายใน { ... }
  alert('Hello world!'); // แสดงข้อความหากเข้าเงื่อนไข
}
// กรณีตอบ Cancel หรือเท็จ จะทำให้ข้ามโปรแกรมด้านบน
```

## else

การใช้ `else` จะเป็นการเข้าเงื่อนไข **อื่นๆ** ที่เหลือทั้งหมดของเงื่อนไข `if()` ต่างๆ โดยจะมี Statement ที่ถูกทำงานภายในเครื่องหมายปีกกา `{}` ของ `if()` เท่านั้น

```javascript
let answer = prompt('1 + 3 = ?');
if (answer == 4) {
  alert('Correct!');
}
else {
  alert('Wrong!!');
}
```

```javascript
let age = prompt('Are you male?');
if (age) {
  alert('Male');
}
else {
  alert('Female');
}
```

> **หมายเหตุ:** การใช้ `prompt()` จะได้ค่า String กลับมา ดังนั้นไม่สามารถใช้การเทียบของ `===` ได้หากต้องการเทียบกับ Number เช่น
>
> ```javascript
> let answer = prompt('1 + 3 = ?');
> alert(`answer is ${answer}; type is ${typeof(answer)}`);
> if (answer === 4) { // String === Number ไม่ได้ เพราะข้อมูลประเภทไม่ตรงกัน
>   alert('Correct!');
> }
> else {
>   alert('Wrong!!');
> }
> ```

> **คำเตือน:** การใช้ `else` จะไม่มีเครื่องหมาย `()` เนื่องจากเป็นเงื่อนไขอื่นๆที่เหลือทั้งหมด จึงไม่จำเป็นต้องรับค่าใดๆลงใน `()`
{:.is-danger}

## else if()

ในการกำหนดเงื่อนไข สามารถกำหนดได้มากกว่า 2 ซึ่งจะต้องใช้หลังจากเรียก `if()` ก่อนเท่านั้น เพื่อทำเงื่อนไขอื่นๆเพิ่มเติม

```javascript
let answer = prompt('4 * 4 = ?');
if (answer < 16) {
  alert('Less?');
}
else if (answer > 16) {
  alert('Greater?');
}
else {
  alert('Correct!');
}
```

> **เพิ่มเติม:** ในการใช้เครื่องหมาย `{}` ค่อนข้างมีวิธีการจัดระเบียบหลายวิธี แล้วแต่สไตล์ของแต่ล่ะคนและความถนัด เพราะจะช่วยให้การอ่านโปรแกรมได้ง่ายขึ้น ซึ่งโดยส่วนมากเราจะเลือกใช้แบบที่ 2 เพราะทำให้ประหยัดบรรทัดมากกว่าแบบอื่น เช่น
>
> ```js
> if (...) {
>   //
> }
> else if (...) {
>   //
> }
> else {
>   //
> }
> ```
>
> ```js
> if (...) {
>   //
> } else if (...) {
>   //
> } else {
>   //
> }
> ```
>
> ```js
> if (...)
> {
>   //
> }
> else if (...)
> {
>   //
> }
> else
> {
>   //
> }
> ```

## Code block

ภายในเครื่องหมาย `{}` จะเรียกว่า **Code block** คือช่วงของการทำงานใน Statement แต่ล่ะช่วง เพื่อให้ทราบว่าการทำงานถึงจุดใด ดังนั้นในกรณีที่โปรแกรมของเราต้องการเพียง Statement เดียวสามารถนำเครื่องหมายออกได้ดังตัวอย่าง

```javascript
let age = 19;
if (age >= 18) {
  alert('Adult');
} else {
  alert('Younger');
}
```

```javascript
let age = 19;
if (age >= 18) alert('Adult');
else alert('Younger');
```

แต่หากเรามีมากกว่า 2 Statements ขึ้นไป จำเป็นต้องใช้ `{}` เพื่อให้โปรแกรมทราบว่า ช่วงการทำงานของ `if()` Statement ถึงที่ไหน

```javascript
let age = 19;
if (age >= 18) {
  alert('Adult');
  alert('Welcome back');
} else {
  alert('Younger');
  alert('You are not allow');
}
```

```javascript
let age = 19;
if (age >= 18) alert('Adult'); alert('Welcome back');
else alert('Younger'); alert('You are not allow');
```
{:.is-danger}

> **เพิ่มเติม:** เราอยากจะให้ใช้เครื่องหมาย `{}` ไว้ตลอดสำหรับการทำเงื่อนไขและอื่นๆ ถึงแม้มันจะมีเพียง Statement เดียวก็ตาม เพื่อป้องกันความสับสนในการจำ Syntax (สัญลักษณ์) ต่างๆ ซึ่งหลังจากนี้ในบทเรียนเราจะแทรก `{}` ไว้ตลอด แต่ในการเขียนโปรแกรมขั้นสูงขึ้นไปเราก็ควรจะต้องทราบวิธีลัดเช่นนี้ด้วย

## Shorthand

เนื่องจากการใช้ if else โดยทั่วไปแล้วจะมีปัญหาการเขียนที่ยาวเกินไป กับเงื่อนไขเล็กๆน้อยๆ จึงมีการใช้ **Shorthand** ที่จะทำให้สามารถเรียกใช้ Statement บางส่วนโดยใช้สัญลักษณ์โดยย่อได้ อาจจะคล้ายๆกับการนำ `{}` ออก แต่จะใช้งานง่ายกว่าและจบในบรรทัดเดียว

โดยการใช้ If Shorthand จะสามารถทำได้เพียง 2 เงื่อนไขหลักๆเท่านั้น คือจริงและเท็จ โดยเราจะใช้เครื่องหมาย `?` ในการทำงานข้อมูลของจริง จากนั้นใช้ `:` ในการทำงานข้อมูลของเท็จ

```js
conditional ? true : false;
```

ดังตัวอย่าง

```javascript
let age = prompt('Your age?');
let message;
if (age >= 18) {
  message = 'Adult';
} else {
  message = 'Younger';
}
alert(message);
```

```javascript
let age = prompt('Your age?');
let message = (age >= 18) ? 'Adult' : 'Younger'; // หากจริงจะได้หลัง ? หากเท็จจะได้หลัง :
alert(message);
```

หรืออาจจะเขียนให้สั้นกว่าเดิมได้ดังตัวอย่างเหลือเพียงบรรทัดเดียว

```javascript
// ถ้ายังจำกันได้ของลำดับการทำงานคณิตศาสตร์
// โปรแกรมจะเริ่มทำงานใน () ข้างในสุดก่อน
// คือ prompt('Your age?')
// จากนั้นโปรแกรมจะหยุดรอรับค่า
// เมื่อรับค่าได้แล้ว ทำการเทียบ >= 18
// หากจริง 'Adult' หากเท็จ 'Younger'
// สุดท้าย แสดงค่าที่ได้บน alert()
alert(prompt('Your age?') >= 18 ? 'Adult' : 'Younger');
```

> **หมายเหตุ:** ถึงอย่างไรการใช้ Shorthand ก็ไม่ได้จำเป็นเสมอไป วิธีการใช้ if else หลายๆครั้งอาจจะช่วยให้อ่านลำดับขั้นตอนการทำงานโปรแกรมได้ง่ายกว่า เพียงแต่เราอยากจะสอนให้ทราบกันก่อนว่าสามารถใช้วิธีเหล่านี้ได้ เพราะการเขียนโปรแกรมที่มีเงื่อนไขเล็กๆน้อยๆบ่อยครั้งจะทำให้มีความน่ารำคาญต่อการเรียก if else ทำให้การใช้ `?:` อาจจะสะดวกกว่า

## switch

การใช้ `switch()` จะเป็นการเรียก Statement ที่ต้องการเงื่อนไขเช่นเดียวกับ `if()` แต่จะสามารถนำตัวแปรใดตัวแปรหนึ่งมาเปรียบเทียบได้หลายครั้ง

```javascript
let input = prompt(`
  Input only A-D to answer (Uppercase)

  What is 4 + 4 = ?
  A) 1
  B) 9
  C) 8
  D) 10
`);
switch (input) {
  case 'A':
    alert('Wrong!');
    break;
  case 'B':
    alert('Wrong!');
    break;
  case 'C':
    alert('Correct!');
    break;
  case 'D':
    alert('Wrong!');
    break;
  default:
    alert('Please input only (A-D) with uppercase');
    break;
}
```

เราจะเห็นว่า `switch()` จะตรวจสอบจนกว่าภายใน `()` หรือก็คือค่าของ `input` จะ `==` ของ `case` โดยจะเป็น Statement อันเดียวจาก `switch() { ... }` และอื่นๆที่เป็น `case` หรือ `default` จะต้องมีการใช้ `break` เพื่อหยุด Statement ดังกล่าว โดยอาจจะอธิบายได้ดังตัวอย่างโค้ดด้านล่าง

```js
switch (variable) {
  case: value1: // เมื่อ variable == value1
    // code...
    break;
  case: value2: // เมื่อ variable == value2
    // code...
    break;
  default: // เมื่อ variable เป็นค่าอื่นๆ (ทำหน้าที่เหมือนกับ else)
    // code...
    break;
}
```

หากไม่มีการใช้ `break` จะข้างต้น จะทำให้โปรแกรมรันทุกๆ `case` จนกว่าจะสิ้นสุดของ Statement

```javascript
let input = prompt(`
  Input only A-D to answer (Uppercase)

  What is 4 + 4 = ?
  A) 1
  B) 9
  C) 8
  D) 10
`);
switch (input) {
  case 'A':
    alert('Wrong!');
  case 'B':
    alert('Wrong!');
  case 'C': // หากใส่ C เช่นเดิม โปรแกรมจะทำงานตั้งแต่ขั้นตอนนี้
    alert('Correct!');
    // หากมี break; ตรงนี้ โปรแกรมจะจบตรงนี้
  case 'D':
    alert('Wrong!');
  default:
    alert('Please input only (A-D) with uppercase'); // หากไม่มี break; ที่ case ใดๆเลย โปรแกรมจะจบตรงนี้
}
```
{:.is-danger}

และนอกจากนี้เรายังใช้เทคนิกการ `switch()` เพื่อหา `case` ที่ได้ค่าเป็น Boolean `true` ได้อีกด้วย เช่นดังตัวอย่าง

```javascript
let age = prompt('Input your age');
if (age < 12) {
  alert('Child');
} else if (age < 18) {
  alert('Teen');
} else if (age < 40) {
  alert('Adult');
} else if (age < 60) {
  alert('Middle-aged');
} else {
  alert('Old');
}
```

```javascript
let age = prompt('Input your age');
switch (true) { // ให้ทำการตรวจสอบว่า case ใดๆจะ == true
  case (age < 12): // age < 12 หากใส่ 8 เราจะได้ true == true หากใส่ 13 เราจะได้ true == false ทำให้ไม่ถูกเงื่อนไข
    alert('Child');
    break;
  case (age < 18): // age < 18 หากใส่ 13 เราจะได้ true == true ทำให้ถูกเงื่อนไข และทำงานตรงนี้
    alert('Teen');
    break; // ป้องกันข้ามไปทำงานอีก case และจบ Statement switch() นี้ทันที
  case (age < 40):
    alert('Adult');
    break;
  case (age < 60):
    alert('Middle-aged');
    break;
  default:
    alert('Old');
    break;
}
```

> **หมายเหตุ:** เนื่องจากการใช้ `switch()` อาจจะยาก ดังนั้นการใช้แต่เพียง `if()` ก็สามารถทำได้หากในกรณีที่เกิดความสับสน แต่ `switch()` ก็จะมีประโยชน์ในบางครั้งที่ทำให้การอ่านโปรแกรมเข้าใจได้ง่ายกว่า

## บทสรุป

- `if()` จะทำงานเมื่อเงื่อนไขเป็นจริง
- `else if()` จะทำงานเป็นเงื่อนไขลำดับต่อมา หากเงื่อนไขข้างบนไม่เป็นจริง
- `else` จะทำงานเป็นเงื่อนไขสุดท้าย โดยต้องใส่เป็นลำดับสุดท้าย
  - `else if()` และ `else` เป็นเพียงทางเลือกเสริม ไม่ได้จำเป็นในการเขียนเงื่อนไข
- Code block การทำงานของช่วงใน Statement
- Shorthand กับการใช้ `?:` เพื่อให้เขียนเงื่อนไขสั้นลง
- `switch()` จะตรวจสอบเงื่อนไขภายใน `()` ว่าเท่ากับ `case` ใดๆหรือไม่
