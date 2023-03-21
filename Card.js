 const FORM= document.getElementById("form");
 const cardnumber=document.querySelector(".cardnumber"),
 cardname=document.querySelector(".nametarget"),
 cardcvc=document.querySelector(".cardcvc")
 carddate=document.querySelector(".date");

 const expname =/^[a-z A-Z]*\s[a-z A-Z]*$/,
 expnum=/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,
 expmonth=/^[01 02 03 04 05 06 07 08 09 10 11 12]{2}$/,
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
      carddate.innerHTML=`${date}/${mmyy}`;
      cardcvc.innerHTML=cvc
     console.log(`datos ${name} ${number} ${date}`)     
    }
    catch(error){
        alert(error.message)
        console.log(error)
    }
 });
 


