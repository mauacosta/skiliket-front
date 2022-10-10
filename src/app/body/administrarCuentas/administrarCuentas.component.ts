import { Component,  OnInit } from '@angular/core';
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

  constructor() { }
  public admins: user[] = []
  public toConfirm: user[] = []
  public neightboors: user[] = []

  ngOnInit(): void {
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
    this.neightboors = [
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
