export function calcularImpostoRenda(salario_bruto) {

    if (salario_bruto <= 2428.8) {
        var desconto_ir = 0;
        return desconto_ir;
    } else if (salario_bruto >= 2428.81 && salario_bruto <= 2826.65) {
        var desconto_ir = salario_bruto * 0.075 - 182.16;
        return desconto_ir;
    } else if (salario_bruto >= 2826.66 && salario_bruto <= 3751.05) {
        var desconto_ir = salario_bruto * 0.15 - 394.16;
        return desconto_ir;
    } else if (salario_bruto >= 3751.06 && salario_bruto <= 4664.68) {
        var desconto_ir = salario_bruto * 0.225 - 675.49;
        return desconto_ir;
    } else if (salario_bruto > 4664.68) {
        var desconto_ir = salario_bruto * 0.275 - 908.73;
        return desconto_ir
    }
}