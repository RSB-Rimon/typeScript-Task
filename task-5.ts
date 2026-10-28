

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}


type StockStatus = "Out of Stock" | "Low Stock" | "Available";

// Inventory with 5 products
const inventory: Product[] = [
    { id: 1, name: "Laptop", price: 80000, stock: 10 },
    { id: 2, name: "Mouse", price: 800, stock: 3 },
    { id: 3, name: "Keyboard", price: 1500, stock: 0 },
    { id: 4, name: "Monitor", price: 15000, stock: 5 },
    { id: 5, name: "Headphone", price: 2000, stock: 8 },
];

//  Get Stock Status
function getStockStatus(stock: number): StockStatus {
    if (stock === 0) {
        return "Out of Stock";
    } else if (stock <= 5) {
        return "Low Stock";
    } else {
        return "Available";
    }
};

console.log(getLowStockProducts(inventory))


function getLowStockProducts(products:Product[]):Product[]{
    return products.filter((product)=> product.stock >= 1 && product.stock <= 5)
}

const lowStockProducts = getLowStockProducts(inventory);

console.log(lowStockProducts);

// stockDictionary 
const stockDictionary: { [productName: string]: number } = {};

for (const product of inventory) {
    stockDictionary[product.name] = product.stock;
}

console.log(stockDictionary);
console.log(stockDictionary["Mouse"]);