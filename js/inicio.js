
// registrarse
class usuario{
    constructor(usuario,contraseña) {
    this.usuario=usuario;
    this.contraseña=contraseña;
}
}
let listaDeUsuarios=[];

registrar.addEventListener('click', ()=>{
    //let usuario1= document.getElementById('usuario').value; ESTA PARTE FUNCIONABA IGUAL, PERO LO DE ABAJO ES MAS OPTIMO
    //let contraseña= document.getElementById('contraseña').value;      ERA HACER UN PASO DE MAS.
    let persona = new usuario((nombre).value, (contraseña).value)
    listaDeUsuarios.push(persona)
    console.log(listaDeUsuarios)
})
// fin de registro

ingresar.addEventListener('click', ()=>{
    let usuarioIngreso= document.getElementById('usuarioIngreso').value;
    let contraseñaIngreso= document.getElementById('contraseñaIngreso').value;
    listaDeUsuarios.forEach(usuario => {
        if ((usuarioIngreso===(usuario).usuario) &&(contraseñaIngreso===(usuario).contraseña))
            console.log("bienvenido");
        else 
            console.log("usuairon no registreado");
        
    });
})