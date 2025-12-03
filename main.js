const readline = require("readline-sync");
const { calcularImpostoRenda } = require("./utils/imposto_renda");
const { calcularINSS } = require("./utils/inss");
const { calcularFGTS } = require("./utils/fgts");
const { calcularFerias } = require("./utils/salario_ferias");

var empresa = {
    nome: "",
    razao_social: "",
    cnpj: "",
    inscricao_estadual: "",
    areas_atuacao: [""],
    meta_anual: [0],
    dataFundacao: "",
    endereco: {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
    },
    contato: {
        telefone: "",
        email: "",
        site: "",
    },
    funcionarios: [],
}

var opcao = 1;
while (opcao !== 0) {
    exibirMenu();

    opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {
        informaSobreSoftware();
    } else if (opcao === 2) {
        calculaSalarioLiquido();
    } else if (opcao === 3) {
        editaDadosBasicosEmpresa();
    } else if (opcao === 4) {
        editaEnderecoEmpresa();
    } else if (opcao === 5) {
        editaDadosContatoEmpresa();
    } else if (opcao === 6) {
        editaMetaAnual();
    } else if (opcao === 7) {
        editaDadosAreaAtuacao();
    } else if (opcao === 8) {
        exibeInformacoesEmpresa();
    } else if (opcao === 9) {
        cadastraFuncionario();
    } else if (opcao === 10) {
        exibeQuadroFuncionarios();
    } else if (opcao === 11) {
        exibeFolhaPagamento();
    } else if (opcao === 0) {
        console.log("Encerrando o sistema...");
    } else {
        console.log("Opção invalida! Tente novamente.");
    }
    console.log("\n");
}

function exibirMenu() {

    console.log("===========================================");
    console.log("       SISTEMA DE GESTAO EMPRESARIAL       ");
    console.log("===========================================");
    console.log("\n             Menu Principal");
    console.log("\n1 - Informações do Software");
    console.log("2 - Calculadora de Salario Liquido");
    console.log("3 - Editar Dados Basicos da Empresa");
    console.log("4 - Editar Endereco da Empresa");
    console.log("5 - Editar Dados de Contato");
    console.log("6 - Editar Meta Anual");
    console.log("7 - Editar Areas de Atuacao");
    console.log("8 - Exibir Informacoes da Empresa");
    console.log("9 - Cadastrar Novo Funcionario");
    console.log("10 - Exibir Quadro de Funcionarios");
    console.log("11 - Exibir Folha de Pagamento");
    console.log("0 - Sair");
    console.log("\n===========================================\n");
}

function informaSobreSoftware() {
    console.log("\n===========================================");
    console.log("     🏦 SISTEMA DE GESTAO EMPRESARIAL 🏦     ");
    console.log("===========================================");

    console.log("\nAUTOR: JAVAN GIRARDI");
    console.log("\nDESCRICAO:");
    console.log("Sistema para gerenciamento de empresas. \nRealiza o controle dos dados cadastrais e faz calculos trabalhistas, \ncomo FGTS, INSS e ferias.");

    console.log("\n===========================================");
    console.log("           🛠️  FUNCIONALIDADES 🛠️               ");
    console.log("===========================================");

    console.log("\n💻 INFORMACOES DO SOFTWARE: \n >Exibe detalhes sobre o sistema");
    console.log("\n🧮 CALCULADORA DE SALARIO LIQUIDO: \n >Calcula INSS, IRPF e Salario Liquido\n >Fornece demostrativo completo dos descontos");
    console.log("\n✏️  EDITAR DADOS BASICOS DA EMPRESA\n >Nome, Razao Social, CNPJ\n >Inscricao Estadual, Data de Fundacao");
    console.log("\n📍 EDITAR ENDERECO DA EMPRESA\n >Logradouro, Numero, Complemento\n >Bairro, Cidade, Estado, CEP");
    console.log("\n☎️  EDITAR DADOS DE CONTATO\n >Telefone, E-mail, Endereco Eletronico");
    console.log("\n🎯 EDITAR META ANUAL\n >Define metas mensais (12 meses)\n >Acompanhamento financeiro anual");
    console.log("\n🧩 EDITAR AREAS DE ATUACAO\n >Cadastra ate quatro areas de atuacao");
    console.log("\n🏢 EXIBIR INFORMACOES DA EMPRESA\n >Exibe os dados cadastrais da empresa, Areas de Atuacao,\n >Exibe as metas mensais e anuais, Endereco e Contatos");
    console.log("\n👤 CADASTRAR NOVO FUNCIONARIO\n >Cadastra Nome, CPF, Genero, Estado Civil, Idade e Salario Bruto");
    console.log("\n👥 EXIBIR QUADRO DE FUNCIONARIOS\n >Exibe a quantidade e lista todos os funcionarios");
    console.log("\n📑 EXIBIR FOLHA DE PAGAMENTO\n >Exibe folha de pagamento completa dos funcionarios");
    console.log("\n❌ SAIR DO SISTEMA\n >Encerra o Sistema\n");
}

