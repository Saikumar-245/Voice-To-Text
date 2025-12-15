

import { useState } from "react";
import { startRecording, stopRecording } from "./Audio";
import { connectDeepgram } from "./Deepgram";
import "./index.css";

let dgSocket = null;

function App() {
  const [recording, setRecording] = useState(false);
  const [text, setText] = useState("");

  const start = async () => {
    try {
      setRecording(true);

      dgSocket = connectDeepgram((t) => {
        setText(prev => prev + " " + t);
      });

      await startRecording((chunk) => {
        if (dgSocket && dgSocket.readyState === WebSocket.OPEN) {
          dgSocket.send(chunk);
        }
      });
    } catch {
      alert("Microphone permission denied");
      setRecording(false);
    }
  };

  const stop = () => {
    setRecording(false);
    stopRecording();
    if (dgSocket) dgSocket.close();
  };

  return (
    <div className="container">
      <h2>🎤 Voice to Text</h2>

      <button
        className={recording ? "recording" : ""}
        onMouseDown={start}
        onMouseUp={stop}
      >
        {recording ? "Listening..." : "Hold to Talk"}
      </button>

      <textarea
        value={text}
        readOnly
        placeholder="Transcribed text will appear here..."
      />
    </div>
  );
}

export default App;
