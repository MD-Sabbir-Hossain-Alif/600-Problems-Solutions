let totalAmount = 450,
    numOfPeople = 4;

let amountPerPerson = Math.floor(totalAmount / numOfPeople),
    remainingAmount = totalAmount % numOfPeople;

console.log(amountPerPerson);
console.log(remainingAmount);