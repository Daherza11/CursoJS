class Libro{
    constructor(titulo, autor, año, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;

        this.informacion = `El libro es "${this.titulo}", escrito por ${this.autor} en el año ${this.año} y pertenece al género ${this.genero}`
    }

    getAuthor(){
        return this.autor;
    }

    info(){
        return this.informacion;
    }

    getGender(){
        return this.genero;
    }
}

let libros = [];

while (libros.length<2){
    let titulo = prompt('Introduce el titulo del libro');
    let autor = prompt('Introduce el autor');
    let año = prompt('Introduce el año');
    let genero = prompt('Introduce el género').toLowerCase();

    if(titulo!='' && autor!='' && !isNaN(año) && año.length==4 && (genero=='aventura'||genero=='terror'||genero=='fantasia')){

        libros.push(new Libro(titulo, autor, año, genero));
    }
}

const verLibros=()=>{ //Forma nueva
    console.log(libros);
}

function verLibros2(){ //Forma vieja
    return console.log(libros);
}

const verAutores=()=>{
    let autores = []

    for(const libro of libros){
        autores.push(libro.getAuthor());
    }

    console.log(autores.sort());
}

function verAutores2(){
    let autores = []

    for(const libro of libros){
        autores.push(libro.getAuthor());
    }

    return console.log(autores.sort());
}

const verGeneros=()=>{
    const genero = prompt('Introduce el género a buscar')

    for(const libro of libros){
        if(libro.getGender()==genero){
            console.log(libro.info())
        }
    }
}

verLibros2();
verAutores2();
// verGeneros();