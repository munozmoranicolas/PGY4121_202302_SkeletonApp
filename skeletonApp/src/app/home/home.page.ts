import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  selectedSegment: string = 'mis-datos';

  constructor(private router: Router) {
    this.router.navigate(['home/mis-datos'])
  }

  segmentChanged(event : any){
    console.log(event.detail.value);
    let direction=event.detail.value
    this.router.navigate(['home/'+direction])
  }

}
