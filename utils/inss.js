
export function calcularINSS(salario_bruto) {

    if (salario_bruto <= 1518) {
        var desconto_inss = salario_bruto * 0.075 - 0;
        return desconto_inss;
    } else if (salario_bruto >= 1518.01 && salario_bruto <= 2793.88) {
        var desconto_inss = salario_bruto * 0.09 - 22.77;
        return desconto_inss;
    } else if (salario_bruto >= 2793.89 && salario_bruto <= 4190.83) {
        var desconto_inss = salario_bruto * 0.12 - 106.59;
        return desconto_inss;
    } else if (salario_bruto >= 4190.84 && salario_bruto <= 8157.41) {
        var desconto_inss = salario_bruto * 0.14 - 190.4;
        return desconto_inss;
    } else if (salario_bruto > 8157.41) {
        var desconto_inss = 951.62;
        return desconto_inss
    }

}
