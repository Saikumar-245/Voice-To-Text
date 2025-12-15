// Deepgram.jsx

export function connectDeepgram(onTranscript) {
  const apiKey = import.meta.env.VITE_DEEPGRAM_API_KEY;

  if (!apiKey) {
    console.error("Deepgram API key missing");
    return null;
  }

  const socket = new WebSocket(
    "wss://api.deepgram.com/v1/listen?punctuate=true&interim_results=true",
    ["token", apiKey]
  );

  socket.onopen = () => {
    console.log("Connected to Deepgram");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);

      const transcript =
        data.channel &&
        data.channel.alternatives &&
        data.channel.alternatives[0] &&
        data.channel.alternatives[0].transcript;

      if (transcript && transcript.trim() !== "") {
        onTranscript(transcript);
      }
    } catch (err) {
      console.error("Deepgram parse error", err);
    }
  };

  socket.onerror = (error) => {
    console.error("Deepgram socket error", error);
  };

  socket.onclose = () => {
    console.log("Deepgram connection closed");
  };

  return socket;
}
