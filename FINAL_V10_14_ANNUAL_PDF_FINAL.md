# FINAL v10.14 — Annual PDF Annex & Balanced Typography

## 1. Yillik mehmonxona shartnomasi uchun PDF narxlar ilovasi

- “Yillik/summasiz shartnoma” tanlanganda maxsus **Narxlar PDF faylini biriktirish** paneli ochiladi.
- PDF sahifalari brauzerning o‘zida o‘qiladi va rasm ko‘rinishiga aylantiriladi.
- Shartnomani oldindan ko‘rish, Word va PDF/Print chiqarishda narxlar fayli shartnoma oxiriga rasmiy **“Приложение — Прейскурант цен”** sifatida qo‘shiladi.
- Agar spetsifikatsiya mavjud bo‘lsa, narxlar ilovasining raqami avtomatik ravishda keyingi raqamga o‘tadi.
- Ilova arxivdagi shartnoma HTML tarkibida saqlanadi va qayta ochilganda ham ko‘rinadi.
- Bulut sinxronlash hajmini nazorat qilish uchun PDF sahifalari optimallashtiriladi.
- Cheklovlar: 10 MB gacha, 8 betgacha.

## 2. Platforma shriftlari qayta muvozanatlashtirildi

- Butun platformada yagona **Manrope** shrift oilasi qo‘llanildi.
- Sarlavhalar, menyu, tugmalar, inputlar, jadvallar va KPI bloklari uchun bir-biriga mos o‘lchamlar belgilandi.
- Juda katta va juda kichik yozuvlar kamaytirildi.
- Mobil va desktop ekranlar uchun responsive shrift o‘lchamlari saqlandi.
- Hujjatning rasmiy Word/PDF shriftlari o‘zgartirilmadi.

## Texnik holat

- `server.js` sintaksisi tekshirildi.
- `public/index.html` ichidagi barcha inline JavaScript bloklari sintaksisi tekshirildi.
- `/` va `/health` 200 javob bilan tekshirildi.
- Tashqi npm dependency qo‘shilmadi.
