import { Component } from '@angular/core';

export interface PublicSlide {
  imageUrl: string;
  title: string;
  subtitle: string;
}

/** Portada pública: carrusel y anclas a las que apunta el menú del PublicLayout. */
@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss'],
})
export class PublicHomeComponent {
  readonly slides: PublicSlide[] = [
    {
      imageUrl: 'https://picsum.photos/id/48/1400/787',
      title: 'Control industrial unificado',
      subtitle: 'Monitoriza procesos, recambios e incidencias desde un solo panel.',
    },
    {
      imageUrl: 'https://picsum.photos/id/180/1400/787',
      title: 'Datos en tiempo real',
      subtitle: 'Integración con SCADA y alertas para tu planta.',
    },
    {
      imageUrl: 'https://picsum.photos/id/28/1400/787',
      title: 'Soporte y documentación',
      subtitle: 'Resuelve dudas con FAQs y guías pensadas para operarios.',
    },
  ];

  slideIndex = 0;

  prevSlide(): void {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
}
