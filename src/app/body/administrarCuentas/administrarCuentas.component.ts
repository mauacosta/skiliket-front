import { Component,  OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
interface user {
  name: String,
  email: String,
  address: String, 
  username: String,
  perfil: String
}

@Component({
  selector: 'app-administrar-cuentas',
  templateUrl: './administrarCuentas.component.html',
  styleUrls: ['./administrarCuentas.component.css']
})




export class AdministarCuentasComponent implements OnInit {

  constructor(public authService: AuthService) { }

  user: User = JSON.parse(localStorage.getItem('user')!);
	userData: any;

  usersArr: any[] = [];
  
  public admins: user[] = []
  public toConfirm: user[] = []
  public neighbors: user[] = []

  ngOnInit(): void {

    //Con este se regresa si no eres admin
    /*
    this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			if(this.userData.userType !== "Admin"){
				window.location.href = "/";
			}
		})
    */

    //Con este obtienes todos los usuarios
    const allUsers = this.authService.GetAllUsers().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.usersArr.push(doc.data());

        //Con este editas un usuario especifico
        

      });
    });


    //Este lo puedes meter en una función y actualizas tipo de usuario
    /*
    console.log(this.usersArr)
    this.authService.serUserType(this.usersArr[0].uid, "Admin")
    */

    

        


    this.admins = [
      {name: 'Georgina  Gamez', email: 'gina101131@hotmail.com', address: 'calle chida', username:'gijidoasfip', perfil:'administrador'},
      {name: 'Georgina  Gamez 2', email: 'gina10121@hotmail.com', address: 'calle chida2', username:'gijidoasfip', perfil:'administrador'},
      {name: 'Georgina  Gamez 3', email: 'gina10101@hotmail.com', address: 'calle chida3', username:'gijidoasfip', perfil:'administrador'},
    ]; //or create an interface instead of using "any" for "strong" typing support
    this.toConfirm = [
      {name: 'Georgina  Sospechoso 1', email: 'gina101131@hotmail.com', address: 'calle chida', username:'gijidoasfip', perfil:'Sin Confirmar'},
      {name: 'Georgina  Sospechoso 2', email: 'gina10121@hotmail.com', address: 'calle chida2', username:'gijidoasfip', perfil:'Sin Confirmar'},
      {name: 'Georgina Sospechoso 3', email: 'gina10101@hotmail.com', address: 'calle chida3', username:'gijidoasfip', perfil:'Sin Confirmar'},
    ];
    this.neighbors = [
    {name: 'Georgina Vecina', email: 'gina101131@hotmail.com', address: 'calle chida', username:'gijidoasfip', perfil:'Vecino'},
    {name: 'Georgina Vecina 2', email: 'gina10121@hotmail.com', address: 'calle chida2', username:'gijidoasfip', perfil:'Vecino'},
    {name: 'Georgina  Vecina 3', email: 'gina10101@hotmail.com', address: 'calle chida3', username:'gijidoasfip', perfil:'Vecino'},
    ];
  }
  onChangeSelect(user: String, event: any): void{
    if(confirm("Estás a punto de cambiar el role del usuario "+user+" a "+event.target.value+" ¿Estás seguro de querer continuar?")){
      console.log("Actualizando a " + user)
    }else{
      console.log("Cancelar operación")
    }
  }
  onClickDelete(user:String):void{
    console.log("Deleting "+user)
    if(confirm("¿Estás seguro de querer eliminar al usuario " + user +"?")){
      console.log("Borrando a " + user)
    }else{
      console.log("Cancelar operación")
    }
  }
}
