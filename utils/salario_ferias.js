import { calcularImpostoRenda } from "./imposto_renda.js";
import { calcularINSS } from "./inss.js";

export function calcularFerias(salario_bruto) {

    var valor_ferias = salario_bruto + (salario_bruto / 3);
    var feriasLiquidas = valor_ferias - calcularINSS(salario_bruto) - calcularImpostoRenda(salario_bruto);
    return feriasLiquidas;
}


