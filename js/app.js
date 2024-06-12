import {App} from "./calculator/main.js";
import {parser} from "./parser/parser.js";

const calculatorBtn = document.getElementById("calculator-btn"); // Кнопка

parser();
calculatorBtn.addEventListener("click", App);