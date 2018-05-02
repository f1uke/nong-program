---
title: Logical Operators
subtitle: การใช้ <strong>เครื่องหมายดำเนินการทางตรรกศาสตร์</strong> ร่วมกับการใช้เงื่อนไข
icon: fas fa-arrows-alt-h
difficulty: 1
duration: 1
useful: 1
---

## ตรรกศาสตร์

ในการใช้เงื่อนไขของโปรแกรม จะมีส่วนของความรู้คณิตศาสตร์ด้าน **ตรรกศาสตร์** เข้ามาเกี่ยวข้อง คือการใช้ **และ** กับ **หรือ** โดยยกตัวอย่างดังนี้

> วันนี้อาหารเช้าเป็นไข่ดาว **และ** หมูทอด
{:.is-default}

- ในกรณีที่เป็นไข่ดาว = true; หมูทอด = true; หมายถึงอาหารเช้าเป็นทั้งสองเมนูนี้จริงๆ จะทำให้เงื่อนไขเป็น **true**
- ในกรณีที่เป็นไข่ดาว = true; หมูทอด = false; หมายถึงอาหารเช้ามีแต่ไข่ดาวแต่ไม่มีหมูทอด จะทำให้เงื่อนไขเป็น **false**
- ในกรณีที่เป็นไข่ดาว = false; หมูทอด = true; หมายถึงอาหารเช้ามีแต่หมูทอดแต่ไม่มีไข่ดาว จะทำให้เงื่อนไขเป็น **false**
- ในกรณีที่เป็นไข่ดาว = false; หมูทอด = false; หมายถึงอาหารเช้าไม่ได้กิน หรืออาจจะไม่ใช่ทั้งสองอย่าง จะทำให้เงื่อนไขเป็น **false**

เนื่องจาก **และ (and)** จำเป็นจะต้อง true ทั้งหมดจึงจะนับเป็น true หากมีอันไหนอันหนึ่ง false ถือว่าเป็น false ทันที

> วันนี้อาหารเช้าเป็นไข่ดาว **หรือ** หมูทอด
{:.is-default}

- ในกรณีที่เป็นไข่ดาว = true; หมูทอด = true; หมายถึงอาหารเช้าเป็นทั้งสองเมนูนี้จริงๆ จะทำให้เงื่อนไขเป็น **true**
- ในกรณีที่เป็นไข่ดาว = true; หมูทอด = false; หมายถึงอาหารเช้ามีแต่ไข่ดาวแต่ไม่มีหมูทอด จะทำให้เงื่อนไขเป็น **true**
- ในกรณีที่เป็นไข่ดาว = false; หมูทอด = true; หมายถึงอาหารเช้ามีแต่หมูทอดแต่ไม่มีไข่ดาว จะทำให้เงื่อนไขเป็น **true**
- ในกรณีที่เป็นไข่ดาว = false; หมูทอด = false; หมายถึงอาหารเช้าไม่ได้กิน หรืออาจจะไม่ใช่ทั้งสองอย่าง จะทำให้เงื่อนไขเป็น **false**

เนื่องจาก **หรือ (or)** จำเป็นจะต้อง false ทั้งหมดถึงจะนับเป็น false หากมีอันใดอันหนึ่ง true ถือว่าเป็น true ทันที

> **เพิ่มเติม:** คือถ้าให้เข้าใจง่ายๆ เนื่องจาก "วันนี้อาหารเช้าเป็นไข่ดาวและหมูทอดใช่มั้ย?" จำเป็นจะต้องมีทั้งคู่ประโยคดังกล่าวถึงพูดได้ถูกต้อง ขณะที่ "วันนี้อาหารเช้าเป็นไข่ดาวหรือหมูทอดกันนะ?" มีเพียงเมนูใดเมนูหนึ่งจะถือว่าประโยคนั้นถูกต้องทันที

## And

สำหรับการใช้ **และ (and)** จะใช้เครื่องหมาย `&&`

