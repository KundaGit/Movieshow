import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieapiSeviceService } from 'src/app/service/movieapi-sevice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private https: MovieapiSeviceService, private route: ActivatedRoute) {

  }
  getMoviesDetailsresult: any
  getMovieVideoResult:any
  getMoviecastResult:any


  ngOnInit(): void {
    let getParaId = this.route.snapshot.paramMap.get('id')
    console.log(getParaId, "getPAramid#")

    this.getMovie(getParaId)
    this.getVideo(getParaId)
    this.getMovieCast(getParaId)

  }
  getMovie(id: any) {
    this.https.getMovieDetails(id).subscribe((result) => {
      console.log(result, "movieDetails#")
      this.getMoviesDetailsresult = result
    })

  }
  getVideo(id:any){
    this.https.getMovieVideo(id).subscribe((result)=>{
      console.log(result,"getMovieVideo#")
      result.results.forEach((element:any)=>{
        if(element.type==="Trailer"){
          this.getMovieVideoResult=element.key
        }
      })
    
    })
  }
  getMovieCast(id:any){
    this.https.getMovieCast(id).subscribe((result)=>{
      console.log(result,"MovieCast#")
      this.getMoviecastResult=result.cast
    })
  }

}
