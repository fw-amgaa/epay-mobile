export function currencyFormat(num: number, fixed: number | undefined = 2) {
  const formated =
    num.toFixed(fixed)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "₮";

  return formated;
}
