---
title: Hello World!
subtitle: <strong>สวัสดีชาวโลก</strong> ไปพร้อมๆกับน้องโปรแกรมกัน!
duration: 60
level: ง่าย
---

![Hello World!]({{ 'assets/images/header-helloworld.jpg' | absolute_url }})

# Hello World

**สวัสดีชาวโลก!** เป็นคำหนึ่งที่นิยมในหมู่โปรแกรมเมอร์อย่างมาก เพื่อใช้การทดสอบว่าการทำงานของโปรแกรมใช้งานได้หรือไม่ เพราะถ้าหากไม่สามารถใช้งานผลลัพธ์อาจจะขึ้นเป็นอย่างอื่น เช่น ข้อความ **Error** หรือ **Exception**

> - **Error** แปลว่าความผิดพลาด อาจจะทำให้โปรแกรมใช้งานไม่ได้ แสดงผลไม่ได้ หลายๆอย่าง
> - **Exception** แปลว่าสิ่งที่ไม่คาดคิด ซึ่งในทางโปรแกรมก็คือคำคล้ายๆกับ Error อย่างหนึ่ง เพียงแต่จะแสดงปัญหาอย่างชัดเจนว่าเกิดจากอะไร

## JavaScript

เราเคยได้แนะนำในบท [Editor และ Compiler]({{ 'docs/basic-environment/editor-and-compiler/' | absolute_url }}) กันไว้แล้วว่าเราจะเลือกใช้โปรแกรม [VSCode (Visual Studio Code)](https://code.visualstudio.com/) ในการเขียนโปรแกรมร่วมกับภาษา **JavaScript** หรือเขียนย่อได้ว่า **JS** ซึ่งเป็น Script language ที่ไม่จำเป็นต้อง Compile และสามารถทำงานได้ทันที เพราะบทแรกๆเราอยากโฟกัสกันไปที่การเขียนโปรแกรม มากกว่าการใช้เครื่องมือ

ภาษาโปรแกรมในโลกใบนี้มีหลายภาษา และมีวิธีการเขียนที่แตกต่างกันออกไปอย่างมากมายด้วย แต่จะมีภาษาโปรแกรม **C** ที่ยอดนิยม คิดว่าในระบบการศึกษาในประเทศไทยหลายหลักสูตรเลือกภาษานี้เป็นพื้นฐาน เนื่องจากมีสัญลักษณ์ที่ใกล้เคียงกับหลายๆภาษาทำให้เป็นภาษาพื้นฐานที่ดี **แต่เราจะไม่สอน!** สาเหตุที่ไม่สอนก็เกิดมาจากที่ผู้เขียนบทความนี้เคยได้เรียนมาก่อนแล้ว และรู้สึกว่าเราสามารถข้ามไปเรียนภาษาอื่นที่ง่ายกว่าได้ เพราะภาษา C เป็นภาษาที่เก่าแก่และเรียนรู้ยากเมื่อเทียบกับภาษาโปรแกรมรุ่นใหม่ๆ อีกทั้งผู้เขียนก็เคยเห็นผู้เรียนพื้นฐานผ่านภาษา C ทำให้เด็กสนใจน้อยลงมานักต่อนักแล้ว เพราะมีความเข้าใจยากจริง

ถึงอย่างไรภาษา C ก็ยังมีบทบาทใช้งานอยู่อันดับต้นๆของโลกเลยทีเดียว เพียงแค่ไม่อยากจะแนะนำให้คนที่ไม่เคยเขียนโปรแกรมมาก่อนเริ่มใช้งานภาษา C ทันที เพราะเรายังสามารถเอาภาษา JavaScript เป็นพื้นฐานได้ด้วย

> **หมายเหตุ:** บางหลักสูตรของประเทศไทยอาจจะมีการสอนภาษาโปรแกรม **Python** กันแล้ว นับว่าเป็นภาษาที่น่าสนใจและน่าใช้งาน เพราะเป็นภาษาที่ง่าย อ่านเข้าใจง่ายกว่า โดย Google ใช้ภาษานี้เป็นหลักในการพัฒนาอีกด้วย เพียงแต่อาจจะหักมุมกับภาษา C หรือ JavaScript ที่เราพูดกันไปพอควร เพราะมีสัญลักษณ์แตกต่างกันอย่างสิ้นเชิง เราจึงเลือกใช้ภาษา JavaScript ในการสอน เพราะมีความคล้ายคลึงกับภาษาอื่นๆมากกว่า
>
> ![Comparation]({{ 'assets/images/content-helloworld-compare.jpg' | absolute_url }})
> *ภาพเปรียบเทียบความแตกต่างของภาษา JavaScript (ซ้าย) และ Python (ขวา) ที่มีการทำงานเหมือนกัน อาจจะเห็นว่าภาษามีความคล้ายๆกันเพียงแต่ Python จะไม่มีเครื่องหมาย `{...}` (วงเล็บปีกกา) และ `;` (Semi-colon)*

### การทำงานของ JavaScript

ภาษา JavaScript เป็นภาษาที่ทำงานบน Web browser เพื่อการตอบสนองที่รวดเร็วแก่ผู้ใช้งานมากขึ้น โดยเราสามารถทดลองเรียกใช้คำสั่งแสดงข้อความเตือนได้ด้วยการกด `F12` เพื่อเปิด Developer Tools เมื่อเข้าที่เข้า Web browser [(แนะนำ Google Chrome)](https://www.google.com/chrome/) จากนั้นเปิด Console โดยการกดปุ่ม `esc` บนคีย์บอร์ด (กด `esc` อีกครั้งเพื่อปิด-เปิดสลับกัน และต้องคลิกที่ Developer Tools ก่อนด้วย) จากนั้นพิมพ์คำสั่งตามนี้และกด `enter`

> **หมายเหตุ:** บางครั้ง `enter` จะถูกเรียกว่า `return`

```javascript
alert('hello world');
```

เราจะเห็นว่า JavaScript สามารถใช้คำสั่ง `alert()` และแสดงผลข้อความที่อยู่ภายในเครื่องหมาย `'` ได้อย่างอิสระ

<div style='position:relative;padding-bottom:54%'><iframe src='https://gfycat.com/ifr/AffectionateMinorAkitainu' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0' allowfullscreen></iframe></div>
*วิดีโอตัวอย่างการใช้งานของ Console และการใช้ `alert()`*

> **เกร็ดความรู้:** ภาษา JavaScript แตกต่างกับภาษา Java โดยสิ้นเชิง ไม่ได้เป็นภาษารากฐานด้วย เพียงแค่ถูกตั้งชื่อเหมือนกัน

## การใช้งาน Git

ในขั้นตอนการเขียนโปรแกรมนั้นกับ ทางเราขอให้ผู้เรียนทุกคนฝึกใช้งาน Git กันไปในตัวด้วย ก็ขอให้มั้นใจว่าได้ติดตั้งเหล่านี้เรียบร้อยแล้วก่อนดำเนินการต่อ

- ติดตั้ง [Visual Studio Code](https://code.visualstudio.com/) แล้ว
- ติดตั้ง [GitHub Desktop](https://desktop.github.com/) แล้ว
- [ติดตั้ง Git]({{ '/docs/basic-environment/version-control-git/#git-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3' | absolute_url }}) และสามารถ[ใช้งาน Git ได้]({{ '/docs/basic-environment/version-control-git/#%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A-git' | absolute_url }})
- มีบัญชีบน [GitHub](https://github.com/) แล้ว
- **เพิ่มเติม:** ติดตั้ง [Node.js](https://nodejs.org/) สำหรับการใช้งาน JavaScript โดยไม่จำเป็นต้องเปิด Web Browser เลือกดาวน์โหลด Current ที่เป็นเวอร์ชั่นล่าสุด ตอนติดตั้งให้ทำการ `Next >` ปล่อยให้เป็นค่าเริ่มต้นก่อนได้

![Download Node.js]({{ 'assets/images/content-helloworld-nodejs.jpg' | absolute_url }})
*ภาพการดาวน์โหลด Node.js เป็นเวอร์ชั่น Current ที่ถูกต้อง*

> **หมายเหตุ:** สำหรับวิธีตรวจสอบว่า Node.js ใช้งานได้หรือไม่ สามารถใช้คำสั่ง `node --version` ผ่าน CLI เพื่อตรวจสอบว่าใช้งานได้จริง

### สร้าง Repository

ก่อนอื่นเราจะให้ทุกคนทำการสร้าง Repository (หรือสั้นๆว่า repo ที่เป็นตัวเก็บโปรเจค) ผ่าน GitHub ตามรูปภาพ

![Create a repository from GitHub]({{ 'assets/images/content-helloworld-create-repo.jpg' | absolute_url }})
*กดที่ `+` และเลือก `New repository`*

จากนั้นให้ทำการตั้งชื่อตามใจชอบของคุณ โดยควรจะต้องเป็นภาษาอังกฤษ **พิมพ์เล็ก** และใช้เครื่องหมาย `- (เครื่องหมายลบ)` ในการแบ่งข้อความ (ไม่สามารถใช้เว้นวรรคได้) โดยส่วนของ Description ไม่จำเป็นต้องใส่ และไม่จำเป็นต้องตั้งค่าอย่างอื่น จากนั้นกด `Create repository` ได้ทันที

![Name a repository from GitHub]({{ 'assets/images/content-helloworld-name-repo.jpg' | absolute_url }})
*การตั้งชื่อบน repo ที่ถูกต้อง จากนั้นทำการสร้าง repo*

### Clone repository

ในขั้นตอนนี้เราจะทำการ Clone โปรเจคเปล่าๆของ repo ที่เราเพิ่งได้สร้างมาผ่านโปรแกรม GitHub Desktop โดยให้เราทำการเข้าไปที่โปรแกรม เข้าสู่ระบบให้เรียบร้อย จากนั้นกด `File` และเลือก `Clone repository` หรือกดปุ่ม `ctrl` + `shift` + `o`

เราจะได้หน้าต่างเลือก repo ขึ้นมา ซึ่งหากเราเข้าสู่ระบบเรียบร้อยเราจะเห็น repo ที่เราเพิ่งได้สร้างมา ให้ทำการเลือกและกด `Clone` ได้ทันที เมื่อเสร็จแล้วให้เรากด `Repository` และเลือก `Open in Visual Studio Code` หรือกดปุ่ม `ctrl` + `shift` + `a` เพื่อเปิด Visual Studio Code ในโปรเจคนั้น

![Clone repository from GitHub Desktop]({{ 'assets/images/content-helloworld-clone-repo.jpg' | absolute_url }})
*เปิดหน้าต่างการ Clone repo*

![Select repository]({{ 'assets/images/content-helloworld-select-repo.jpg' | absolute_url }})
*เลือก repo ที่ต้องการ Clone*

![Open project to VSCode]({{ 'assets/images/content-helloworld-open-in-vscode.jpg' | absolute_url }})
*เปิด Visual Studio Code ของ repo*

> **หมายเหตุ:** ในขั้นตอนนี้ สามารถเปิดผ่านหน้าเว็บไซต์ GitHub ได้เช่นกันหลังจากสร้าง repo เสร็จเรียบร้อยแล้ว โดยการกด `Set up in Desktop`
>
> ![Set up in Desktop's button]({{ 'assets/images/content-helloworld-setup-in-desktop.jpg' | absolute_url }})
> *ปุ่ม Set up in Desktop สำหรับการเปิดโปรแกรมผ่าน Web Browser*

## Say, hello world
