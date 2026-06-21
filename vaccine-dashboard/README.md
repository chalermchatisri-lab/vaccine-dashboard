# 💉 Vaccine Dashboard — คลินิกสุขภาพเด็ก

Dashboard ตารางวัคซีนเด็กตามช่วงอายุ พร้อมราคาและแพ็กเกจโปร

---

## 🗂 โครงสร้างไฟล์

```
vaccine-dashboard/
├── index.html          ← หน้าเว็บหลัก (ไม่ต้องแตะ)
├── data/
│   └── vaccines.js     ← ⭐ ฐานข้อมูลทั้งหมด (แก้ที่นี่ที่เดียว)
├── vercel.json         ← config deploy อัตโนมัติ
└── README.md
```

---

## ✏️ แก้ไขข้อมูล

### เปลี่ยนชื่อคลินิก / เบอร์โทร
เปิด `data/vaccines.js` → แก้ส่วน `CLINIC`:

```js
export const CLINIC = {
  name: "ชื่อคลินิกของคุณ",
  phone: "02-xxx-xxxx",
  line: "@your-line-oa",
};
```

### แก้ราคาวัคซีน
แก้ `price:` ใน `VACCINES`:

```js
MMR: { name: "MMR", nameTH: "หัด-คางทูม-หัดเยอรมัน", price: 500 },
```

### แก้ราคาแพ็กเกจโปร
แต่ละช่วงอายุใน `SCHEDULE` มี:

```js
package: { label: "แพ็กเกจ 2 เดือน", normalPrice: 5300, proPrice: 4500, save: 800 },
```

---

## 🚀 Deploy — GitHub + Vercel (15 นาที)

### ขั้นตอนที่ 1: อัปโหลดขึ้น GitHub

```bash
# 1. ไป github.com → New repository
# ตั้งชื่อ: vaccine-dashboard → Create repository

# 2. รันคำสั่งนี้ในโฟลเดอร์โปรเจค
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vaccine-dashboard.git
git push -u origin main
```

### ขั้นตอนที่ 2: Connect Vercel

1. ไป [vercel.com](https://vercel.com) → Sign in with GitHub
2. กด **"Add New Project"**
3. เลือก repo `vaccine-dashboard`
4. กด **"Deploy"** — รอ 60 วินาที
5. ได้ URL เช่น `vaccine-dashboard.vercel.app` ✅

### อัปเดตข้อมูลในอนาคต

```bash
# แก้ไข data/vaccines.js แล้วรัน:
git add .
git commit -m "update prices"
git push
# Vercel deploy ใหม่อัตโนมัติใน 30 วินาที
```

---

## 📊 ฐานข้อมูลที่ต้องเตรียม

| ข้อมูล | ที่อยู่ | ต้องใส่ |
|--------|---------|---------|
| ชื่อคลินิก | `CLINIC.name` | ✅ |
| เบอร์โทร | `CLINIC.phone` | ✅ |
| LINE OA ID | `CLINIC.line` | ✅ |
| ราคาวัคซีนจริง | `VACCINES[key].price` | ✅ |
| ราคาแพ็กเกจโปร | `SCHEDULE[n].package` | ✅ |
| โลโก้ | `CLINIC.logo` | (เสริม) |

---

## 🔮 Phase ถัดไป (ถ้าต้องการ)

- [ ] เชื่อม Google Sheet เป็น live database (Apps Script API)
- [ ] เพิ่มระบบนัดหมายออนไลน์
- [ ] เชื่อม LINE OA ส่ง reminder อัตโนมัติ
- [ ] Admin panel แก้ราคาผ่านหน้าเว็บ (ไม่ต้องแตะ code)
