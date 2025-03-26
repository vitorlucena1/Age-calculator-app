export function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  }
  
  export function diasNoMes(mes, ano) {
    return [31, anoBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mes - 1] || 31;
  }
  
  export function validarData(dia, mes, ano) {
    const erros = { dia: '', mes: '', ano: '' };
    let valido = true;
  
    const d = parseInt(dia, 10);
    const m = parseInt(mes, 10);
    const a = parseInt(ano, 10);
  
    const hoje = new Date();
    const dataNascimento = new Date(a, m - 1, d);
  
    if (!dia) {
      erros.dia = 'Campo obrigatório';
      valido = false;
    } else if (isNaN(d) || d < 1 || d > 31) {
      erros.dia = 'Dia inválido';
      valido = false;
    } else if (m >= 1 && m <= 12 && a > 0 && d > diasNoMes(m, a)) {
      erros.dia = 'Dia não existe\n nesse mês';
      valido = false;
    }
  
    if (!mes) {
      erros.mes = 'Campo obrigatório';
      valido = false;
    } else if (isNaN(m) || m < 1 || m > 12) {
      erros.mes = 'Mês inválido';
      valido = false;
    }
  
    if (!ano) {
      erros.ano = 'Campo obrigatório';
      valido = false;
    } else if (isNaN(a) || ano.length !== 4 || a < 1000) {
      erros.ano = 'Ano inválido';
      valido = false;
    }
  
    if (valido && dataNascimento > hoje) {
      erros.ano = 'Você veio do futuro? 🤨';
      valido = false;
    }
  
    return { valido, erros };
  }
  
  export function calcularIdade(dia, mes, ano) {
    const hoje = new Date();
    const nascimento = new Date(ano, mes - 1, dia);
  
    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();
    let dias = hoje.getDate() - nascimento.getDate();
  
    if (dias < 0) {
      meses--;
      const mesAnterior = (hoje.getMonth() - 1 + 12) % 12;
      const anoMesAnterior = mesAnterior === 11 ? hoje.getFullYear() - 1 : hoje.getFullYear();
      dias += diasNoMes(mesAnterior + 1, anoMesAnterior);
    }
  
    if (meses < 0) {
      anos--;
      meses += 12;
    }
  
    return { anos, meses, dias };
  }
  