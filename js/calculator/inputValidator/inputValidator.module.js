export function inputValidator() {
    const flatSquare = document.getElementById("square").value;
    const flatCost = document.getElementById("cost-dollar").value;

   if (Number(flatSquare) <=0 || flatSquare === "") {
       alert("Введите коректную площадь квартиры");
       return false;
   } else if (Number(flatCost) <= 0 || flatCost === "") {
       alert("Пожалуйста, введите корректное значение для стоимости квартиры.")
       return false;
   } else {
       return true;
   }

}