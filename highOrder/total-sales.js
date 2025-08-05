function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSales * taxRate) / 100;
  console.log("tax", taxAmount);
  const totalSalesWithTax = totalSales + taxAmount;
  return parseFloat(totalSalesWithTax.toFixed(2));
}

const products = [
  {
    name: "Apple",
    price: 0.5,
    quantity: 10,
  },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "orange", price: 0.6, quantity: 15 },
];

console.log(calculateTotalSalesWithTax(products, 8));
