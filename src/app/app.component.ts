import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sounds: HTMLAudioElement[] = [];
  isPlaying: boolean[] = [];

  soundTitles: {filename:string, title:string}[] = [
    {
      filename: "sigla",
      title: "Sigla"
    },
    {
      filename: "sottofondo_gioco",
      title: "Sottofondo Gioco"
    },
    {
      filename: "inizio_gioco_finale",
      title: "Inizio Gioco Finale"
    },    
    {
      filename: "spot",
      title: "Pubblicità"
    },
    {
      filename: "sottofondo_gioco_finale",
      title: "Sottofondo Finale"
    },
    {
      filename: "iettatore",
      title: "Iettatore"
    },
    {
      filename: "pulsante",
      title: "Pulsante"
    },
    {
      filename: "errore",
      title: "Errore"
    },    
  ];

  constructor() {
    if (typeof Audio != "undefined"){
      for (let i = 0; i < this.soundTitles.length; i++) {
        const audio = new Audio(`audio/${this.soundTitles[i].filename}.mp3`);
        audio.loop = false;
        this.sounds.push(audio);
        audio.addEventListener('ended', () => {
          this.isPlaying[i] = false;
        });
        this.isPlaying.push(false);
      }
    }
  }

  togglePlay(index: number) {
    const audio = this.sounds[index];
    if (this.isPlaying[index]) {
      audio.pause();
      audio.currentTime = 0;
      this.isPlaying[index] = false;
    } else {
      audio.play();
      this.isPlaying[index] = true;
    }
  }
}
