import { pedirEleccion, pedirNumeros } from "./modules/interaccion.js";
import {
  sumar,
  restar,
  multiplicar,
  dividir,
  divisionCero,
} from "./modules/operaciones.js";
import {mostrarMenu} from "./modules/menus.js";


//main
let menu = 0;
do {
  mostrarMenu();
  menu = pedirEleccion();
  switch (menu) {
    case 1:
    case 2:
    case 3:
    case 4:
      let nums = pedirNumeros();
      if (nums !== null) {
        switch (menu) {
          case 1:
            console.log("El resultado de la suma es: ", sumar(nums));
            break;
          case 2:
            console.log("El resultado de la resta es: ", restar(nums));
            break;
          case 3:
            console.log("El resultado de la multiplicación es: ", multiplicar(nums));
            break;
          case 4:
            if (divisionCero(nums)) {
              break;
            }
            console.log("El resultado de la división es: ", dividir(nums));
            break;
        }
      }
      break;
    case 5:
      console.log("Cerrando...");
      break;
    default:
      console.error("¡Opción no válida!");
      break;
  }
} while (menu !== 5);
//hecho :V :)
