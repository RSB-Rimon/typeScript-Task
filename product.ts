interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const cart: Product[] = [
    { id: 1, name: "Laptop", price: 2000, quantity: 1 },
    { id: 2, name: "Mouse", price: 500, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1000, quantity: 1 },
    { id: 4, name: "Headphone", price: 500, quantity: 1 }
];

function calculateSubtotal(products: Product[]): number {
    return products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
}
console.log(calculateSubtotal(cart))

function calculateDiscount(discountPercentage:number):number{
    const total = calculateSubtotal(cart)
    const dicount = total * discountPercentage/ 100
    return dicount


}

console.log(calculateDiscount(10));

function calculateGrandTotal():number{
    return calculateSubtotal(cart)-calculateDiscount(50)
};
console.log(calculateGrandTotal());


 