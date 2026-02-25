function calculateTotal(itemName, price, quantity, hasDiscount) {
    // À compléter : crée les variables nécessaires
    var totalPrice = price * quantity;
    // et retourne le prix total
    if (hasDiscount === true) {
        totalPrice = totalPrice * 0.8;
        console.log(" Vous avez achet\u00E9 ".concat(quantity, " ").concat(itemName, " pour un total de ").concat(totalPrice, " euros."));
        return totalPrice;
    }
    else {
        console.log(" Vous avez achet\u00E9 ".concat(quantity, " ").concat(itemName, " pour un total de ").concat(totalPrice, " euros."));
        return totalPrice;
    }
    // TODO: implement
}
calculateTotal("Biscuits", 2.5, 3, true);
calculateTotal("pate feuilletée", 3.5, 2, false);
