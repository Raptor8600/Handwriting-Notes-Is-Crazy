# NoteCapture — Tutor Notes PWA

A Progressive Web App for tutors to photograph handwritten notes, transcribe them with AI, and generate summaries — organized into batches so nothing overlaps.

---

## Getting Your Free Google Gemini API Key

NoteCapture uses Google's Gemini 2.5 Flash model for handwriting recognition. The free tier gives you **500 requests per day** with no credit card required.

### Step 1 — Sign in to Google AI Studio

Go to **[aistudio.google.com](https://aistudio.google.com)** and sign in with any Google account (Gmail, school account, etc.).

> If you see a terms of service screen, accept it to continue.

### Step 2 — Open the API Keys page

Once you're signed in, look for **"Get API key"** in the left sidebar, or go directly to:

**[aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**

### Step 3 — Create a new key

1. Click the blue **"Create API key"** button
2. A dialog will appear — select **"Create API key in new project"**
3. Click **"Create API key in new project"** to confirm
4. Your key will appear — it looks like: `AIzaSyD...` (a long string starting with `AIza`)

**Copy the key now.** You can always come back to this page to view it again, but it's easiest to copy it immediately.

> ⚠️ Keep your API key private. Don't share it in screenshots or paste it into messages. It is stored only on your device inside the app.

### Step 4 — Add the key to NoteCapture

1. Open NoteCapture in Safari on your iPhone
2. Tap the **⚙️ gear icon** in the top right corner
3. Make sure **Gemini** is selected (it is selected by default)
4. Paste your key into the **"Gemini API Key"** field
5. Tap **Save Settings**

The usage bar at the top of the app will update immediately to show your live quota.

---

## Free Tier Limits

| Limit | Amount |
|---|---|
| Requests per day | 500 |
| Requests per minute | 10 |
| Cost | $0 — completely free |
| Credit card required | No |

The daily quota resets at **midnight Pacific Time** (3am Eastern / 8am UK). The app shows a live countdown and progress bars so you always know where you stand.

**500 requests per day is more than enough for typical use.** Each photo scan = 1 request. Each summary = 1 request. A full day of heavy tutoring notes would typically use 20–40 requests.

---

## Troubleshooting

### "Project denied access" or key not working — most common issue

Even with a correct key, Google blocks API calls if the Gemini API has not been explicitly enabled on your project. If you see **"Billing Tier: Unavailable"** next to your key on the API Keys page, this is the problem. Fix it with one of the two options below.

**Option A — Create a brand new key (quickest fix)**

Keys created a certain way sometimes skip the auto-enable step. Starting fresh is the fastest solution:

1. Go to **[aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**
2. Click **"Create API key"**
3. In the dialog, select **"Create API key in new project"**
4. Copy the new key and paste it into Settings in the app
5. Optionally delete the old key using the three-dot menu next to it

Keys made this way have the Generative Language API enabled automatically.

**Option B — Enable the API on your existing project**

1. Go to **[console.cloud.google.com](https://console.cloud.google.com)**
2. Make sure your NoteCapture project is selected in the dropdown at the very top of the page
3. In the search bar at the top, type **Generative Language API** and press Enter
4. Click **Generative Language API** in the results
5. Click the blue **Enable** button
6. Wait about 30 seconds, then try the app again

> You do **not** need to add a credit card or set up billing. Clicking Enable is all that is needed for the free tier to work.

---

### "API key not valid" error

- Make sure you copied the full key — it should start with `AIza` and be about 39 characters long
- Go back to [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) and copy it again fresh

### "Rate limited" error

- You have hit the 10 requests/minute cap — wait 60 seconds and try again
- This usually only happens if you scan many notes very quickly back to back

### "Daily limit reached" error

- You have used all 500 requests for the day
- The app shows the exact reset time in the usage banner
- As a workaround, you can switch to Claude (Anthropic) in Settings — that has no daily limit but costs a small amount per use

### Key works on desktop but not on iPhone

- Make sure you are opening the app in **Safari** specifically — Chrome and Firefox on iOS cannot make the same API calls
- Try clearing Safari cache: **Settings → Safari → Clear History and Website Data**

---

## Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **"+"** icon → **"New repository"**
3. Name it exactly: `Handwriting-Notes-Is-Crazy`
4. Set it to **Public**
5. Click **"Create repository"**

### Step 2 — Upload the app files

In your new repository, click **"Add file" → "Upload files"** and upload all of these:

| File | Required |
|---|---|
| `index.html` | ✅ Yes |
| `manifest.json` | ✅ Yes |
| `sw.js` | ✅ Yes |
| `icon-192.png` | ✅ Yes — see note below |
| `icon-512.png` | ✅ Yes — see note below |

> **Icons:** You need two square PNG images — one at 192×192px and one at 512×512px. These become the home screen icon. Any image works: a simple colored square, your school logo, anything. Rename the files exactly `icon-192.png` and `icon-512.png` before uploading.

Commit the files with the green **"Commit changes"** button.

### Step 3 — Enable GitHub Pages

1. In your repository, click the **Settings** tab along the top
2. Scroll down the left sidebar and click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Set Branch to **main** and folder to **/ (root)**
5. Click **Save**

Wait about 60 seconds. Your app will be live at:

```
https://YOUR-USERNAME.github.io/Handwriting-Notes-Is-Crazy/
```

---

## Add to iPhone Home Screen

> ⚠️ This **must** be done in **Safari**. Chrome and Firefox on iOS cannot install PWAs.

1. Open your GitHub Pages URL in **Safari**
2. Tap the **Share button** — the box with an arrow pointing up at the bottom of the screen
3. Scroll down in the share sheet and tap **"Add to Home Screen"**
4. Change the name to **NoteCapture** if you like
5. Tap **Add** in the top right corner

The app icon will appear on your home screen and open full-screen like a native app, with no browser address bar.

---

## Using the App

### Capturing Notes

1. Select or create a **batch** (e.g., "Monday Afternoon", "Period 3 Math")
2. Tap the camera area to photograph a page of handwritten notes
3. Tap **Extract Text** — Gemini reads the handwriting
4. Review and edit the transcription if anything was missed
5. Tap **Save to Batch**
6. Repeat for every page

### Reviewing Notes

Switch to the **Notes** tab to see all saved notes in any batch. Tap a note to expand the full text. You can copy or delete individual notes.

### Generating Summaries

1. Switch to the **Summary** tab
2. Select the batch you want to summarize
3. Tap **✦ Generate Summary**
4. The AI produces a structured summary: topics covered, student struggles, action items, patterns
5. Tap the copy icon to paste into Slack or anywhere else

### Batch Strategy

Each batch is completely isolated — notes in different batches never mix or overlap. Suggested approaches:

- One batch per day: `Mon Apr 28`
- One batch per class/period: `Period 3 — Algebra`
- One batch per tutor: `Ms. Johnson's Notes`

---

## Privacy

- Your API key is stored **only in your browser's local storage** on your device
- Note text and images are stored **only on your device** — nothing is sent to any server except the AI API when you tap "Extract Text" or "Generate Summary"
- Images sent to Gemini are processed by Google — see [Google's AI privacy policy](https://policies.google.com/privacy)
- If using Claude (Anthropic), images are processed by Anthropic — see [Anthropic's privacy policy](https://www.anthropic.com/privacy)
