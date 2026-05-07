import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../../shared/models/product.model';
import { SoftwareItem } from '../../core/services/software.service';

export interface PublicSlide {
  imageUrl: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss'],
})
export class PublicHomeComponent implements OnInit {
  @ViewChild('productTrack') productTrack!: ElementRef<HTMLElement>;
  @ViewChild('softwareTrack') softwareTrack!: ElementRef<HTMLElement>;

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

  products: Product[] = [];
  softwareList: SoftwareItem[] = [];
  loadingProducts = true;
  loadingSoftware = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ data: Product[] }>(`${environment.apiUrl}/public/products`).subscribe({
      next: (res) => { this.products = res.data; this.loadingProducts = false; },
      error: () => { this.loadingProducts = false; },
    });

    this.http.get<{ data: SoftwareItem[] }>(`${environment.apiUrl}/public/software`).subscribe({
      next: (res) => { this.softwareList = res.data; this.loadingSoftware = false; },
      error: () => { this.loadingSoftware = false; },
    });
  }

  prevSlide(): void {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }

  scrollProducts(dir: 1 | -1): void {
    this.productTrack?.nativeElement.scrollBy({ left: dir * 320, behavior: 'smooth' });
  }

  scrollSoftware(dir: 1 | -1): void {
    this.softwareTrack?.nativeElement.scrollBy({ left: dir * 320, behavior: 'smooth' });
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}
