// src\utils\formatMoney.utils.js
export const formatMoney = (valor) => {

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor)

  }