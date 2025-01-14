export function inputValidator() {
    const flatCost = document.getElementById("cost-dollar").value;

   if  (Number(flatCost) <= 0 || flatCost === "") {
       alert("Пожалуйста, введите корректное значение для стоимости квартиры.")
       return false;
   } else {
       return true;
   }

}