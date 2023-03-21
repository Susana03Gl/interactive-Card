/* Form Data: es un objeto que permite capturar los valores de un formulario
para hacer cierta peticion*
para anclar el formulario html a js qse hace un evento sutmit 
y se crea una objeto  FormData  y este lleva como parametro el formulario que hicimos 
en Html el cual obtuvimos mediante document .queryselecto()
Los elemetos input llevan name=""
para usar el fromdata el imput debe llevar un name, el name le especifica al from data 
cual es el imput que se esta utilizando
para capturar el contenido ingresado a algunos de los imput
se obtine con formData.get("email")... email es el contenido del name en html

values  es un iterador..es un metodo que permite recorrer los elementos de algo 
 a este values hay que meterlo entro de un array
 values recorrra  los imput de form data y este se encierra dentro
 um narray para entoces al final obtener un array con los imput que contiene 
 form data 
 console.log([...formData.values()])  ( ... restoperator investigar)
 
 keys ... keys devuelve los name de cada uno de los imputs...
 
 console.log([...formData.keys()])*
 
 Entries... devuelve un array de arrays .. estos arrays tendran dentro 
 el name y el contenido  ingresado de cada imput
 
 console.log([...formData.entries()])
 pero para hacer el codigo mas legible hacemos esto
 Object.fromEntries([formData.entries()])
 esto nos devolvera un objeto clave es el name y valor es el contenido ingresado/

 DESTRUCTURAR UN OBJETO INVESTIGAR 
 throw pa;abra reservada que lanza un error , manda el mensa
 !item= si el valor de algun  del elemento es falsy 
 tets verifica si cierto elemento cumple con cierta expresion regular 
 y devuelve un booleano 
 si cumple se ejecuta cierta cosa y si no cumple 
 !exprecionregular.test(email)) si emael no cumple con dicha expresion regular 
 ultimo alert mensaje si todos las validaciones se cumplieron */

 const FORM= document.getElementById("form");
 const cardnumber=document.querySelector(".cardnumber"),
 cardname=document.querySelector(".nametarget"),
 carddate=document.querySelector(".date");

 const expname =/^[a-z A-Z]*\s[a-z A-Z]*$/,
 expnum=/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,
 expmonth=/^[01-12]{2}$/,
 expyear=/^[00-99]{2}$/,
 expcvc=/^[0-9]{3}$/,
 errores={
    nombre:{
        code:400,
        message:"Ingrese su nombre y apellido"
    },
    number:{
        code:400,
        message:"El Card number es invalido"
    },
    cvc:{
        code:400,
        message:"CVC invalido"
    },
    mm:{
        code:400,
        message:"Mes Invalido"
    },
    yy:{
        code:400,
        message:"Año invalido"
    },
    inputs:{
        code:400,
        message:"No pueden haber elementos vacios"
    }
 };
 FORM.addEventListener("submit",(e)=>{
    try{
        e.preventDefault();
        const formData=new FormData(FORM),
        name=formData.get("name"),
        number=formData.get("number"),
        date=formData.get("date"),
        mmyy=formData.get("mmyy"),
        cvc=formData.get("cvc");
        const inputs=[name,number,date,mmyy,cvc].some((el)=>!el);

        if(inputs){
            throw errores["inputs"]
        }
        if(!expname.test(name)){
            throw errores["nombre"]
        }
        if(!expnum.test(number)){
            throw errores["number"]
        }
        
        if(!expmonth.test(date) ){
           throw errores["mm"]
        }

        if( !expyear.test(mmyy)){
           throw errores["yy"]
        }
        if( !expcvc.test(cvc)){
            throw errores["cvc"]
         }
      alert("Datos ingresados con Exito")
      cardnumber.innerHTML=number;
      cardname.innerHTML=name.toUpperCase();
      carddate.innerHTML=`${date}/${mmyy}`
     console.log(`datos ${name} ${number} ${date}`)

              
    }
    catch(error){
        alert(error.message)
        console.log(error)
    }
 });
 


