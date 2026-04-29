# NoteCapture — Tutor Notes PWA

A Progressive Web App (PWA) for tutors to photograph handwritten notes, transcribe them with AI, and generate summaries across organized batches.

## Features

- 📸 **Camera capture** — tap to photograph handwritten notes directly from your iPhone 16 camera
- 🤖 **AI transcription** — Claude vision model reads handwriting accurately
- 📦 **Batch system** — organize notes into named batches (e.g., "Monday Session", "Period 3") so nothing overlaps or gets mixed up
- ✍️ **Editable transcriptions** — correct any transcription errors before saving
- 📋 **AI summaries** — generate a structured summary per batch highlighting key topics, student struggles, and action items
- 📱 **iPhone PWA** — add to home screen for a full native-app feel, works offline after first load

## Deployment to GitHub Pages

1. Create a new GitHub repository (e.g., `notecapture`)
2. Upload these files to the repo root:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png` *(see icon note below)*
   - `icon-512.png` *(see icon note below)*
3. Go to **Settings → Pages** → set source to `main` branch, root `/`
4. Your app will be live at `https://yourusername.github.io/notecapture/`

> **Icon note:** You need two PNG icons for the PWA manifest. Create or export a simple square icon at 192×192 and 512×512 px and save them as `icon-192.png` and `icon-512.png`. Any design works — even a solid color square with text.

## Adding to iPhone Home Screen

1. Open the GitHub Pages URL in **Safari** (must be Safari for iOS PWA install)
2. Tap the **Share** button (box with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "NoteCapture" and tap **Add**
5. The app icon will appear on your home screen and open full-screen like a native app

## Setup

On first launch, the app will prompt for your **Anthropic API key**:
- Get a key at [console.anthropic.com](https://console.anthropic.com)
- The key is stored **only on your device** in localStorage — never sent anywhere except Anthropic's API

## How to Use

### Capturing Notes
1. Select or create a **batch** (e.g., "Monday Afternoon")
2. Tap the camera area to photograph a handwritten note
3. Tap **Extract Text** — the AI reads the handwriting
4. Review and edit the transcription if needed
5. Tap **Save to Batch**
6. Repeat for each note page

### Reviewing Notes
- Switch to the **Notes** tab to see all saved notes in a batch
- Expand any note to read the full transcription
- Switch between batches using the selector at the top

### Generating Summaries
- Switch to the **Summary** tab
- Select the batch you want to summarize
- Tap **Generate Summary**
- The AI produces a structured summary covering key topics, student needs, and action items
- Tap the copy button to paste the summary into Slack or anywhere else

## Batch Strategy

Each batch is independent — notes in different batches never mix. Suggested approach:
- One batch per day (`Mon Apr 28`)
- One batch per class period (`Period 3 — Math`)
- One batch per tutor (`Ms. Johnson's Notes`)

Batches and all notes persist in your browser's local storage.
