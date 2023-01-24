export class Educacion {
    id?: number;
    titulo: string;
    contenido: string;
    imagenUrl: string;

    constructor(nombreE: string, descripcionE: string, imagen: string) {
        this.titulo = nombreE;
        this.contenido = descripcionE;
        this.imagenUrl = imagen;
    }
}
