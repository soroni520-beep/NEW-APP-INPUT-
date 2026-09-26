# 📱 TASS INPUT 2.0 - প্রজেক্ট ও ফাইল ডিরেক্টরি পরিচিতি (সব কিছু এক নজরে)

এই ডকুমেন্টে আপনার পুরো অ্যাপের সমস্ত কম্পোনেন্ট, লোগো, ডেটাবেস কনফিগারেশন এবং GitHub দিয়ে এরর ছাড়া APK বানানোর সমস্ত বিবরণ এক সাথে সাজিয়ে দেওয়া হলো।

---

## 📂 ফাইল ও কম্পোনেন্ট তালিকা (এক নজরে)

### 🎨 ১. লোগো ও আইকন (Assets & Logos)
* `public/icon.svg` — অ্যাপের মূল ভেক্টর লোগো (Vector Logo)
* `public/pwa-192x192.png` — ১৯২x১৯২ সাইজের অ্যাপ আইকন
* `public/pwa-512x512.png` — ৫১২x৫১২ সাইজের হাই-রেজোলিউশন অ্যাপ আইকন
* `public/pwa-maskable-512x512.png` — অ্যান্ড্রয়েড রাউন্ডেড মাস্কেবল আইকন
* `public/apple-touch-icon.png` — মোবাইল হোম স্ক্রিন আইকন
* `public/favicon.ico` — ব্রাউজার ট্যাব আইকন

---

### 🧩 ২. অ্যাপের সমস্ত স্ক্রিন ও কম্পোনেন্ট (UI Components)
* **`src/App.tsx`** — মূল অ্যাপ্লিকেশন হাব (রুট পেজ, স্টেট ম্যানেজমেন্ট, ট্যাব নেভিগেশন)
* **`src/components/Navbar.tsx`** — উপরের হেডার বার (লোগো, BLK টাইটেল, নেটওয়ার্ক স্ট্যাটাস, ফুলস্ক্রিন ও অ্যাকশন বাটন)
* **`src/components/BottomNav.tsx`** — নিচের দ্রুত নেভিগেশন বার (Dashboard, Input, Reports, Store, Admin)
* **`src/components/Dashboard.tsx`** — ড্যাশবোর্ড স্ক্রিন (দৈনিক সারাংশ, মোট উৎপাদন, টার্গেট অগ্রগতি, দ্রুত পরিসংখ্যান)
* **`src/components/ProductionInputView.tsx`** — উৎপাদন এন্ট্রি স্ক্রিন (সহজ ইনপুট ফর্ম, সাইজ প্রিসেট, দ্রুত সেভ)
* **`src/components/ProductionInputModal.tsx`** — ইনপুট মডাল পপআপ
* **`src/components/ReportsView.tsx`** — রিপোর্ট ও পিডিএফ এক্সপোর্ট (স্বয়ংক্রিয় ফাইলনেম `BLK-xxxx-TASS-REPORT.pdf`)
* **`src/components/AccessoriesStore.tsx`** — অ্যাক্সেসরিজ ও মেটেরিয়াল ইনভেন্টরি স্টোর
* **`src/components/AdminPanel.tsx`** — অ্যাডমিন কন্ট্রোল প্যানেল (ম্যানেজমেন্ট, রিপোর্ট, ব্যাকআপ)
* **`src/components/BlkManager.tsx`** — BLK / ব্যাচ / স্টাইল কোড ম্যানেজার
* **`src/components/SizePresetManager.tsx`** — সাইজ প্রিসেট ম্যানেজার (S, M, L, XL, XXL)
* **`src/components/LoginModal.tsx`** — সুরক্ষিত পিন/লগইন স্ক্রিন (পাসওয়ার্ড একবার লিখলে হাইড থাকে)
* **`src/components/PWAInstallModal.tsx`** — ১-ক্লিকে ফোনে ইনস্টল করার পপআপ

---

### 🗄️ ৩. ক্লাউড ডেটাবেস ও ব্যাকএন্ড (Firebase & Cloud)
* **`src/firebase.ts`** — Firebase ক্লাউড ডেটাবেস সংযোগ (Firestore)
* **`firestore.rules`** — ডেটাবেস সিকিউরিটি রুলস (আপনার ডেটা নিরাপদ থাকবে, কখনো মুছে যাবে না)
* **`firebase-blueprint.json`** — ডেটাবেস স্ট্রাকচার ব্লুপ্রিন্ট

---

### ⚙️ ৪. বিল্ড ও কনফিগারেশন ফাইল (Build Configurations)
* **`capacitor.config.json`** — অ্যান্ড্রয়েড নেটিভ কনফিগারেশন (App ID: `com.tassinput.app`)
* **`.github/workflows/build-apk.yml`** — GitHub Actions স্বয়ংক্রিয় APK বিল্ডার স্ক্রিপ্ট (Zero-Error Updated)
* **`package.json`** — প্রজেক্টের সমস্ত ডিপেন্ডেন্সি ও লাইব্রেরি
* **`vite.config.ts`** — Vite ফাস্ট বিল্ড কনফিগারেশন

---

## 🚀 GitHub দিয়ে এরর ছাড়া সরাসরি APK বানানোর সহজ নিয়ম:

১. আপনার সব ফাইল GitHub-এ আপলোড করুন (Push)।
২. GitHub রিপোজিটরির **Actions** ট্যাবে যান।
৩. বামপাশে **"📱 Generate Android APK"** সিলেক্ট করে **"Run workflow"** বাটনে ক্লিক করুন।
৪. ২-৩ মিনিটের মধ্যে বিল্ড সম্পন্ন হবে এবং **Artifacts** সেকশন থেকে `TASS-INPUT-v2.0-Debug-APK` ডাউনলোড করে সরাসরি মোবাইলে ইনস্টল করতে পারবেন!
