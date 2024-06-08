import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  edad: number = 25;
  peso: number = 60;
  altura: number = 170;
  sexo: string = "Masculino";

  
  ngOnInit():void{

  }

  constructor(private router:Router){

  }

  cambiarAltura(event: any){
    console.log(event.target.value);
    this.altura= event.target.value;
  }

  masculino(){
    this.sexo="Masculino";
  }

  femenino(){
    this.sexo="Femenino";
  }

  calcularMBI(){
    const BMI = this.peso/Math.pow(this.altura/100,2);
    this.router.navigate(['./resultado', BMI.toFixed(1)]);
  }
}