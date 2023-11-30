import { Component, Input } from '@angular/core';
import { FaceSnap  } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-g1',
  templateUrl: './face-snap-g1.component.html',
  styleUrls: ['./face-snap-g1.component.scss']
})
export class FaceSnapG1Component {
  // title !: String ;
  // description !: String ;
  // createDate !:Date ;
  // snaps !: number ;
  // imageUrl! : String ; 
  // buttonText !:string ;
  @Input() faceSnap!:FaceSnap ;
  mySnap!: FaceSnap ;
  faceSnaps !:FaceSnap[] ;
  buttonText!: string;
  snaps!: number ;
  
  

}




