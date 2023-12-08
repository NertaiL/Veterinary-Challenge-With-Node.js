import {register,readLogs} from "./operations.js"

const [ifTheProcess,id,animalName,age,typeOfAnimal,animalColor,disease] = process.argv.slice(2) /* aqui ordenamos al momento de agregar los argumentos en la terminal y el [2] basicamente es porque el primer elemento es la ruta ejecutable de node.js que seria el indice [0] y el indice [1] seria el segundo elemento que seria el path = ruta del script que se esta ejecutando y bueno de partir del indice [2] vienen los argumentos.*/

if (ifTheProcess === "register"){
    register(id,animalName,age,typeOfAnimal,animalColor,disease)
}

if (ifTheProcess === "readLogs"){
    readLogs()
}

/* if (ifTheProcess === update){
    update(id,animalName,age,typeOfAnimal,animalColor,disease)
}

if (ifTheProcess === deleteIt){
    deleteIt(id)
} */