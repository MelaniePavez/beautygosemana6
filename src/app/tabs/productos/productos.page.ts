import { Component, OnInit } from '@angular/core'; 
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'] 
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  
  productos = [ 
    {
      nombre: 'Polvos facial MAC',
      precio: 22,
      imagen: '/assets/img/COSMETICOS/POLVOS.jpg'
    },
    {
      nombre: 'Set cosmeticos MAC',
      precio: 30,
      imagen: '/assets/img/COSMETICOS/SET.jpg'
    },
    {
      nombre: 'Labial rojo MAC',
      precio: 25,
      imagen: '/assets/img/COSMETICOS/LABIAL.jpg'
    },
    {
      nombre: 'Base facial MAC',
      precio: 30,
      imagen: '/assets/img/COSMETICOS/BASE 2.jpg'
    },
    {
      nombre: 'Paleta sombras MAC ',
      precio: 40,
      imagen: ' /assets/img/COSMETICOS/PALETA.jpg'
    },
    {
      nombre: 'Máscara de pestañas Loreal',
      precio: 15.0,
      imagen: '/assets/img/COSMETICOS/MASCARA PESTAÑA.png'
    },
    {
      nombre: 'Agua micelar Garnier',
      precio: 10.0,
      imagen: '/assets/img/COSMETICOS/agua micelar.jpg'
    }
  
  ];

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
