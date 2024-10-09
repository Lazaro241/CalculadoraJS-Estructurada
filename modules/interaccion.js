import promptSync from 'prompt-sync';

const a = promptSync();
function pedirNumeros(){
    let input = (a("Ingrese los numeros de la operacion, separados por coma: "));
    let nums = input.split(",");
    let validos = true;
    for(let i = 0; i<nums.length; i++){
        let num = parseFloat(nums[i].trim());
        if(isNaN(num)){
            validos = false;
            break;
        }
        nums[i] = num;
    }
    if(!validos){
        console.error("Error: Ingrese solo numeros.");
        return null;
    }
    return nums;
}
function pedirEleccion(){
    return parseInt(a("Opcion: "), 10);
}

export {pedirEleccion, pedirNumeros}
