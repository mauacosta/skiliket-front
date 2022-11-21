import { Component,  OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { User } from '../../models/user';
interface user {
  firstname: string,
  lastname: string,
  email: string,
  address: string, 
  username: string,
  userType: string, 
  uid: string
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
  public superAdmin: user[] = []
  public neighbors: user[] = []

  ngOnInit(): void {

    //Con este se regresa si no eres admin
    
    this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
      this.userData = data.data()
      console.log(this.userData)
			if(this.userData.userType !== "Superadministrador"){
				window.location.href = "/";
			}
		})
    

    //Con este obtienes todos los usuarios
    const allUsers = this.authService.GetAllUsers().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.usersArr.push(doc.data());
      });

      this.admins = this.usersArr.filter(user => user.userType === "Administrador")
      this.superAdmin = this.usersArr.filter(user => user.userType === "Superadministrador")
      this.neighbors = this.usersArr.filter(user => user.userType === "Vecino")



    });

    //Este lo puedes meter en una función y actualizas tipo de usuario
    /*
    console.log(this.usersArr)
    this.authService.serUserType(this.usersArr[0].uid, "Admin")
    */

  }
  onChangeSelect(user: string, useruid:string,event: any): void{
    if(confirm("Estás a punto de cambiar el role del usuario "+user+" a "+event.target.value+" ¿Estás seguro de querer continuar?")){
      this.authService.serUserType(useruid, event.target.value)
    }else{
      console.log("Cancelar operación")
    }
  }
  onClickDelete(user:string, useruid: string):void{
    console.log("Deleting "+user)
    
    if(confirm("¿Estás seguro de querer eliminar al usuario " + user +"?")){
      console.log("Borrando a " + useruid)
      this.authService.DeleteUserAccount(useruid)
    }
  }
}
