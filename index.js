

function alta() {
    class alumno {
        constructor(nombre, apellido, edad, grupo, materia, estatus) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.grupo = grupo;
            this.materia = materia;
            this.estatus = estatus;
        }
    }

    event.preventDefault();

    var nombreAlta = document.getElementById("nombre").value;
    //console.log(nombreAlta);
    var apellidoAlta = document.getElementById("apellido").value;
    var edadAlta = document.getElementById("edad").value;
    //console.log(edadAlta);
    var grupoAlta = document.getElementById("grupo").value;
    var materiaAlta = document.getElementById("materia").value;
    var estatusAlta = document.getElementById("estatus").value;

    nuevoAlumno = new alumno(nombreAlta, apellidoAlta, edadAlta, grupoAlta, materiaAlta, estatusAlta);
    console.log(nuevoAlumno);
    agregar()
    
}





var baseDeDatos = [];
function agregar() {
    baseDeDatos.push(nuevoAlumno);
    console.log(baseDeDatos);
    document.getElementById("table",).innerHTML += `<tbody><th>` + nuevoAlumno.nombre + `</th><th>` + nuevoAlumno.apellido + 
    `</th><th>` + nuevoAlumno.edad + `</th><th><option>` + nuevoAlumno.grupo + `</option>
   <th><option>`+ nuevoAlumno.materia + `</option></th><th><option>` + nuevoAlumno.estatus + `</option></th></tbody>`;
}


