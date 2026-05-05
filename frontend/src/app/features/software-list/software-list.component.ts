import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../../services/software.service';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {

  softwareList: any[] = [];

  constructor(private softwareService: SoftwareService) {}

  ngOnInit(): void {
    this.loadSoftware();
  }

  loadSoftware() {
    this.softwareService.getAll().subscribe((res: any) => {

      this.softwareList = res.data.map((item: any, index: number) => {
        
        // Asignar imagen según el orden o ID
        let imagen = '';

        if (index === 0) imagen = 'assets/img/imagen1.jpg';
        if (index === 1) imagen = 'assets/img/imagen2.jpg';
        if (index === 2) imagen = 'assets/img/imagen3.jpg';

        return {
          ...item,
          imagen
        };
      });

    });
  }
}
