
# 🚨 Emergency SOS & Safe Route Tracker

A modern, responsive web application that helps users stay safe during emergencies by sharing live location and suggesting nearby safe zones like hospitals, police stations, and parks. Built using **React**, **Tailwind CSS**, and native **HTML5 APIs**.

---

## 🌐 Live Features

- 📍 **Real-Time Geolocation Tracking**
  - Uses the Geolocation API to show your current location on a map
  - Updates as you move

- 🔋 **Background Location Updates**
  - Simulates periodic location pings in the background
  - Stores data in `localStorage` or logs to console (server integration ready)

- 🌐 **Network-Aware UI**
  - Uses Network Information API
  - Enables low-data mode on slow connections (3G/2G)

- 🆘 **SOS Button**
  - Instantly "shares" your live coordinates with a mock emergency contact
  - Easily customizable for SMS, email, WhatsApp, etc.

- 🛡️ **Safe Zones Nearby**
  - Predefined list of nearby safe zones (police stations, hospitals, parks)
  - Can be replaced with real-time data from Google Places, OpenStreetMap, or Geoapify APIs

---

## 🛠 Tech Stack

- **Frontend**: React.js (Functional Components + Hooks)
- **Styling**: Tailwind CSS (with custom colors and animations)
- **APIs Used**:
  - [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  - [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)
  - Background update logic with `setInterval` and `localStorage`

---

## 📁 Project Structure

```

src/
├── components/
│   ├── MapView\.jsx
│   ├── SafeZoneList.jsx
│   ├── SOSButton.jsx
│   └── NetworkBanner.jsx
├── utils/
│   └── mockSafeZones.js
├── App.jsx
├── index.css
└── main.jsx

````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rajaiswal6544/EmergencySoS.git
cd EmergencySoS
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start development server

```bash
npm run dev
# or
yarn dev
```

### 4. Build for production

```bash
npm run build
```

---

## ✅ Requirements

* Node.js ≥ 16
* Internet connection for map iframe
* Tailwind CSS configured (`tailwind.config.ts` included)
* `tailwindcss-animate` plugin installed

---

## 📦 Plugins Used

```bash
npm install tailwindcss-animate
```

---

## 👨‍💻 Author

Made with ❤️ by [Raj Jaiswal](https://github.com/rajaiswal6544)

---
