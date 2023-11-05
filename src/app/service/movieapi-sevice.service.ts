import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiSeviceService {

  constructor(private httpclient: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  // bannerapidata
  bannerApiData(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  // trendingmoviesapidata
  trendingMovieApiData(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }
  // serchmovie
  getSearchMovie(data: any): Observable<any> {
    console.log(data, "movie#")
    return this.httpclient.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
  // getMOvies
  getMovieDetails(data: any): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }
  // getMOvievideo
  getMovieVideo(data: any): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }
  // moviecast
  getMovieCast(data: any): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  // Action movie

  fetchActionMovies(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }
  // Adventure
  fetchAdventureMovie(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }
  // animation

  fetcAnimationMovie(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }
  // comedy
  fetchComedyMovie(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }
  // documentry
  fetchDocumentryMovie(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }
  // science fiction movie
  fetchScienceFictionMovie(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }
  // thriller
  fetchThrillerMovie(): Observable<any> {
    return this.httpclient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }


}
