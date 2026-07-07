# ALL FINANCE CONTRACT v8.0 - Firebase ulash

## Firestore tuzilmasi
Platformaga birinchi marta kirib ma'lumot saqlanganda quyidagilar avtomatik yaratiladi:

workspaces/all-finance-contract/app/core
workspaces/all-finance-contract/templates/{templateId}
workspaces/all-finance-contract/contracts/{contractId}
workspaces/all-finance-contract/invoices/{invoiceId}
workspaces/all-finance-contract/facturas/{facturaId}
workspaces/all-finance-contract/audit_logs/{logId}

## 1. Firebase config
Firebase Console -> Project settings -> General -> Your apps -> Web app dan config qiymatlarini oling.
`public/config.js` ichiga joylang.

## 2. Authentication
Build -> Authentication -> Sign-in method -> Email/Password -> Enable.
Users bo'limida foydalanuvchi yarating.

## 3. Firestore
Build -> Firestore Database -> Create database -> Production mode.
Rules bo'limiga `firestore.rules` faylidagi kodni joylang va Publish bosing.

## 4. Authorized domains
Authentication -> Settings -> Authorized domains ichiga Render domenini kiriting:
`all-finance-contract.onrender.com`

## 5. GitHub va Render
Yangi versiyadagi barcha fayllarni GitHub repositoryga yuklang.
Render -> Manual Deploy -> Clear build cache & deploy.

## 6. Tekshirish
Platformaga kiring, shartnoma yarating. Shartnoma bilan birga avtomatik ravishda:
- invoices kolleksiyasida schet loyihasi;
- facturas kolleksiyasida schet-faktura loyihasi;
- audit_logs kolleksiyasida foydalanuvchi amali yaratiladi.

Schet yoki schet-fakturani 'Berildi' holatiga o'tkazgandan keyin u reestr summasiga qo'shiladi. Schet-faktura summasi shartnoma summasini to'liq qoplasa, shartnoma yashil rangga o'tadi va reestr oxiriga tushadi.


## Muhim: ko'p foydalanuvchili umumiy baza
`public/config.js` ichidagi `workspaceId: "all-finance-contract"` barcha ichki foydalanuvchilarni bitta umumiy reestrga ulaydi.
Shu sababli bir foydalanuvchi kiritgan shartnoma va audit yozuvi boshqa foydalanuvchilarga ham ko'rinadi.
Firebase Authentication ichida faqat ishonchli xodimlarni yarating.

Firestore Rules faylini v8 dagi yangi variant bilan albatta qayta Publish qiling. Aks holda `workspaces` kolleksiyasiga yozish bloklanadi.
