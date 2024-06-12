const calculatorBtn = document.getElementById("calculator-btn"); // Кнопка

function App () {
    // Получаем исходные данные для расчётов:
    const flatSquare = Number(document.getElementById("square").value); // Площадь квартиры
    const flatCost = Number(document.getElementById("cost-dollar").value); // Стоимость квартиры в $
    const exchangeRate = Number(document.getElementById("nbrb-dollar").value); // Курс доллара по НБ РБ


// Инициализируем поля вывода результатов расчётов
    const costForMeter = document.getElementById("adr-cost");
    const transactionFee = document.getElementById("transaction-fee");
    const agencyFraction = document.getElementById("agency-fraction");
    const agentFraction = document.getElementById("agent-fraction");
    const sellerFraction = document.getElementById("seller-fraction");

    // Базовая величина в белорусских рублях
    const base = 40;

    // Блок расчётов
    let bynFlatCost = flatCost * exchangeRate
    let baseFlatCost = Math.floor(((flatCost * exchangeRate) / base));
    let costPerSquareMeter = (flatCost / flatSquare).toFixed(2);
    let agencyPercent = defaultAgencyPercent(baseFlatCost);
    let agencyFractionValue = getAgencyFraction(bynFlatCost, agencyPercent, exchangeRate);
    let agentFractionValue = (agencyFractionValue / 2).toFixed(2);
    let sellerFractionValue = flatCost - agencyFractionValue;

    // Вывод
    costForMeter.textContent = costPerSquareMeter;
    transactionFee.textContent = agencyPercent.toFixed(2);
    agencyFraction.textContent = String(agencyFractionValue);
    agentFraction.textContent = agentFractionValue;
    sellerFraction.textContent = sellerFractionValue.toFixed(2);
}

function defaultAgencyPercent(baseCost) {
    let percent = 0;
    if (baseCost <= 4200) {
        percent = 3.0;
    } else if (baseCost > 4200 && baseCost <= 5000) {
        percent = 2.5;
    } else if (baseCost > 5000 && baseCost <= 5800) {
        percent = 2.4;
    } else if (baseCost > 5800 && baseCost <= 6600) {
        percent = 2.3;
    } else if (baseCost > 6600 && baseCost <= 7500) {
        percent = 2.2;
    } else if (baseCost > 7500 && baseCost <= 8300) {
        percent = 2.1;
    } else if (baseCost > 8300 && baseCost <= 9100) {
        percent = 2.0;
    } else if (baseCost > 9100 && baseCost <= 10000) {
        percent = 1.9;
    } else if (baseCost > 10000 && baseCost <= 10500) {
        percent = 1.8;
    } else if (baseCost > 10500 && baseCost <= 11600) {
        percent = 1.7;
    } else if (baseCost > 11600 && baseCost <= 12400) {
        percent = 1.6;
    } else if (baseCost > 12400 && baseCost <= 13200) {
        percent = 1.5;
    } else if (baseCost > 13200 && baseCost <= 14000) {
        percent = 1.4;
    } else if (baseCost > 14000 && baseCost <= 14900) {
        percent = 1.3;
    } else if (baseCost > 14900 && baseCost <= 15700) {
        percent = 1.2;
    } else if (baseCost > 15700 && baseCost <= 16500) {
        percent = 1.1;
    } else if (baseCost > 16500) {
        percent = 1.0;
    }
    return percent;
};

function getAgencyFraction(cost, percent, exchangeRate) {
    let bynAgencyFraction = (cost * (percent / 100)).toFixed(2);
    let usdAgencyFraction = (bynAgencyFraction / exchangeRate).toFixed(2);


    return parseFloat(usdAgencyFraction);
}

calculatorBtn.addEventListener("click", App);