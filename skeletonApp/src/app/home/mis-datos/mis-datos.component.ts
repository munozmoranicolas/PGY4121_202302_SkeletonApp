import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { AlertController, AnimationController, IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
  standalone: true,
  imports: [MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,IonicModule,
  CommonModule]
})
export class MisDatosComponent {
  @ViewChild('labelCabecera',{ read: ElementRef }) labelCabecera: ElementRef;
  @ViewChild('inputNombre',{ read: ElementRef }) inputNombre: ElementRef;
  @ViewChild('inputApellido',{ read: ElementRef }) inputApellido: ElementRef;

  user: string | null = "";
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
  animacion_inputs: any;

  constructor(private animationCtrl: AnimationController,private activeroute: ActivatedRoute, private router: Router,public alertController: AlertController) {
    this.labelCabecera = ElementRef.prototype as any;
    this.inputNombre = ElementRef.prototype as any;
    this.inputApellido = ElementRef.prototype as any;
    this.animacion_labelCabecera = Animation.prototype as any;
    this.animacion_inputs = Animation.prototype as any;
    
    if (!localStorage.getItem('isUserLoggedIn')) {
      this.router.navigate(['/login']);
    }
    else{ 
      this.user = localStorage.getItem('userName');
    }
  }

  ngAfterViewInit() {
    this.animacion_labelCabecera = this.animationCtrl
      .create()
      .addElement(this.labelCabecera.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      /*.fromTo('transform', 'translateX('+px_screem/2+'px)', 'translateX('+px_screem+'px)')
      .fromTo('opacity', '1', '0.2')*/
      .keyframes([
        { offset: 0, transform: 'translateX(0%)'},
        { offset: 0.5, transform: `translateX(50%)` },
        { offset: 1, transform: `translateX(100%)` },
      ])
      .fromTo('opacity', '1', '0.2');

    this.animacion_labelCabecera.play();

    this.animacion_inputs = this.animationCtrl
      .create()
      .addElement(this.inputNombre.nativeElement)
      .addElement(this.inputApellido.nativeElement)
      .duration(300)
      .iterations(1)
      /*.fromTo('transform', 'translateX('+px_screem/2+'px)', 'translateX('+px_screem+'px)')
      .fromTo('opacity', '1', '0.2')*/
      .keyframes([
        { offset: 0, transform: 'translateX(0%)'},
        { offset: 0.4, transform: `translateX(-2%)` },
        { offset: 0.8, transform: `translateX(2%)` },
        { offset: 1, transform: `translateX(0%)` },
      ])
  }

  limpiar(){
    for (var [key, value] of Object.entries(this.perfil)) {
      Object.defineProperty(this.perfil,key,{value:""})
    }
    this.animacion_inputs.play();
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
