import {getUsdExchangeRate} from "./CurrencyParser/CurrencyParser.module.js";

export function parser() {
    document.addEventListener("DOMContentLoaded", async () => {
        const exchangeRateInput = document.getElementById("nbrb-dollar");
        const exchangeRate = await getUsdExchangeRate();
        if (exchangeRate !== null) {
            exchangeRateInput.value = exchangeRate;
        } else {
            exchangeRateInput.value = "Error";
        }
    });
}