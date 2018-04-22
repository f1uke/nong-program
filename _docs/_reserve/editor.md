---
title: Editor
subtitle: เรียนรู้การใช้งาน <strong>โปรแกรมแก้ไขข้อความ</strong> สำหรับการใช้เพื่อ <strong>การเขียนโปรแกรม</strong>
icon: fas fa-cogs
difficulty: 1
duration: 1
---

## Editor คืออะไร

Editor คือโปรแกรมแก้ไขข้อความ ที่จะมีหลากประเภทและหลายรูปแบบให้เลือกใช้งาน เช่น หากใช้งานด้านงานเอกสารอาจจะเลือกใช้ [Microsoft Office](https://th.wikipedia.org/wiki/ไมโครซอฟท์_ออฟฟิศ) หรือหากใช้งานด้านงานเขียนบล็อกอาจจะใช้ [WYSIWYG](https://th.wikipedia.org/wiki/วิซซีวิก)

โดยในงานด้านเขียนโปรแกรม เราจะใช้ Editor ที่มี 2 ประเภทหลักๆคือ **Source code editor** และ **IDE**

### Source code editor

[Source code editor](https://en.wikipedia.org/wiki/Source_code_editor) หรือบางครั้งถูกเรียกโดยย่อว่า **Editor** เป็นโปรแกรมไว้ใช้สำหรับการแก้ไขข้อความ โดยสามารถแสดงสีสัญลักษณ์ของภาษาโปรแกรมอย่างชัดเจน การจัดย่อหน้าสำหรับการเขียนโปรแกรม และมีเครื่องมือพื้นฐานให้แก่โปรแกรมเมอร์สามารถเขียนโปรแกรมได้อย่างรวดเร็วมากขึ้น เช่น คีย์ลัด โปรแกรมเสริม การค้นหาคำ Autocomplete เป็นต้น

### IDE

**IDE** มากจากคำว่า [Integrated development environment](https://th.wikipedia.org/wiki/สิ่งแวดล้อมสำหรับการพัฒนาแบบเบ็ดเสร็จ) เป็นโปรแกรมที่มีความสามารถเหมือนกับ Source code editor แต่จะมีเครื่องมือที่หลากหลายมากขึ้น ทำให้การเขียนโปรแกรมดีกว่าเดิม แต่มักถูกออกแบบสำหรับพัฒนา Application ที่รองรับภาษาโปรแกรมบางตัวเท่านั้นทำให้มีข้อจำกัดที่แตกต่างกับ Editor หลายๆส่วน

### ตารางเปรียบเทียบ

> **หมายเหตุ:** จากตารางเป็นเพียงการเปรียบเทียบภาพรวม ในบางโปรแกรมอาจจะมีคุณสมบัติที่แตกต่างกันไปอีก

|Editor|IDE|
|---|---|
|✅ ขนาดโปรแกรมเล็ก (ประมาณ 100 MB ขึ้นไป)|⛔ ขนาดโปรแกรมใหญ่ (ประมาณ 1 GB ขึ้นไป)|
|✅ เขียนโปรแกรมได้ทีล่ะหลายภาษา|⛔ เขียนโปรแกรมได้บางภาษาตามขอบเขตของ Application|
|✅ มี [Extension](https://th.wikipedia.org/wiki/โปรแกรมเสริม)|✅ มี [Extension](https://th.wikipedia.org/wiki/โปรแกรมเสริม)|
|⛔ เครื่องมือมีน้อยกว่า|✅ เครื่องมือมีให้ใช้มากกว่า|
|⛔ ออกแบบเพื่อการเขียนโปรแกรมอย่างง่าย|✅ ออกแบบเพื่อการเขียนโปรแกรมสำหรับ [OOP](https://th.wikipedia.org/wiki/การเขียนโปรแกรมเชิงวัตถุ)|
|⛔ [Autocomplete](https://en.wikipedia.org/wiki/Autocomplete)|✅ [Intelligent code completion](https://en.wikipedia.org/wiki/Intelligent_code_completion)|
|⛔ ไม่มี|✅ [Compiler](https://th.wikipedia.org/wiki/คอมไพเลอร์)|
|⛔ ไม่มี|✅ [Interpreter](https://th.wikipedia.org/wiki/อินเทอร์พรีเตอร์)|
|⛔ ไม่มี|✅ [Version control system](https://th.wikipedia.org/wiki/การควบคุมการปรับปรุงแก้ไข)|
|⛔ ไม่มี|✅ มีเครื่องมือสำหรับออกแบบ [GUI](https://th.wikipedia.org/wiki/ส่วนต่อประสานกราฟิกกับผู้ใช้)|
|⛔ ไม่มี|✅ [Class browser](https://en.wikipedia.org/wiki/Class_browser)|
|⛔ ไม่มี|✅ [Object browser](https://en.wikipedia.org/wiki/Object_browser)|
|⛔ ไม่มี|✅ [Class diagram](https://en.wikipedia.org/wiki/Class_diagram)|
|⛔ ไม่มี|✅ [Debugger](https://th.wikipedia.org/wiki/ดีบั๊ก)|

## Visual Studio Code

โปรแกรม [Visual Studio Code](https://code.visualstudio.com/) (ชื่อย่อ: VSCode) เป็นโปรแกรม Editor ที่มีความสามารถใกล้เคียงกับ IDE ที่มีขนาดเล็กกว่า หรือก็คือให้มอง[ตารางเปรียบเทียบ](#ตารางเปรียบเทียบ)ด้านบนได้เลยว่าเขียวเกือบหมด)โดยทางเราจะสนับสนุนให้ใช้โปรแกรมนี้เพื่อการเรียนรู้สำหรับการเขียนโปรแกรมเบื้องต้น เพราะมีขนาดเล็กกระทัดรัด และเหมาะแก่โปรแกรมเมอร์ที่ต้องการเรียนรู้การใช้งานทีล่ะหลายภาษา

**Download:** [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

> **หมายเหตุ:** ในขั้นตอนการติดตั้ง เราแนะนำให้ทำการเลือก TODO:
