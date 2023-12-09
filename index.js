import {register,readLogs} from "./operations.js"
/* aca se especifica todo osea ifTheProcess seria como el que identifica si es register o readLogs y al momento de identificarlo se reemplaza y el id se ingres automaticamente sin tener que llamarlo en la terminal*/
const [ifTheProcess,id,animalName,age,typeOfAnimal,animalColor,disease] = process.argv.slice(2) /* aqui ordenamos al momento de agregar los argumentos en la terminal y el [2] basicamente es porque el primer elemento es la ruta ejecutable de node.js que seria el indice [0] y el indice [1] seria el segundo elemento que seria el path = ruta del script que se esta ejecutando y bueno de partir del indice [2] vienen los argumentos.*/

if (ifTheProcess === "register"){/* Aqui el ifTheProcess significa que yo al momento cuando este en la terminal y vaya a ejecutra el script  (node index.js register arg2 arg3 etc..) osea iftheprocess ocupa ese puesto despues de index.js osea si es register se va a cumplir la condicion y sera register === "register" entonces se cumple */
    register(id,animalName,age,typeOfAnimal,animalColor,disease)
}

if (ifTheProcess === "readLogs"){ /* la misma explicacion de arriba, si node index.js si la palabra que viene ahora es readLog se ejecutaria la condicion osea seria asi node index.js readLogs, osea antes de poner readlog seria ifTheProcess entonces al identificar cual ocupar se remplazaria el ifTheProcess y se ejecutaria la condicion especifica */
    readLogs()
}

/* if (ifTheProcess === update){
    update(id,animalName,age,typeOfAnimal,animalColor,disease)
}

if (ifTheProcess === deleteIt){
    deleteIt(id)
} */