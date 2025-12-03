import { calcularImpostoRenda } from "./imposto_renda";
import { calcularINSS } from "./inss";

export function calcularSalarioLiquido(salario_bruto) {
    salarioLiquido = salario_bruto - calcularINSS(salario_bruto) - calcularImpostoRenda(salario_bruto)
    return salarioLiquido;
}