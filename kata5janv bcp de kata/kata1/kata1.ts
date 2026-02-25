function calculateTotal(
  itemName: string,
  price: number,
  quantity: number,
  hasDiscount: boolean
): number {
  // À compléter : crée les variables nécessaires

  let totalPrice = price * quantity;

  // et retourne le prix total
  if (hasDiscount === true) {
    totalPrice = totalPrice * 0.8;
    console.log(
      ` Vous avez acheté ${quantity} ${itemName} pour un total de ${totalPrice} euros.`
    );
    return totalPrice;
  } else {
    console.log(
      ` Vous avez acheté ${quantity} ${itemName} pour un total de ${totalPrice} euros.`
    );
    return totalPrice;
  }
  // TODO: implement
}

calculateTotal("biscuits", 2.5, 3, true);
calculateTotal("pate feuilletée", 3.5, 2, false);
