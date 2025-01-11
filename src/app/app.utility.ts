export class Speech {
  private utterance: SpeechSynthesisUtterance | null = null;

  startOrResumeVoice(text: string): void {
    if ('speechSynthesis' in window) {
      if (speechSynthesis.paused) {
        // Resume the paused speech
        speechSynthesis.resume();
      } else if (!speechSynthesis.speaking) {
        // Create a new utterance and start speaking
        this.utterance = new SpeechSynthesisUtterance(text);
        this.utterance.lang = 'en-US';
        this.utterance.pitch = 1;
        this.utterance.rate = 1;
        this.utterance.volume = 1;

        speechSynthesis.speak(this.utterance);
      }
    } else {
      console.error('Speech Synthesis API is not supported in this browser.');
      alert('Your browser does not support text-to-speech.');
    }
  }

  // Pause Voice
  pauseVoice(): void {
    if ('speechSynthesis' in window && speechSynthesis.speaking) {
      speechSynthesis.pause();
    }
  }

  // Optional Stop Function (If Needed)
  stopVoice(): void {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }
}
