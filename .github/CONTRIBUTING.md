# การมีส่วนร่วม

สำหรับการมีส่วนร่วมเราจะมีขอบเขตกันสักเล็กน้อย เพื่อความเป็นระเบียบต่อเนื้อหาที่หลายๆคนอาจจะอยากร่วมแก้ไขด้วยกัน

## ความต้องการ

- [Ruby](https://rubyinstaller.org/downloads/) >= 2.2.5
- ruby2.3-dev
- [RubyGems](https://rubygems.org/pages/download) >= 2.7.6
- [Jekyll](https://jekyllrb.com/) >= 3.7.3
- [Bundler](http://bundler.io/) >= 1.16.1
- `gcc` `g++` และ `make`

> สำหรับระบบ Windows อาจจะไม่มีบางคำสั่ง แต่สามารถใช้ [http://www.mingw.org/](http://www.mingw.org/) และ [http://gnuwin32.sourceforge.net/packages/make.htm](http://gnuwin32.sourceforge.net/packages/make.htm) ร่วมกันได้
>
> **Tips:** บน Windows เวอร์ชั่นล่าสุด สามารถใช้ [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) แทน Vitrual Machine ได้ และยังรองรับกับ Visual Studio Code ได้หลายๆส่วน (ยังไม่สมบูรณ์)

## การติดตั้ง

หลังจาก Clone เข้าสู่เครื่องแล้ว ใช้คำสั่ง `bundle` เพื่อติดตั้ง Package ที่จำเป็นของ [Jekyll](https://jekyllrb.com)

```bash
bundle install
```

จากนั้นทำการ `serve` ไปยัง [http://127.0.0.1:4000/nong-program](http://127.0.0.1:4000/nong-program) โดยใช้คำสั่งนี้

```bash
bundle exec jekyll serve
```

> หากมีปัญหาใดๆ ลองตรวจสอบได้ที่ [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/) หรือ [https://jekyllrb.com/docs/troubleshooting/](https://jekyllrb.com/docs/troubleshooting/)

## การทดสอบ

เราจะใช้เพียง [html-proofer](https://github.com/gjtorikian/html-proofer) ในการทดสอบ โดยสามารถใช้คำสั่งด้านล่างเพื่อทดสอบ

```bash
bundle exec htmlproofer ./_site --disable-external
```

## กฎและรูปแบบการเขียนบทความ

ในส่วนนี้จะเป็นวิธีการแก้ไขหรือเพิ่มเติมข้อมูลที่เราอนุญาต หรือไม่อนุญาต รวมทั้งวิธีการใช้งาน

### Markdown

ทุกๆไฟล์ `.md` ที่แก้ไขจะต้องมีโค้ดดังต่อไปนี้อยู่บนส่วนหัวสุด ตามตัวอย่างไฟล์อื่นๆ

```markdown
---
---
```

### Editor

กรุณาเลือกใช้ Text Editor ที่รองรับ [EditorConfig](http://editorconfig.org/) โดยทางเราแนะนำให้เลือกใช้ [Visual Studio Code](https://code.visualstudio.com/) ร่วมกับ Extension: [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) เพื่อให้ทุกส่วนของเนื้อหามีโครงสร้างและรูปแบบการเขียนที่ตรงกันกับทุกคน

### Directory

| Directory | Meaning | Usage | Permalink | Permit |
| --- | --- | --- | --- | --- |
| `/_data/` | Global YAML data | สำหรับเก็บข้อมูลและตัวแปร ที่จำเป็นนำมาใช้กับบล็อก | - | Read only |
| `/_docs/` | Documentation Pages | สำหรับเก็บ Documentation | `/docs/:path/` | Full access |
| `/_docs/` | Example Pages | สำหรับเก็บ | `/examples/:path/` | Full access |
| `/_includes/` | Components | สำหรับใช้งานเป็น Components | - |Read only |
| `/_layouts/` | Layout, Template | สำหรับใช้งานเป็น Layouts | - | Read only |

#### `data/docs.yml`

เป็นไฟล์จัดเรียงเนื้อหาที่จะแสดงบนหน้า Documentation และสามารถกด Next หรือ Previous ตามลำดับได้

```yml
- title: # ชื่อหัวข้อ
  url: # URL of directory name (อนุญาตเฉพาะ a-z, 0-9 และ - เท่านั้น)
  sub_docs:
  - title: # ชื่อหัวข้อรอง 1
    url: # URL of Filename (อนุญาตเฉพาะ a-z, 0-9 และ - เท่านั้น และไม่ต้องมี .md หรือ .html)
  - title: # ชื่อหัวข้อรอง 2
    url: # URL of Filename (อนุญาตเฉพาะ a-z, 0-9 และ - เท่านั้น และไม่ต้องมี .md หรือ .html)
    # ...
```

## การจัดเนื้อหา

เนื้อหาทั้งหมดนั้นสามารถลงได้อย่างอิสระ โดยขอให้ใช้คำสุภาพเรียบร้อย อาจจะใช้คำพูดเล่นๆหรือแสลงได้ตามความเหมาะสม รวมทั้งเนื้อหาที่ลงเราอนุญาตให้ใช้เพื่อโฆษณาหรือโปรโมทต่างๆได้ เพียงแต่เราอยากให้โฆษณานั้นมีความเกี่ยวข้องกับการพัฒนาโปรแกรมโดยตรง และอาจจะมอบสิทธิ์พิเศษอื่นๆให้แก่ผู้เรียนอีกด้วย

โดยเนื้อหาทั้งหมดจะอยู่บน `_docs` เป็นหลัก และ `_examples` สำหรับตัวอย่างโปรแกรม ซึ่งดูตัวอย่างไฟล์ที่มีอยู่แล้วได้ จะได้เขียนได้ตรงรูปแบบกัน

### Markdown Lint

กรุณาใช้ [DavidAnson/vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint) สำหรับบน Visual Studio Code เพื่อให้สามารถเปิดใช้งาน Lint และตรวจสอบปัญหาของ Syntax ได้

### ชื่อ File

กรุณาตั้งชื่อไฟล์และโฟลเดอร์ที่สอดคล้องกับหัวข้อของคุณ ซึ่งเมื่อตั้งเสร็จให้กรุณาทำการตั้งค่าบน `data/docs.yml` เพื่อเลือกตำแหน่งของเอกสารที่ถูกต้องด้วย

### การใช้ Heading

ให้ใช้ Heading 2, 3, 4 ตามลำดับของหัวข้อย่อยที่ถูกต้องโดย **ไม่อนุญาต** ให้ใช้ Heading 1 เนื่องจากมีอยู่บน Title อยู่แล้ว โดยขอให้แบ่ง Heading โดยละเอียดและทำโดยบ่อยครั้ง เพื่อกำจัดขอบเขตของเนื้อหาภายในนั้นว่าเกี่ยวกับอะไรอย่างสั้นๆ

### การใช้รูปภาพ

การใช้รูปภาพที่จะใส่ลงบน Markdown กรุณาเก็บไว้บน Directory `assets/images` และอนุญาตทุก Format ที่เป็นรูปภาพ โดยแบ่งเป็น Sub-directory ไว้ตามชื่อของ Documents ที่เกี่ยวข้องด้วย หากไม่ทราบว่าควรไว้อย่างไรสามารถเก็บไว้บน Root directory ก่อนได้ แล้วทางเราจะมาจัดเก็บให้เป็นระเบียบอีกที

ซึ่งการใช้ Markdown จะต้องเชื่อมโยงด้วยการใช้โค้ดตัวอย่างต่อไปนี้และต้องมี Description ทุกครั้ง

```markdown
![My image]({{ 'path/to/img.jpg' | absolute_url }})
*My describe*
```

### การใช้วิดีโอ

สำหรับการใช้วิดีโอ ขอให้ทำการ Embed code จากภายนอกมาแทนที่จะเก็บลงบน GitHub เพราะพื้นที่จะเต็มเร็วมากขึ้น โดยทางเราแนะนำให้เป็น [YouTube](https://www.youtube.com/) เป็นหลัก หรือ [gfycat](https://gfycat.com/) และ [imgur](https://imgur.com/) สำหรับภาพเคลื่อนไหว โดยสามารถใช้ HTML ลงบน Markdown ได้เลย

### การใช้ HTML

HTML นั้นเราไม่ได้ห้ามใช้บน Markdown แต่เราก็จะอนุญาตพอดีงาม เช่นการใส่วิดีโอ หรือต้องการจัดเรียงเนื้อหาบางอย่างด้วย JavaScript ก็สามารถทำได้ แต่กรุณาเขียนความเห็นไว้บน Pull Request ด้วยว่ามีเหตุผลอย่างไรถึงจำเป็นต้องใช้ HTML ที่นอกเหนือจากการใส่วิดีโอ

### การเชื่อมโยง URL

เนื่องจาก Jekyll ไม่ได้ฉลาดเหมือน GitHub ทำให้ Markdown ไม่ได้เปลี่ยนให้ [https://www.google.com](https://www.google.com) เป็นลิงก์โดยอัตโนมัติ ดังนั้นรบกวนใส่เพิ่มเป็น `[https://www.google.com](https://www.google.com)`

### การใช้ List

กรุณาใช้เครื่องหมาย `-` แทนการใช้ `*` เนื่องจากเราจะใช้การอ้างอิงภาษาบ่อยครั้งที่จำเป็นต้องใช้ Bold `**text**` ในการแสดงผล จึงมักทำให้เครื่องหมายซ้ำกันเลยเลี่ยงมาใช้ขีดแทน
