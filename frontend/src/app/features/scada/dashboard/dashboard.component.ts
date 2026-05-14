import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScadaService } from '../../../core/services/scada.service';
import { ScadaDashboardState, ScadaCommand } from '../../../shared/models/scada.model';
import { Subject, interval } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-scada-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ScadaDashboardComponent implements OnInit, OnDestroy {
  dashboardState: ScadaDashboardState | null = null;
  loading = false;
  error: string | null = null;
  lastUpdate: Date | null = null;

  sendingCommand = false;
  commandError: string | null = null;
  lastCommand: ScadaCommand | null = null;

  // --- Timer client-side (v1.1) ---
  // El cronómetro avanza en el cliente cuando O_B2 está activo.
  // El servidor solo sincroniza TIEMPO cuando ocurre un REARME o nuevo ciclo.
  tiempoActual = 0;
  private bomba2Activa = false;
  private ultimoTiempoServidor = -1;

  private destroy$ = new Subject<void>();

  constructor(private scadaService: ScadaService) {}

  ngOnInit(): void {
    this.loadDashboard();
    this.startAutoRefresh();
    this.startClientTimer();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** Carga inicial del dashboard */
  loadDashboard(): void {
    this.loading = true;
    this.error = null;
    this.scadaService.getDashboard()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (state) => {
          this.applyState(state);
          this.lastUpdate = new Date();
          this.loading = false;
        },
        error: () => {
          this.error = 'No se pudo conectar a Node-RED';
          this.loading = false;
        },
      });
  }

  /**
   * Polling cada 2000ms (igual que v1.1).
   * Sincroniza estados del PLC sin interferir con el cronómetro client-side.
   */
  startAutoRefresh(): void {
    interval(2000).pipe(
      takeUntil(this.destroy$),
      switchMap(() => this.scadaService.getDashboard())
    ).subscribe({
      next: (state) => {
        this.applyState(state);
        this.lastUpdate = new Date();
        this.error = null;
      },
      error: () => {
        this.error = 'Conexión perdida con Node-RED';
      },
    });
  }

  /**
   * Cronómetro client-side: avanza cada segundo si bomba2 está activa.
   * El servidor resetea el tiempo vía REARME (envía TIEMPO diferente al anterior).
   */
  startClientTimer(): void {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.bomba2Activa) {
        this.tiempoActual++;
      }
    });
  }

  /**
   * Aplica estado recibido del servidor.
   * Detecta cambio de TIEMPO del servidor para sincronizar el contador local (REARME).
   */
  private applyState(state: ScadaDashboardState): void {
    this.dashboardState = state;
    this.bomba2Activa = this.isActive(state.O_B2);

    const tiempoServidor = parseInt(String(state.TIEMPO ?? 0), 10);
    if (!isNaN(tiempoServidor) && tiempoServidor !== this.ultimoTiempoServidor) {
      this.tiempoActual = tiempoServidor;
      this.ultimoTiempoServidor = tiempoServidor;
    }
  }

  /** Formatea el tiempo en MM:SS */
  get tiempoDisplay(): string {
    const min = Math.floor(this.tiempoActual / 60).toString().padStart(2, '0');
    const seg = (this.tiempoActual % 60).toString().padStart(2, '0');
    return `${min}:${seg}`;
  }

  // Comandos (alineados con tags de v1.1)

  private send(tag: string, valor: boolean | number): void {
    this.sendingCommand = true;
    this.commandError = null;
    this.scadaService.enviarComando(tag, valor)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => { this.lastCommand = res.data; this.sendingCommand = false; },
        error: (err) => {
          this.commandError = err?.error?.error ?? 'Error al enviar comando';
          this.sendingCommand = false;
        },
      });
  }

  modoAuto():             void { this.send('Auto', true); }
  emergencia():           void { this.send('PE', true); }
  abrirValvula():         void { this.send('Abrir_Val', true); }
  cerrarValvula():        void { this.send('Cerrar_Val', true); }
  rearmeOn():             void { this.send('REARME', true); }
  rearmeOff():            void { this.send('REARME', false); }
  lamparaOn():            void { this.send('ON_LAMP', true); }
  lamparaOff():           void { this.send('OFF_LAMP', true); }
  marcha():               void { this.send('Marcha_B', true); }
  paro():                 void { this.send('Paro_B', true); }

  // Helpers

  /** Normaliza distintos formatos booleanos que puede enviar Node-RED */
  isActive(val: boolean | number | string | undefined): boolean {
    return val === true || val === 1 || val === 'true' || val === '1';
  }

  getEstadoTexto(val: any): string  { return this.isActive(val) ? 'ACTIVO' : 'INACTIVO'; }
  getEstadoClase(val: any): string  { return this.isActive(val) ? 'estado-activo' : 'estado-inactivo'; }
}
