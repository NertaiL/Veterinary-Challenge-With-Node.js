import { writeFileSync ,readFileSync,  } from "fs"
import { v4 as uuid } from "uuid";
/*NO TOMAR EN CUENTA import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: ,
      pass: ,
    },
  }); */


const register = (animalName,age,typeOfAnimal,animalColor,disease) =>{
    const citas = JSON.parse(readFileSync('citas.json','utf8'))
    const id = uuid() /* el uuid de la libreria nos genera un identificador unico automatico que son de 36 caracteres en total, la cual estan compuesta por 4 guiones que se utilizan como separador */

    if(!animalName){
        console.log("Enter your name of the animal🤷‍♀️")
        return;
    }else if(!age){
        console.log("Enter age please")
        return;
    }else if(!typeOfAnimal){
        console.log("Enter the type of animal please")
        return;
    }else if(!animalColor){
        console.log("Enter animal color please")
        return;
    }else if(!disease){
        console.log("Enter disease please")
        return;
    }

    citas.push({id,animalName,age,typeOfAnimal,animalColor,disease})
    writeFileSync("citas.json", JSON.stringify(citas))
   /*  console.log(citas);  es para ver en la terminal el array de objeto creado*/
    console.log("Successful registration");
}

const readLogs = () =>{
    const citasRead = JSON.parse(readFileSync("citas.json","utf-8"))/* aca estoy leyendo el contenido de citas.json y como citas.json es string entonces tengo que pasarlo a objeto y para eso aplico el parse , para luego aplicar el console.log y me lo muestre como objeto  */
    console.log(citasRead)/* entonces en la terminal al hacer node index.js readLogs se estaria leyendo lo que tengo en mi archivo citas.json pero en objeto no en string yaque por eso se hiso la transformacion JSON.parse  */
}

export {register,readLogs};


/* se utilizo la version v18.18.0 utilizando el gestor de versiones nvm y tambien haciendo uso de la libreria uuid y tmabien el type : module para las importaciones y exp*/