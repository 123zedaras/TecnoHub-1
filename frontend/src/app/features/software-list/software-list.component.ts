import { Component, OnDestroy, OnInit } from '@angular/core';
import { SoftwareItem, SoftwareService } from '../../core/services/software.service';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css'],
})
export class SoftwareListComponent implements OnInit, OnDestroy {
  softwareList: SoftwareItem[] = [];
  loading = true;
  error: string | null = null;

  searchInput = '';
  lastSearchQuery = '';

  private loadSeq = 0;
  private searchDebounceHandle: ReturnType<typeof setTimeout> | null = null;
  private readonly searchDebounceMs = 400;

  constructor(private softwareService: SoftwareService) {}

  ngOnInit(): void {
    this.loadSoftware();
  }

  ngOnDestroy(): void {
    this.cancelSearchDebounce();
  }

  onSearchInput(rawValue: string): void {
    this.searchInput = rawValue;
    this.cancelSearchDebounce();
    this.searchDebounceHandle = setTimeout(() => {
      this.searchDebounceHandle = null;
      const term = rawValue.trim();
      this.loadSoftware(term.length > 0 ? term : undefined);
    }, this.searchDebounceMs);
  }

  flushSearch(): void {
    this.cancelSearchDebounce();
    const term = this.searchInput.trim();
    this.loadSoftware(term.length > 0 ? term : undefined);
  }

  clearSearch(): void {
    this.cancelSearchDebounce();
    this.searchInput = '';
    this.loadSoftware();
  }

  private cancelSearchDebounce(): void {
    if (this.searchDebounceHandle !== null) {
      clearTimeout(this.searchDebounceHandle);
      this.searchDebounceHandle = null;
    }
  }

  loadSoftware(search?: string): void {
    const seq = ++this.loadSeq;
    this.loading = true;
    this.error = null;
    const param = search?.trim() || undefined;

    this.softwareService.getAll(param).subscribe({
      next: (res) => {
        if (seq !== this.loadSeq) return;
        this.softwareList = Array.isArray(res?.data) ? res.data : [];
        this.lastSearchQuery = param ?? '';
        this.loading = false;
      },
      error: (err) => {
        if (seq !== this.loadSeq) return;
        this.softwareList = [];
        this.error =
          err.status === 0
            ? 'No hay conexión con el servidor. Comprueba que la API esté en marcha.'
            : 'No se pudo cargar el catálogo de software. Inténtalo de nuevo.';
        this.loading = false;
      },
    });
  }

  formatPrice(amount: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  }

  estadoLabel(estado: string): string {
    return estado?.toLowerCase() === 'activo' ? 'Disponible' : 'No disponible';
  }

  estadoClass(estado: string): string {
    return estado?.toLowerCase() === 'activo' ? '' : 'out';
  }
}
