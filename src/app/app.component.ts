import { Component } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet1';
  faceSnaps !:FaceSnap[] ;
  mySnap!: FaceSnap ;


  ngOnInit(){
    // this.title = "Archibald" ;
    // this.description = "Mon meilleur ami depuis petit" ;
    // this.createDate = new Date() ;
    // this.snaps = 6 ;
    // this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg" ;
    // this.buttonText = "Oh Snap" ;

    // this.mySnap = new FaceSnap("Archibald","Mon meilleur ami depuis petit", "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", new Date(),6, "Oh Snap !" ) ;
  

        
  }
}
