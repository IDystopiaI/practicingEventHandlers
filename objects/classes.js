/* Classes are an ES6 feature. They provide a more structured and cleaner way to work with objects
           compared to traditional constructor functions.
           ex. adds the static keyword, encapsulation, inheritance.
*/

/* Class replaces this
function Product(name, price) {

    this.name = name;
    this.price = price;
    this.displayProduct = function () {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    };

    // property derived from a function
    this.calculateTotal = function (salesTax) {
        return this.price + (this.price * salesTax);
    }
}

// instantiation
const product1 = new Product("shirt", 19.99);
*/

const Tax = 0.12;

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // inside of a class, you do not need to use the function keyword
  // to define a method
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price $${this.price.toFixed(2)}`);
  }

  // property derived from a function call
  calculateTotal(salesTax) {
    return (this.price + this.price * salesTax).toFixed(2);
  }
}

const product1 = new Product("Shirt", 19.10);
// cont prevents product2 variable from being bound to something else
// it does not prevent the modification of the data stored within the object
const product2 = new Product("Pants", 24.99);
let product3 = new Product("Underwear", 15.5);
// let does not prevent product3 from being bound to some other arbitrary value
// product3 = 3;

product1.displayProduct();
product2.displayProduct();
product2.name = "Shoes";
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(Tax);
console.log(`Total price (with tax): $${total}`);
