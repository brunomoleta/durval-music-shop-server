export const priceToString = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(price);

export const capitalizedFirstLetter = (string:string) => string.charAt(0).toUpperCase() + string.slice(1);