import { Component } from '@angular/core';

export interface PublicSlide {
  imageUrl: string;
  title: string;
  subtitle: string;
}
//para el faq
interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
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
      imageUrl: 'https://xolertic.com/wp-content/uploads/2026/02/Soluciones-de-final-de-linea-personalizadas.webp',
      title: 'Soluciones integrales en hardware, software y soporte para industrias',
      subtitle: 'Monitoriza procesos, recambios e incidencias desde un solo panel.',
    },
    {
      imageUrl: 'https://www.energuias.com/wp-content/uploads/2024/04/diseno-modulos-criogenicos.jpg',
      title: 'Monitoreo en tiempo real',
      subtitle: 'Conecta PLC y sensores a nuestra plataforma SCADA. Alertas instantáneas.',
    },
    {
      imageUrl: 'https://logisticaviavel.com/wp-content/uploads/2024/03/image-3-edited.jpeg',
      title: 'Recambios siempre disponibles',
      subtitle: 'Sensores, PLC, drivers y más. Stock industrial listo para envío.',
    },
    {
      imageUrl: 'https://img.freepik.com/foto-gratis/gerente-planta-paneles-solares-muestra-al-ingeniero-como-desarrollar-prototipos_482257-119875.jpg?semt=ais_hybrid&w=740&q=80',
      title: 'Software Y Documentación',
      subtitle: 'HMI, programación PLC y guías exclusivas para tus proyectos. Soporte online 24/7.',
    },
  ];

  slideIndex = 0;
  faqSearch = '';
  openFaqId: number | null = null;

  readonly faqs: FaqItem[] = [
    {
      id: 1,
      category: 'Cuenta y acceso',
      question: '¿Cómo me registro en TECNOHUB?',
      answer:
        'Accede a la página principal y haz clic en "Registrarse". Completa tus datos empresariales (nombre, email, sector industrial). Verifica tu email para activar la cuenta y acceder a compras y SCADA.',
    },
    {
      id: 2,
      category: 'Cuenta y acceso',
      question: '¿Puedo recuperar mi contraseña?',
      answer:
        'Usa "Olvidé mi contraseña" en el login. Ingresa tu email y sigue el enlace de reset. Si persiste, contacta soporte@technohub.es.',
    },
    {
      id: 3,
      category: 'Compras de Recambios',
      question: '¿Qué recambios puedo comprar (sensores, switches, filtros hidráulicos, PLC)?',
      answer:
        'Tras registrarte, ve a "Recambios". Filtra por categoría (sensores, PLC, etc.). Todos son originales para industrias, con stock en tiempo real y envíos en 24-48h.',
    },
    {
      id: 4,
      category: 'Compras de Recambios',
      question: '¿Cuál es la política de devoluciones?',
      answer:
        'Devoluciones en 14 días si el producto está sin usar. Cubrimos gastos si es error nuestro; tú pagas el retorno otherwise. Procesa en "Mis Pedidos".',
    },
    {
      id: 5,
      category: 'Software Industrial',
      question: '¿Qué software ofrecen para HMI, PLC y SCADA?',
      answer:
        'Diseño/configuración HMI. Programación PLC. Plataforma SCADA para supervisión. Descarga licencias tras compra, compatibles con protocolos como Modbus/OPC.',
    },
    {
      id: 6,
      category: 'Software Industrial',
      question: '¿Cuáles son los requisitos mínimos?',
      answer:
        'Windows 10+, 8GB RAM, conexión estable. Consulta documentación específica por producto en tu área personal.',
    },
    {
      id: 7,
      category: 'Plataforma SCADA',
      question: '¿Cómo monitoreo mis máquinas en tiempo real?',
      answer:
        'Conecta sensores/PLC vía protocolos estándar (Modbus, OPC UA). La interfaz muestra dashboards en vivo con alarmas y datos históricos.',
    },
    {
      id: 8,
      category: 'Plataforma SCADA',
      question: '¿Es segura la plataforma SCADA?',
      answer:
        'Sí, con redes segmentadas, firewalls y autenticación 2FA. Cumple estándares ISA-95 para ciberseguridad industrial.',
    },
    {
      id: 9,
      category: 'Documentación',
      question: '¿Dónde encuentro manuales de productos comprados?',
      answer:
        'En "Mi Documentación", por compra. Incluye PDFs, guías y actualizaciones automáticas.',
    },
    {
      id: 10,
      category: 'Documentación',
      question: '¿Qué hago si tengo un problema técnico?',
      answer:
        'Busca en FAQ primero. Si no, ticket en "Soporte" con detalles del producto.',
    },
  ];

  get filteredFaqs(): FaqItem[] {
    const term = this.faqSearch.trim().toLowerCase();
    if (!term) {
      return this.faqs;
    }

    return this.faqs.filter((faq) =>
      [faq.category, faq.question, faq.answer].some((field) => field.toLowerCase().includes(term))
    );
  }

  onFaqSearch(value: string): void {
    this.faqSearch = value;
  }

  toggleFaq(itemId: number): void {
    this.openFaqId = this.openFaqId === itemId ? null : itemId;
  }

  isFaqOpen(itemId: number): boolean {
    return this.openFaqId === itemId;
  }

  prevSlide(): void {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
}
