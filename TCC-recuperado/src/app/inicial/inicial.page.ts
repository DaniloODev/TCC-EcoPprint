import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
  standalone: false
})
export class InicialPage {
  apiKey: string = '8a60b2de14f7a17c7a11706b2cfcd87c';
  weatherData: any = null;
  cityName: string = '';
  alertMessage: string = '';

  constructor(private http: HttpClient) {}

  fetchWeatherByCityName() {
    if (!this.cityName.trim()) {
      this.alertMessage = 'Você precisa digitar uma cidade.';
      this.weatherData = null;
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(this.cityName)}&appid=${this.apiKey}&units=metric&lang=pt_br`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        if (response.cod === 200) {
          this.weatherData = {
            city: response.name,
            country: response.sys.country,
            temp: response.main.temp,
            tempMax: response.main.temp_max,
            tempMin: response.main.temp_min,
            description: response.weather[0].description,
            tempIcon: response.weather[0].icon,
            windSpeed: response.wind.speed,
            humidity: response.main.humidity,
          };
          this.alertMessage = '';
        }
      },
      (error) => {
        this.alertMessage = 'Não foi possível localizar a cidade.';
        this.weatherData = null;
        console.error('Erro ao buscar clima:', error);
      }
    );
  }
}