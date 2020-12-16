import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './../../services/youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  @ViewChild('key') keyWords: ElementRef;
  videos: any[];
  words: any;
  private unsubscribe$: Subject<any> = new Subject();
  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  getVideos(){
    this.words = this.keyWords.nativeElement.value;
    if (this.words !== null) {
      this.spinner.show()
      setTimeout(()=>
      {
        this.spinner.hide()
      }, 3000)
      this.videos = [];
      this.youTubeService
        .getVideosForChanel(this.words, 15)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(lista => {
          for (const element of lista["items"]) {
            this.videos.push(element)
          }

        });

    }


  }

}
