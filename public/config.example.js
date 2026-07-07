// Firebase Console -> Project settings -> General -> Your apps -> SDK setup and configuration -> Config
// dagi firebaseConfig obyektini quyidagi qiymatlarga ko‘chiring.
// Bu web konfiguratsiya maxfiy server kaliti emas. Xavfsizlik Firestore Rules orqali ta’minlanadi.
window.FIREBASE_CONFIG = {
  apiKey: "SIZNING_API_KEY",
  authDomain: "SIZNING_PROJECT_ID.firebaseapp.com",
  projectId: "SIZNING_PROJECT_ID",
  storageBucket: "SIZNING_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SIZNING_MESSAGING_SENDER_ID",
  appId: "SIZNING_APP_ID",
  // Barcha Firebase foydalanuvchilari bir xil reestr va auditni ko‘rishi uchun umumiy ish maydoni.
  workspaceId: "all-finance-contract"
};
