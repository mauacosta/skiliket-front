import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user')!);
	userData: any;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {

    this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			this.userData = data.data();
		})

  }

}