```javascript
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

```javascript
// ต้องใช้เฉพาะ Yes เท่านั้นสำหรับ true ส่วนถ้าตอบอื่นๆจะเป็น false
// ซึ่งในข้อนี้เราใช้ และ ดังนั้นหากตอบเท็จไปสักข้อหนึ่ง ผลลัพธ์จะเป็น false
let firedEgg = prompt('Did breakfast has fried egg? (Yes/No)');
let firedPork = prompt('Did breakfast has fired pork? (Yes/No)');
alert(`Your answer is ${firedEgg == 'Yes' && firedPork == 'Yes'}`);
```

> **เพิ่มเติม:** การใช้ `&&` สามารถบอกค่า **ระหว่าง** ของค่าใดค่าหนึ่งได้ โดยตัวอย่างจะกำหนดให้หาค่า `answer` ต้องมากกว่าหรือเท่ากับ 1 ในขณะที่ก็ต้องห้ามมากกว่า 10 เพราะใช้เงื่อนไข and
>
> ```javascript
> let answer = prompt('Input number between 1-10');
> if (answer >= 1 && answer <= 10) {
>   alert('Correct!');
> } else {
>   alert('Incorrect?');
> }
> ```

## Or

สำหรับการใช้ **หรือ (or)** จะใช้เครื่องหมาย `||`

```javascript
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false
```

```javascript
let firedEgg = prompt('Did breakfast has fried egg? (Yes/No)');
let firedPork = prompt('Did breakfast has fired pork? (Yes/No)');
alert(`Your answer is ${firedEgg == 'Yes' || firedPork == 'Yes'}`);
```

> **เพิ่มเติม:** การใช้ `||` ของ JavaScript จะมี Feature พิเศษที่สามารถใช้กำหนดค่า **Default value** ได้ในกรณีที่ข้อมูลแรกเป็น `false` ใดๆก็ตาม (รวมทั้ง `0` `null` `undefined`) โดยข้อมูลจะถูกใช้ในเงื่อนไขต่อไปแทน
>
> ```javascript
> let answer = prompt('Input something');
> alert(answer || 'Error: You need to input something!');
> ```

## not

**นิเสธ (not)** จะเป็นการกลับความหมายระหว่าง `true => false` และ `false => true` โดยใช้เครื่องหมาย `!`

```javascript
alert(!true); // false
alert(!0); // true
alert(!undefined); // true
```

```javascript
let username = 'johndoe';
let hideUser = confirm('Do you need to hide user?');
if (!hideUser) {
  alert(username);
} else {
  alert('xxxxxx');
}
```

> **เพิ่มเติม:** จะมีปัญหาการใช้ `!` กับ String เพื่อตรวจสอบว่าค่าดังกล่าว **เป็นค่าว่างเปล่า** หรือไม่ โดยเราสามารถใช้ `!` ครั้งแรกเพื่อแปลงค่าเป็น Boolean ก่อน จากนั้นใช้ `!` อีกครั้งให้ทำการกลับค่า not เป็นค่าที่ถูกต้อง จึงได้เครื่องหมาย `!!` ในการใช้งาน
>
> ```javascript
> alert(null); // null
> alert(''); //
> alert('foobar'); // foobar
> ```
>
> ```javascript
> alert(!null); // true
> alert(!''); // true
> alert(!'foobar'); // false
> ```
>
> ```javascript
> alert(!!null); // false
> alert(!!''); // false
> alert(!!'foobar'); // true
> ```
>
> ```javascript
> alert(!!prompt('Check input is not empty?')); // เช็คว่าได้ใส่ค่าบางอย่างหรือไม่
> ```

## บทสรุป

- **และ (and)** ใช้ `&&` และจะเป็นจริงต่อเมื่อจริงทั้งหมด
  - and สามารถใช้เพื่อหาค่าระหว่างใดระหว่างหนึ่งได้
- **หรือ (or)** ใช้ `||` และจะเป็นเท็จต่อเมื่อเท็จทั้งหมด
  - or ใน JavaScript สามารถใช้เพื่อทำค่า Default ได้
- **นิเสธ (not)** จะใช้เครื่องหมาย `!` เพื่อกลับค่าจริงกับเท็จ
  - ใช้ `!!` เพื่อตรวจสอบ String ว่ามีค่าใดๆหรือไม่