function calculaSalarioLiquido() {

    console.log("\n===========================================");
    console.log("     🧮 CALCULADORA DE SALARIO LIQUIDO 🧮     ");
    console.log("===========================================\n");

    var salario_bruto = readline.questionFloat("Digite o salario bruto: R$ ");

    console.log("\n===========================================");
    console.log("      🤑 DEMONSTRATIVO DE PAGAMENTO 🤑     ");
    console.log("===========================================\n");

    var descontoINSS = calcularINSS(salario_bruto);
    var descontoIR = calcularImpostoRenda(salario_bruto);
    var valorFGTS = calcularFGTS(salario_bruto);
    var salario_liquido = salario_bruto - descontoINSS - descontoIR;

    console.log(`Salario Bruto:     R$ ${salario_bruto.toFixed(2)}`);
    console.log(`Desconto INSS:     R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Desconto IRRF:     R$ ${descontoIR.toFixed(2)}`);
    console.log(`Desconto FGTS:     R$ ${valorFGTS.toFixed(2)}`)
    console.log("-------------------------------------------");
    console.log(`Salário Liquido:   R$ ${salario_liquido.toFixed(2)}\n`);

    console.log("\n===========================================");
    console.log("         🤓 FORMULA DO CALCULO 🤓     ");
    console.log("===========================================\n");

    console.log("\nSalario Liquido =  Salario Bruto - INSS - IRRF   ");
    console.log(`Salario Liquido = ${salario_bruto.toFixed(2)} - ${descontoINSS.toFixed(2)} - ${descontoIR.toFixed(2)} \n`);

}

function editaDadosBasicosEmpresa() {
    console.log("\n=========================================");
    console.log("       🎲  EDITAR DADOS DA EMPRESA");
    console.log("=========================================\n");

    empresa.nome = readline.question("Digite o nome da empresa: ")
    empresa.razao_social = readline.question("Digite a Razao Social da empresa: ")
    empresa.cnpj = readline.question("Digite o CNPJ da empresa: ")
    empresa.inscricao_estadual = readline.question("Digite a Inscricao Estadual da empresa: ")
    empresa.dataFundacao = readline.question("Digite a data de fundacao da empresa (DD/MM/AAAA): ")

    console.log("\n✅ Dados atualizados com sucesso!");
    console.log(empresa)
}

function editaEnderecoEmpresa() {
    console.log("\n=========================================");
    console.log("       🏠  EDITAR ENDERECO DA EMPRESA");
    console.log("=========================================\n");

    empresa.endereco.logradouro = readline.question("Digite o nome da rua da empresa: ")
    empresa.endereco.numero = readline.question("Digite o numero do endereco da empresa: ")
    empresa.endereco.complemento = readline.question("Complemento (Bloco, Andar, Apartamento): ")
    empresa.endereco.bairro = readline.question("Digite o bairro: ")
    empresa.endereco.cidade = readline.question("Digite a cidade: ")
    empresa.endereco.estado = readline.question("Digite o Estado (UF): ")
    empresa.endereco.cep = readline.question("Digite o CEP: ")

    console.log("\n✅ Endereco atualizado com sucesso!");
    console.log(empresa.endereco)
}

