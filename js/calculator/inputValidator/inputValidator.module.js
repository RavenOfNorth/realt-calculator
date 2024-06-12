export function inputValidator() {
    const flatSquare = Number(document.getElementById("square").value);
    const flatCost = Number(document.getElementById("cost-dollar").value);

   if (flatSquare <=0) {
       alert("Введите коректную площадь квартиры");
       return false;
   } else if (flatCost.value <= 0) {
       alert("Пожалуйста, введите корректное значение для стоимости квартиры.")
       return false;
   } else {
       return true;
   }

}