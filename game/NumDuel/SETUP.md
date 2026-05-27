# NumDuel — Setup Guide

## Step 1: Create a Firebase Project

1. Go to https://console.firebase.google.com
2. Click **"Add project"** → give it a name (e.g. `numduel`) → Continue
3. Disable Google Analytics (not needed) → **Create project**

---

## Step 2: Enable Realtime Database

1. In your project, go to **Build → Realtime Database**
2. Click **"Create Database"**
3. Choose a location (any region is fine)
4. Start in **Test mode** (for now — allows all reads/writes)
5. Click **Enable**

---

## Step 3: Get your Firebase Config

1. Go to **Project Settings** (gear icon ⚙️ top left)
2. Scroll down to **"Your apps"** → click the `</>` (Web) icon
3. Register the app (any nickname)
4. Copy the `firebaseConfig` object — it looks like this:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "numduel.firebaseapp.com",
  databaseURL: "https://numduel-default-rtdb.firebaseio.com",
  projectId: "numduel",
  storageBucket: "numduel.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Step 4: Paste Config into index.html

Open `index.html` and find this section near the top:

```js
// ── PASTE YOUR FIREBASE CONFIG HERE ──
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  ...
};
```

Replace the placeholder values with your actual config.

---

## Step 5: Set Database Rules (Security)

In Firebase Console → Realtime Database → **Rules** tab, paste:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

Click **Publish**.

---

## Step 6: Host on GitHub Pages

1. Create a new **public** GitHub repository (e.g. `numduel`)
2. Upload `index.html` to the repo
3. Go to repo **Settings → Pages**
4. Source: **Deploy from a branch** → branch: `main` → folder: `/ (root)`
5. Save — GitHub will give you a URL like:
   `https://yourusername.github.io/numduel/`

---

## How to Play

1. **Player A** opens the game URL, selects digit count, clicks **Create Game**
2. Player A shares the **5-letter room code** with Player B (via WhatsApp, etc.)
3. **Player B** opens the same URL, enters the room code, clicks **Join Game**
4. Both players enter their **secret number** and click **Lock it in**
5. **Player A guesses first**, then turns alternate
6. Green cell = correct digit in correct position
7. First player to guess the full number wins!

---

## Optional: Secure the Database Later

The "Test mode" rules expire after 30 days. When they do, update the rules to:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

(Same as above — this keeps it open. For a production app you'd add auth, but for a personal game this is fine.)
