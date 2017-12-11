function calculatePrice({ price, tax, discount=10 }) {
    let taxablePrice = price - (price * (discount / 100))
    let priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
    return priceWithTax;
}

console.log(calculatePrice({discount:20,tax:10,price:100}))