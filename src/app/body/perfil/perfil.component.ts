import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  editComponents = false
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  editComponentsProfile(): void{
    this.editComponents=!this.editComponents
  }
  editProfile():void{
    console.log("editando")
  }

}
