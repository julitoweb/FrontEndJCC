export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    password: String;
    img: String;

    constructor(nombre:String,apellido:String,password:String,img:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.img = img;
    }
}
