

let mediaRecorder = null;
let stream = null;

export async function startRecording(onData) {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder = new MediaRecorder(stream, {
      mimeType: "audio/webm"
    });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        onData(event.data);
      }
    };

    mediaRecorder.start(250); // Send audio every 250ms
  } catch (error) {
    console.error("Microphone permission denied", error);
    throw error;
  }
}

export function stopRecording() {
  if (mediaRecorder) {
    mediaRecorder.stop();
    mediaRecorder = null;
  }

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
}
