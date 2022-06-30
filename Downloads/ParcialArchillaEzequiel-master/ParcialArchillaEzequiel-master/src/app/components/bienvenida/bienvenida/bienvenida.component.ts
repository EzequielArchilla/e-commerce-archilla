import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})
export class BienvenidaComponent implements OnInit {
  data: any = '';

  constructor(private apiService: ApiService) {
    this.apiService.ObtenerGitHub().subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit(): void {}
}
