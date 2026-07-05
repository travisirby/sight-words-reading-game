// Speech recognition wrapper (webkitSpeechRecognition on iOS/Safari/Chrome).
// Every failure path resolves gracefully — the game never depends on this.

const SR = window.webkitSpeechRecognition || window.SpeechRecognition || null;

let rec = null;
let listening = false;

export function isAvailable() {
  return !!SR;
}

// start(onResult): onResult receives an array of lowercase candidate words
// gathered from all alternatives (interim + final).
export function start(onResult, onEnd) {
  if (!SR || listening) return false;
  try {
    rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = true;
    rec.maxAlternatives = 5;
    rec.continuous = false;

    rec.onresult = (ev) => {
      const words = [];
      for (let i = 0; i < ev.results.length; i++) {
        const res = ev.results[i];
        for (let j = 0; j < res.length; j++) {
          const txt = (res[j].transcript || '')
            .toLowerCase()
            .replace(/[^a-z'\s]/g, '');
          for (const w of txt.split(/\s+/)) {
            if (w) words.push(w);
          }
        }
      }
      if (words.length && onResult) onResult(words);
    };
    rec.onerror = () => stopInternal(onEnd);
    rec.onend = () => stopInternal(onEnd);
    rec.start();
    listening = true;
    return true;
  } catch (e) {
    stopInternal(onEnd);
    return false;
  }
}

function stopInternal(onEnd) {
  if (!listening) return;
  listening = false;
  rec = null;
  if (onEnd) onEnd();
}

export function stop() {
  if (rec) {
    try {
      rec.stop();
    } catch (e) { /* ignore */ }
  }
  listening = false;
}

export function isListening() {
  return listening;
}
