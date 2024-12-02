import { Component } from '@angular/core';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.page.html',
  styleUrls: ['./consejos.page.scss'],
})
export class ConsejosPage {
  // Propiedad definida como 'consejos' en minúsculas
  consejos = [
    {
      nombre: 'Limpieza diaria',
      descripcion: 'Usa un limpiador suave adecuado para tu tipo de piel (seca, grasa, mixta o sensible). Limpia tu rostro por la mañana y por la noche para eliminar suciedad, impurezas y exceso de grasa..',
      imagen: '/assets/img/consejos/consejo2.jpg',
    },
    {
      nombre: 'Primero la crema hidratante y luego el bloqueador',
      descripcion: 'La crema hidratante se debe aplicar primero para asegurar que tu piel esté bien hidratada y nutrida. El bloqueador solar debe aplicarse después de la crema hidratante, ya que actúa como una barrera protectora contra los daños del sol',
      imagen: '/assets/img/consejos/consejo3.jpg',
    },
    {
      nombre: '¿Cómo debo maquillarme?',
      descripcion: '1. Preparación de la piel 2. Base 3. Polvo 4. Contorno y rubor 5.Ojos 6. Cejas 7. Labios 8. Fijador',
      imagen: '/assets/img/consejos/consejo1.jpg',
    },
    // Agregar más consejos aquí
  ];
}

