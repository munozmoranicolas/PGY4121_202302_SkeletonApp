import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnimationController} from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage{
  @ViewChild('labelCabecera',{ read: ElementRef }) labelCabecera: ElementRef;

  data: any;
  niveles:any[]=[
    {id:1,nivel:"Basica Incompleta"},
    {id:2,nivel:"Basica Completa"},
    {id:3,nivel:"Media Incompleta"},
    {id:4,nivel:"Media Completa"},
    {id:5,nivel:"Media Incompleta"},
    {id:6,nivel:"Superior Completa"}
  ]

  perfil={
    nombre:"",
    apellido:"",
    nivel_educacion:"",
    fecha_nacimiento:""
  }
  
  animacion_labelCabecera: any;

  constructor(private animationCtrl: AnimationController,private activeroute: ActivatedRoute, private router: Router,public alertController: AlertController) {
    this.labelCabecera = ElementRef.prototype as any;
    this.animacion_labelCabecera = Animation.prototype as any;
    
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      }
      else{
        this.router.navigate(["/login"])
      }
    });
  }

  ngAfterViewInit() {
    const px_screem = window.screen.width;
    this.animacion_labelCabecera = this.animationCtrl
    .create()
      .addElement(this.labelCabecera.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      /*.fromTo('transform', 'translateX('+px_screem/2+'px)', 'translateX('+px_screem+'px)')
      .fromTo('opacity', '1', '0.2')*/
      .keyframes([
        { offset: 0, transform: 'translateX(0px)'},
        { offset: 0.5, transform: `translateX(${px_screem / 2}px)` },
        { offset: 1, transform: `translateX(${px_screem - 50}px)` },
      ])
      .fromTo('opacity', '1', '0.2');

      this.animacion_labelCabecera.play();
  }

  limpiar(){
    for (var [key, value] of Object.entries(this.perfil)) {
      Object.defineProperty(this.perfil,key,{value:""})
    }
  }

  mostrar(){
    (this.perfil.nombre!="" && this.perfil.apellido!="") && 
    this.presentAlert("Usuario","Su nombre es "+this.perfil.nombre+" "+this.perfil.apellido);
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
