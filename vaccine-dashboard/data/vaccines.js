// ============================================================
// VACCINE DATABASE — แก้ราคา/ข้อมูลได้ที่ไฟล์นี้ไฟล์เดียว
// ============================================================

export const CLINIC = {
  name: "คลินิกบ้านเด็ก",        // ← เปลี่ยนชื่อคลินิก
  tagline: "ดูแลลูกน้อยด้วยใจ",
  phone: "0850659715",
  line: "@116hbawh",
  address: "สุราษฎร์ธานี",
  logo: null,                         // ← ใส่ path รูปโลโก้
};

// ============================================================
// MASTER VACCINE LIST — ข้อมูลวัคซีนทุกชนิด
// แก้ราคาที่ price: ตรงนี้เท่านั้น
// ============================================================
export const VACCINES = {
  BCG:        { name: "BCG",           nameTH: "วัคซีนวัณโรค",                  price: 350  },
  HBV:        { name: "HBV",           nameTH: "ไวรัสตับอักเสบ บี",             price: 200  },
  DTP_HB_Hib: { name: "DTP-HB-Hib",   nameTH: "คอตีบ-บาดทะยัก-ไอกรน-Hib",    price: 800  },
  IPV:        { name: "IPV",           nameTH: "โปลิโอชนิดฉีด",                price: 600  },
  OPV:        { name: "OPV",           nameTH: "โปลิโอชนิดกิน",                price: 150  },
  RV:         { name: "Rotavirus",     nameTH: "โรตาไวรัส",                     price: 1200 },
  PCV:        { name: "IPD (PCV)",     nameTH: "ปอดอักเสบ/เยื่อหุ้มสมอง",     price: 2200 },
  JE:         { name: "JE",            nameTH: "ไข้สมองอักเสบ",                 price: 400  },
  MMR:        { name: "MMR",           nameTH: "หัด-คางทูม-หัดเยอรมัน",        price: 500  },
  VAR:        { name: "Varicella",     nameTH: "อีสุกอีใส",                     price: 1100 },
  HEPA:       { name: "Hepatitis A",   nameTH: "ไวรัสตับอักเสบ เอ",            price: 900  },
  FLU:        { name: "Influenza",     nameTH: "ไข้หวัดใหญ่",                  price: 500  },
  DTP:        { name: "DTP",           nameTH: "คอตีบ-บาดทะยัก-ไอกรน",        price: 300  },
  HPV:        { name: "HPV",           nameTH: "มะเร็งปากมดลูก",               price: 3200 },
  TYPHOID:    { name: "Typhoid",       nameTH: "ไข้ไทฟอยด์",                   price: 600  },
};

