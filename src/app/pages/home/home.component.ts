import { Component, OnInit } from '@angular/core';
import { MovieapiSeviceService } from 'src/app/service/movieapi-sevice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieservice: MovieapiSeviceService) {
  }
  bannerResult: any = []
  trendingMovieResult: any = []
  actionMovieResult: any = []
  adventureMovieResult: any = []
  animationMovieResult: any = []
  comedyMovieResult: any = []
  documentryMovieResult: any = []
  scienceMovieResult: any = []
  thrillerMovieResult: any = []





  ngOnInit(): void {
    this.bannerData()
    this.trendinData()
    this.actionMovie()
    this.adventureMovie()
    this.animationMovie()
    this.comedyMovie();
    this.documentryMovie();
    this.scienceMovie();
    this.thrillerMovie()
  }

  // bannerapidata
  bannerData() {
    this.movieservice.bannerApiData().subscribe((result) => {
      console.log(result, 'banneresult')
      this.bannerResult = result.results
    })
  }
  trendinData() {
    this.movieservice.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.trendingMovieResult = result.results
    })
  }
  // ?action/
  actionMovie() {
    this.movieservice.fetchActionMovies().subscribe((result) => {
      console.log(result, "actoinmovie#")
      this.actionMovieResult = result.results
    })
  }
  adventureMovie() {
    this.movieservice.fetchAdventureMovie().subscribe((result) => {
      console.log(result, "actoinmovie#")
      this.adventureMovieResult = result.results
    })
  }
  animationMovie() {
    this.movieservice.fetcAnimationMovie().subscribe((result) => {
      console.log(result, "animation#")
      this.animationMovieResult = result.results
    })
  }
  comedyMovie() {
    this.movieservice.fetchComedyMovie().subscribe((result) => {
      console.log(result, "comedyMovie#")
      this.comedyMovieResult = result.results
    })
  }
  documentryMovie() {
    this.movieservice.fetchDocumentryMovie().subscribe((result) => {
      console.log(result, "documentryMovie#")
      this.documentryMovieResult = result.results
    })
  }
  scienceMovie() {
    this.movieservice.fetchScienceFictionMovie().subscribe((result) => {
      console.log(result, "scienceMovie#")
      this.scienceMovieResult = result.results
    })
  }
  thrillerMovie() {
    this.movieservice.fetchThrillerMovie().subscribe((result) => {
      console.log(result, "thrillerMOvie#")
      this.thrillerMovieResult = result.results
    })
  }

}
