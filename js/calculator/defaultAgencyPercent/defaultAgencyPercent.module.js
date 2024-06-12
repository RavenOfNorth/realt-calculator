export function defaultAgencyPercent(baseCost) {
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
}