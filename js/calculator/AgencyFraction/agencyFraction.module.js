export function getAgencyFraction(cost, percent, exchangeRate) {
    let bynAgencyFraction = (cost * (percent / 100)).toFixed(2);
    let usdAgencyFraction = (bynAgencyFraction / exchangeRate).toFixed(2);

    return parseFloat(usdAgencyFraction);
}