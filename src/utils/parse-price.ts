export function parsePrice(price: number) {
  const { format } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return format(price);
}
