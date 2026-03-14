import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: false
})
export class NoticiasPage {

  newsapi: string = 'https://gnews.io/api/v4/search?q=meio%20ambiente&lang=pt&token=2ca442369d707db3fc706484940b1eee';
  articles: any[] = [];
  
  
constructor(private http: HttpClient) {
    this.showNews();
  }

  // Função para buscar as notícias
  showNews() {
    this.http.get(this.newsapi).subscribe(
      (response: any) => {
        console.log(response);

        if (response.articles && response.articles.length > 0) {
         
          this.articles = response.articles;
        } else {
          console.log("Nenhum artigo encontrado.");
        }
      },
      error => {
        console.error("Erro ao buscar notícias:", error);
      }
    );
  }
}