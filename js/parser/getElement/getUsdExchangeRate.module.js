export function getUsdExchangeRate() {
    return fetch("https://www.nbrb.by/api/exrates/rates/USD?parammode=2")
        .then(response => response.json())
        .then(data => data.Cur_OfficialRate)
        .catch(error => {
            console.error("Error fetching exchange rate:", error);
            return null;
        });
}

