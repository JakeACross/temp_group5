import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = 'AIzaSyDcoaSJFaIKk12SuNKxO_oeM7NcEEF5_m4';

  constructor(public http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  getVideosForChanel(words, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + words + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
