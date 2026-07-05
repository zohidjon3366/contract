# ALL FINANCE CONTRACT v4.2 — Tilda uchun xavfsiz ulash

## Nima uchun xato chiqdi?
`public/index.html` katta fayl bo‘lgani sababli uni Tilda T123 blokiga to‘liq joylashtirish mumkin emas. Tilda blokdagi matn hajmini cheklaydi.

## To‘g‘ri ishlatish usuli
Asosiy platforma Render yoki boshqa hostingda ishlaydi. Tilda ichiga esa faqat kichik `iframe` kodi qo‘yiladi.

## Renderga joylash
1. Ushbu papkani GitHub/GitLab repozitoriyga yuklang yoki Render qo‘llaydigan usulda joylashtiring.
2. Renderda yangi Web Service yarating.
3. Build command: `npm install`
4. Start command: `npm start`
5. Deploy tugagach, Render bergan manzilni nusxalang.

## Tildaga ulash
1. `TILDA_T123_KODI.html` faylini oching.
2. `https://SIZNING-RENDER-MANZILINGIZ.onrender.com/` o‘rniga Render manzilingizni yozing.
3. Faqat shu kichik kodni Tilda T123 HTML blokiga qo‘ying.
4. Sahifani saqlang va Publish qiling.

## Muhim
- `public/index.html` kodini T123 blokiga to‘liq qo‘ymang.
- Ma’lumotlar hozircha platforma ochilgan brauzerning localStorage xotirasida saqlanadi.
- Keyingi bosqichda Supabase ulansa, ma’lumotlar barcha qurilmalarda umumiy bo‘ladi.
