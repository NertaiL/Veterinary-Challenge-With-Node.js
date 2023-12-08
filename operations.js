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
    const id = uuid()

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
    const citasRead = JSON.parse(readFileSync("citas.json","utf-8"))
    console.log(citasRead)
}

export {register,readLogs};


/* se utilizo la version v18.18.0 utilizando el gestor de versiones nvm y tambien haciendo uso de la libreria uuid y tmabien el type : module para las importaciones y exp*/