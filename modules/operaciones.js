function sumar(nums){
    return nums.reduce((acc, num) => acc + num, 0);
}
function restar(nums){
    return nums.reduce((acc, num) => acc - num);
}
function multiplicar(nums){
    return nums.reduce((acc, num) => acc * num, 1);
}
function dividir(nums){
    return nums.reduce((acc, num) => acc / num);
}
function divisionCero(nums){
    if(nums.slice(1).some(num => num === 0)){
        console.error("Error: No se puede dividir por cero.");
        return true;
    }
}

export {sumar, dividir, multiplicar, restar, divisionCero};