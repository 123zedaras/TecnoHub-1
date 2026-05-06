import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../services/software.service';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {

  softwareList: any[] = [];
  search: string = '';
  loading: boolean = false;

  constructor(private softwareService: SoftwareService) {}

  ngOnInit(): void {
    this.loadSoftware();
  }

  loadSoftware(): void {
    this.loading = true;

    this.softwareService.getAll(this.search).subscribe({
      next: (response) => {
        this.softwareList = response.data.map((item: any) => ({
          ...item,
          imagen: this.getImageFor(item)
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando software:', err);
        this.loading = false;
      }
    });
  }

  getImageFor(item: any): string {
    switch (item.nombre.toLowerCase()) {
      case 'scada pro':
        return 'assets/software/scada.png';
      case 'editor pro':
        return 'assets/software/editor.png';
      case 'monitor x':
        return 'assets/software/monitor.png';
      default:
        return 'assets/software/default.png';
    }
  }
}