// ============================================================
// SCHEDULE DATABASE — ตารางวัคซีนตามช่วงอายุ
// type: "epi" = วัคซีนพื้นฐานรัฐกำหนด | "opt" = วัคซีนเสริม
// dose: เข็มที่กี่
// ============================================================
export const SCHEDULE = [
  {
    id: "newborn",
    label: "แรกเกิด",
    sublabel: "0–1 เดือน",
    ageMonthMin: 0,
    ageMonthMax: 1,
    note: "ฉีดในโรงพยาบาลทันทีหลังคลอด BCG สำคัญมาก — ป้องกันวัณโรคระยะรุนแรงในทารก",
    vaccines: [
      { ref: "BCG",  type: "epi", dose: 1 },
      { ref: "HBV",  type: "epi", dose: 1 },
    ],
    package: { label: "แพ็กเกจแรกเกิด", normalPrice: 550,  proPrice: 450,  save: 100 },
  },
  {
    id: "m1",
    label: "1 เดือน",
    sublabel: "4–6 สัปดาห์",
    ageMonthMin: 1,
    ageMonthMax: 2,
    note: "กระตุ้นภูมิคุ้มกันตับอักเสบ บี เข็มที่ 2 ตามกำหนดนัด",
    vaccines: [
      { ref: "HBV",  type: "epi", dose: 2 },
    ],
    package: { label: "แพ็กเกจ 1 เดือน", normalPrice: 200, proPrice: 180, save: 20 },
  },
  {
    id: "m2",
    label: "2 เดือน",
    sublabel: "6–14 สัปดาห์",
    ageMonthMin: 2,
    ageMonthMax: 4,
    note: "เริ่มชุดวัคซีนหลัก — ฉีดได้ 4–5 เข็มในวันเดียว ควรเตรียมผ้าเย็นและยาลดไข้ไว้ที่บ้าน",
    vaccines: [
      { ref: "DTP_HB_Hib", type: "epi", dose: 1 },
      { ref: "IPV",        type: "epi", dose: 1 },
      { ref: "RV",         type: "opt", dose: 1 },
      { ref: "PCV",        type: "opt", dose: 1 },
    ],
    package: { label: "แพ็กเกจ 2 เดือน", normalPrice: 5300, proPrice: 4500, save: 800 },
  },
  {
    id: "m4",
    label: "4 เดือน",
    sublabel: "3.5–5 เดือน",
    ageMonthMin: 4,
    ageMonthMax: 6,
    note: "กระตุ้นซ้ำชุดเดิม — ห่างจากครั้งแรก 2 เดือน ภูมิคุ้มกันจะสูงขึ้นชัดเจน",
    vaccines: [
      { ref: "DTP_HB_Hib", type: "epi", dose: 2 },
      { ref: "IPV",        type: "epi", dose: 2 },
      { ref: "RV",         type: "opt", dose: 2 },
      { ref: "PCV",        type: "opt", dose: 2 },
    ],
    package: { label: "แพ็กเกจ 4 เดือน", normalPrice: 5300, proPrice: 4500, save: 800 },
  },
  {
    id: "m6",
    label: "6 เดือน",
    sublabel: "5.5–8 เดือน",
    ageMonthMin: 6,
    ageMonthMax: 9,
    note: "เริ่มฉีดไข้หวัดใหญ่ได้ตั้งแต่ 6 เดือน — ในไทยมีการระบาดทุกปี แนะนำอย่างยิ่ง",
    vaccines: [
      { ref: "DTP_HB_Hib", type: "epi", dose: 3 },
      { ref: "HBV",        type: "epi", dose: 3 },
      { ref: "RV",         type: "opt", dose: 3, note: "เฉพาะยี่ห้อ 3 เข็ม" },
      { ref: "PCV",        type: "opt", dose: 3 },
      { ref: "FLU",        type: "opt", dose: 1, note: "ฉีด 2 เข็มห่างกัน 1 เดือน ครั้งแรก" },
    ],
    package: { label: "แพ็กเกจ 6 เดือน", normalPrice: 5200, proPrice: 4500, save: 700 },
  },
  {
    id: "m9",
    label: "9 เดือน",
    sublabel: "8–11 เดือน",
    ageMonthMin: 9,
    ageMonthMax: 12,
    note: "JE สำคัญมากในประเทศไทย — ยุงเป็นพาหะ เด็กเล็กเสี่ยงสูง",
    vaccines: [
      { ref: "JE",  type: "epi", dose: 1 },
      { ref: "PCV", type: "opt", dose: 4, note: "บูสเตอร์" },
    ],
    package: { label: "แพ็กเกจ 9 เดือน", normalPrice: 2800, proPrice: 2400, save: 400 },
  },
  {
    id: "y1",
    label: "1 ปี",
    sublabel: "11–15 เดือน",
    ageMonthMin: 12,
    ageMonthMax: 18,
    note: "ครบ 1 ขวบ — ช่วงสำคัญ MMR 1 เข็มป้องกัน 3 โรค ควรเช็กว่าฉีดครบทุกเข็มก่อนหน้า",
    vaccines: [
      { ref: "MMR",  type: "epi", dose: 1 },
      { ref: "JE",   type: "epi", dose: 2 },
      { ref: "VAR",  type: "opt", dose: 1 },
      { ref: "HEPA", type: "opt", dose: 1 },
    ],
    package: { label: "แพ็กเกจ 1 ขวบ", normalPrice: 3700, proPrice: 2800, save: 900 },
  },
  {
    id: "y1h",
    label: "1.5 ปี",
    sublabel: "15–24 เดือน",
    ageMonthMin: 18,
    ageMonthMax: 24,
    note: "บูสเตอร์ DTP สำคัญ — ไม่ฉีดภูมิคุ้มกันจะลดลงก่อนวัย ส่งผลถึงช่วงอนุบาล",
    vaccines: [
      { ref: "DTP_HB_Hib", type: "epi", dose: 4, note: "บูสเตอร์" },
      { ref: "IPV",        type: "epi", dose: 3 },
      { ref: "VAR",        type: "opt", dose: 2, note: "กระตุ้น" },
    ],
    package: { label: "แพ็กเกจ 1.5 ปี", normalPrice: 2800, proPrice: 2200, save: 600 },
  },
  {
    id: "y2",
    label: "2–3 ปี",
    sublabel: "24–42 เดือน",
    ageMonthMin: 24,
    ageMonthMax: 42,
    note: "ช่วงนี้ EPI พื้นฐานครบแล้ว เน้นวัคซีนเสริมและไข้หวัดใหญ่ประจำปี",
    vaccines: [
      { ref: "FLU",  type: "opt", dose: 0, note: "ทุกปี" },
      { ref: "VAR",  type: "opt", dose: 0, note: "ถ้ายังไม่เคยฉีด" },
      { ref: "HEPA", type: "opt", dose: 2, note: "ถ้าฉีดเข็มแรกตอน 1 ปี" },
    ],
    package: { label: "แพ็กเกจ 2–3 ปี", normalPrice: 2800, proPrice: 2300, save: 500 },
  },
  {
    id: "y4",
    label: "4–6 ปี",
    sublabel: "ก่อนเข้าประถม",
    ageMonthMin: 48,
    ageMonthMax: 72,
    note: "กระตุ้นชุดสุดท้ายก่อนเข้าโรงเรียน — หลังฉีดครบภูมิคุ้มกันจะอยู่ได้หลายปี",
    vaccines: [
      { ref: "DTP",  type: "epi", dose: 5, note: "บูสเตอร์สุดท้าย" },
      { ref: "IPV",  type: "epi", dose: 4, note: "บูสเตอร์สุดท้าย" },
      { ref: "MMR",  type: "epi", dose: 2 },
      { ref: "FLU",  type: "opt", dose: 0, note: "ทุกปี" },
    ],
    package: { label: "แพ็กเกจก่อนเข้าเรียน", normalPrice: 2400, proPrice: 1700, save: 700 },
  },
  {
    id: "y9",
    label: "9–12 ปี",
    sublabel: "วัยประถมปลาย",
    ageMonthMin: 108,
    ageMonthMax: 144,
    note: "HPV สำคัญสำหรับเด็กผู้หญิง — ฉีดก่อนมีเพศสัมพันธ์ครั้งแรกให้ผลดีที่สุด",
    vaccines: [
      { ref: "DTP",    type: "epi", dose: 6, note: "กระตุ้น" },
      { ref: "HPV",    type: "opt", dose: 1, note: "แนะนำสำหรับเด็กหญิง" },
      { ref: "TYPHOID",type: "opt", dose: 1 },
      { ref: "FLU",    type: "opt", dose: 0, note: "ทุกปี" },
    ],
    package: { label: "แพ็กเกจวัยเรียน", normalPrice: 4500, proPrice: 3800, save: 700 },
  },
];
