let a = new String("Hola");
console.log(a);

const b = 0;
console.log(b);


const c = new Object();
console.log(c);

/*En un objeto las variables son atributos y las funciones métodos */
const ivan = {
        nombre:"Ivan",
        apellido:"Herrera",
        idiomas:["ingles","frances","aleman"],
        soltero:true,
        contacto:{
                email:"emial",
                facebook:"face",
                movil:"1234567889"
        },
        saludar:function(){
                console.log("Hola");
        }

}

console.log(ivan);
console.log(ivan["nombre"]);
console.log(ivan["apellido"]);

console.log(ivan.nombre);
console.log(ivan.apellido);