function editaDadosContatoEmpresa() {
    console.log("\n=========================================");
    console.log("       ☎️  EDITAR CONTATO DA EMPRESA");
    console.log("=========================================\n");

    empresa.contato.telefone = readline.question("Digite o telefone da empresa: ");
    empresa.contato.email = readline.question("Digite o e-mail da empresa: ");
    empresa.contato.site = readline.question("Digite o site da empresa: ");

    console.log("\n✅ Dados de contato atualizados com sucesso!");
    console.log(empresa.contato);
}

function editaMetaAnual() {
    console.log("\n=========================================");
    console.log("       🎯 EDITAR META ANUAL DA EMPRESA");
    console.log("=========================================\n");

    var meses = [
        "Janeiro", "Fevereiro", "Marco", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    var metas = [];

    for (var i = 0; i < 12; i++) {
        var valor = readline.questionFloat(`Meta para ${meses[i]}: R$ `);
        metas.push(valor);
    }

    empresa.meta_anual = metas;

    console.log("\n✅ Metas anuais registradas com sucesso!");
    console.log(empresa.meta_anual);
}

function editaDadosAreaAtuacao() {
    console.log("\n=========================================");
    console.log("       🧩 EDITAR AREA DE ATUACAO");
    console.log("=========================================\n");

    var areasAtuacao = [];

    for (var i = 0; i < 4; i++) {
        var areas = readline.question("Digite a nova area de atuacao: ");
        areasAtuacao.push(areas);
    }

    empresa.areas_atuacao = areasAtuacao;

    console.log("\n✅ Areas de atuacao registradas com sucesso!");
    console.log(empresa.areas_atuacao);
}

function exibeInformacoesEmpresa() {
    console.log("\n===========================================");
    console.log("        📊 INFORMACOES DA EMPRESA 📊");
    console.log("===========================================\n");

    console.log("🏢 DADOS BASICOS");
    console.log(`Nome:                ${empresa.nome}`);
    console.log(`Razao Social:        ${empresa.razao_social}`);
    console.log(`CNPJ:                ${empresa.cnpj}`);
    console.log(`Inscricao Estadual:  ${empresa.inscricao_estadual}`);
    console.log(`Data de Fundacao:    ${empresa.dataFundacao}\n`);

    console.log("📍 ENDERECO:");
    console.log(`Logradouro:          ${empresa.endereco.logradouro}`);
    console.log(`Numero:              ${empresa.endereco.numero}`);
    console.log(`Complemento:         ${empresa.endereco.complemento}`);
    console.log(`Bairro:              ${empresa.endereco.bairro}`);
    console.log(`Cidade:              ${empresa.endereco.cidade}`);
    console.log(`Estado:              ${empresa.endereco.estado}`);
    console.log(`CEP:                 ${empresa.endereco.cep}\n`);

    console.log("☎️  CONTATO:");
    console.log(`Telefone:            ${empresa.contato.telefone}`);
    console.log(`Email:               ${empresa.contato.email}`);
    console.log(`Site:                ${empresa.contato.site}\n`);

    console.log("🧩 AREAS DE ATUACAO:");
    empresa.areas_atuacao.forEach((area, index) => {
        console.log(` - ${area}`);
    });
    console.log("");

    console.log("🎯 METAS MENSAIS:");
    var meses = [
        "Janeiro", "Fevereiro", "Marco", "Abril",
        "Maio", "Junho", "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    var somaMetas = 0;

    for (var i = 0; i < empresa.meta_anual.length; i++) {
        console.log(`${meses[i]}: R$ ${empresa.meta_anual[i].toFixed(2)}`);
        somaMetas += empresa.meta_anual[i]; // SOMANDO COM FOR NORMAL
    }

    console.log("\n-------------------------------------------");
    console.log(`📌 META ANUAL TOTAL: R$ ${somaMetas.toFixed(2)}`);
    console.log("-------------------------------------------\n");
}

function cadastraFuncionario() {
    console.log("\n===========================================");
    console.log("        👤 CADASTRO DE FUNCIONARIOS 👤");
    console.log("===========================================\n");

    var nome = readline.question("Nome: ");
    var cpf = readline.question("CPF: ");
    var genero = readline.question("Genero: ");
    var estadoCivil = readline.question("Estado civil: ");
    var idade = readline.questionInt("Idade: ");
    var salarioBruto = readline.questionFloat("Salario bruto: ");


    var funcionario = {
        nome: nome,
        cpf: cpf,
        genero: genero,
        estado_civil: estadoCivil,
        idade: idade,
        salario_bruto: salarioBruto
    };

    empresa.funcionarios.push(funcionario);

    console.log("\n✅ Funcionario cadastrado com sucesso!");
    console.log(empresa.funcionarios);
}

function exibeQuadroFuncionarios() {

    console.log("\n===========================================");
    console.log("        👥 QUADRO DE FUNCIONARIOS 👥");
    console.log("===========================================\n");

    if (empresa.funcionarios.length === 0) {
        console.log("Nenhum funcionário cadastrado ainda.");
        return;
    }

    console.log("Quantidade total de funcionários:", empresa.funcionarios.length);

    console.log("\nPrimeiro funcionário da lista:");
    var primeiro = empresa.funcionarios[0];
    console.log(`- Nome: ${primeiro.nome}, CPF: ${primeiro.cpf}, Salário: R$ ${primeiro.salario_bruto.toFixed(2)}`);

    console.log("\nÚltimo funcionário da lista:");
    var ultimo = empresa.funcionarios[empresa.funcionarios.length - 1];
    console.log(`- Nome: ${ultimo.nome}, CPF: ${ultimo.cpf}, Salário: R$ ${ultimo.salario_bruto.toFixed(2)}`);

    console.log("\nLista completa de funcionários:\n");

    for (var i = 0; i < empresa.funcionarios.length; i++) {
        var func = empresa.funcionarios[i];

        console.log(
            `${i + 1} - Nome: ${func.nome} | CPF: ${func.cpf} | Gênero: ${func.genero} | ` +
            `Estado Civil: ${func.estado_civil} | Idade: ${func.idade} | ` +
            `Salário Bruto: R$ ${func.salario_bruto.toFixed(2)}`
        );
    }

    console.log("======================================\n");
}

function exibeFolhaPagamento() {
    console.log("\n===========================================");
    console.log("         📑 FOLHA DE PAGAMENTO 📑");
    console.log("===========================================\n");

    if (empresa.funcionarios.length === 0) {
        console.log("Nenhum funcionário cadastrado para gerar a folha.");
        return;
    }

    var data_atual = new Date().toLocaleDateString();

    console.log(`Empresa: ${empresa.nome}`);
    console.log(`CNPJ: ${empresa.cnpj}`);
    console.log(`Data: ${data_atual}`);
    console.log("===========================================\n");

    for (var i = 0; i < empresa.funcionarios.length; i++) {
        var salBrutoFunc = empresa.funcionarios[i];

        var salario_bruto = salBrutoFunc.salario_bruto;
        var descontoINSS = calcularINSS(salario_bruto);
        var descontoIR = calcularImpostoRenda(salario_bruto);
        var fgts = calcularFGTS(salario_bruto);
        var salario_liquido = salario_bruto - descontoINSS - descontoIR;
        var ferias = calcularFerias(salario_bruto);

        console.log(`👤 Funcionário ${i + 1}`);
        console.log("-------------------------------------------");
        console.log(`Nome: ${salBrutoFunc.nome}`);
        console.log(`Salário Bruto:     R$ ${salario_bruto.toFixed(2)}`);
        console.log(`Desconto INSS:     R$ ${descontoINSS.toFixed(2)}`);
        console.log(`Desconto IRRF:     R$ ${descontoIR.toFixed(2)}`);
        console.log(`FGTS (8%):         R$ ${fgts.toFixed(2)}`);
        console.log("-------------------------------------------\n");
        console.log(`Salário Líquido:   R$ ${salario_liquido.toFixed(2)}`);
        console.log(`Férias (1/3):       R$ ${ferias.toFixed(2)}`);
        console.log("-------------------------------------------\n");
    }

    console.log("📌 Fim da folha de pagamento.");
    console.log("===========================================\n");
}