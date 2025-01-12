import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Speech } from '../app.utility';

@Component({
  selector: 'app-lesson1',
  imports: [MatIconModule],
  templateUrl: './lesson1.component.html',
  styleUrl: './lesson1.component.css',
})
export class Lesson1Component {
  @ViewChild('textDiv') textDiv!: ElementRef;

  private utterance: SpeechSynthesisUtterance | null = null;
  private speech: Speech = new Speech();
  ngAfterViewInit(): void {
    if (!this.textDiv) {
      console.error('textDiv not found!');
    }
  }

  // Start or Resume Voice
  startOrResumeVoice(): void {
    const text = this.textDiv.nativeElement.innerText;
    this.speech.startOrResumeVoice(text);
  }

  // Pause Voice
  pauseVoice(): void {
    this.speech.pauseVoice();
  }

  // Optional Stop Function (If Needed)
  stopVoice(): void {
    this.speech.stopVoice();
  }
}
