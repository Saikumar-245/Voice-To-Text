# 🎤 Voice-to-Text Desktop App (Wispr Flow Clone)

This project is a **functional clone of Wispr Flow**, focused on the **core voice-to-text workflow**. It is built using **Tauri + React.js** and integrates **Deepgram** for real-time speech recognition.

The goal of this assignment is to demonstrate practical skills in building **AI-powered, cross-platform desktop applications** with clean architecture and reliable real-time audio streaming.

---

## 🚀 Features

* ✅ Push-to-Talk voice input
* 🎙️ Microphone access & audio capture
* ⚡ Real-time speech-to-text transcription using Deepgram
* 📝 Live display of transcribed text
* 🖥️ Desktop-ready via Tauri
* ❌ Graceful error handling (mic / network / API errors)

---

## 🛠️ Tech Stack

* **Tauri** – Cross-platform desktop framework (Windows, macOS, Linux)
* **React.js** – Frontend UI and state management
* **Deepgram API** – Real-time speech-to-text transcription
* **Web Audio API** – Microphone access and audio streaming

---

## 📁 Project Structure

```
src/
│
├── App.jsx          # Main UI and push-to-talk logic
├── main.jsx         # React entry point
├── Audio.jsx        # Microphone access & audio capture logic
├── Deepgram.jsx     # Deepgram WebSocket transcription service
├── styles.css       # Basic styling
│
└── assets/
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd wispr-flow-clone
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Deepgram API Key

Create a `.env` file in the root directory:

```env
VITE_DEEPGRAM_API_KEY=your_deepgram_api_key_here
```

> ⚠️ Do not commit your API key to GitHub.

### 4️⃣ Run in Development Mode

```bash
npm run tauri dev
```

---

## 🧠 Application Architecture

The application follows a **clean separation of concerns**:

### UI Layer (React)

* Handles user interaction (push-to-talk button)
* Displays transcription results

### Audio Layer (`Audio.jsx`)

* Manages microphone permissions
* Captures audio using `MediaRecorder`
* Streams audio chunks at regular intervals

### Transcription Layer (`Deepgram.jsx`)

* Manages WebSocket connection to Deepgram
* Sends audio chunks for transcription
* Receives and parses real-time transcript results

This modular design makes the app **easy to maintain and extend**.

---

## 🎯 Core Workflow

1. User presses and holds the **Push-to-Talk** button
2. Microphone access is requested
3. Audio is captured and streamed to Deepgram
4. Deepgram returns real-time transcription
5. Transcribed text is displayed in the UI
6. Releasing the button stops recording

---

## ⚠️ Error Handling

The app gracefully handles:

* ❌ Microphone permission denial
* ❌ WebSocket connection issues
* ❌ Missing or invalid API keys

Errors are logged and do not crash the application.

---

## 🧪 Known Limitations

* UI is minimal (functionality prioritized over design)
* English language transcription only
* No advanced post-processing or punctuation correction
* Audio format uses `audio/webm` for simplicity

---

## 🎥 Demo Video

A demo video is provided showing:

* Push-to-talk interaction
* Real-time transcription
* Desktop application running via Tauri

(Video hosted on Google Drive / YouTube)

---

## 🧩 Future Improvements

* Keyboard shortcut for push-to-talk
* PCM audio streaming for higher accuracy
* Auto-insert text into active applications
* Multi-language support
* Improved UI/UX

---

## 🏁 Conclusion

This project demonstrates:

* Real-time audio streaming
* AI-powered speech recognition integration
* Clean, maintainable React architecture
* Practical use of Tauri for desktop apps

The focus was on **functionality, code quality, and user workflow**, aligning closely with real-world product requirements.

---

✅ **Thank you for reviewing this assignment!**
