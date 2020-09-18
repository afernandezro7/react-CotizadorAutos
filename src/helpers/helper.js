// obtenr diferencia de años
export const obtenerDiferenciaYear = (year) => {
   return new Date().getFullYear() - year;
}

// calcula total a pagar segun la marca 
export const calcularMarca = (marca) => {
   let incremento; 

   switch (marca) {
      case 'americano':
         incremento = 1.15
         break;
      case 'europeo':
         incremento = 1.30
         break;
   
      default:
         incremento = 1.05
         break;
   }

   return incremento;
}

// calcula tipo de seguro
export const calcularPlan = (plan) => {
   return (plan==='basico') ?  1.2 :  1.5
}

// Muestra la primera letra Mayuscula
export const capitalize= (word) => {
   return word[0].toUpperCase() + word.slice(1);
}
 