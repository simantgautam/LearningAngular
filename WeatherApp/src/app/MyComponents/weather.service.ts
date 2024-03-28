import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '6983dde5f084a83129fe78160b2f4771';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() {}

  getWeather(city: String): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    console.log(url);
    return new Observable((observer) => {
      axios
        .get(url)
        .then((res) => {
          observer.next(res.data);
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
  }
}
