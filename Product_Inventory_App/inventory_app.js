//File: js
//followed BankAccount Class as reference

//product class 
//  with price id
//  quantity
//  include the name of the product

class Product {
  constructor(price, productName) {
    this.productName = productName
    this.price = price;
    this.productItem = [];
  }

  //creating new inventory structure
  productInventory(productItems = null) {
    const productItemNames = productItems;
    const price = this.price
    const itemQuantity = this.itemQuantity;
    if (productItems !== null) { //if there is an input of a new product item
      this.productItem.push({
        productItems: productItems,
        price: price,
        itemQuantity: itemQuantity
      });
    }
  }
}


//adding new product type
class Bikes extends Product {
  constructor(price, itemQuantity) {
    super(price);
    this.itemQuantity = itemQuantity;
    }
  }

//adding new individual product to a previously made product type
const TrekBike = new Bikes();
TrekBike.price = 550;
TrekBike.itemQuantity = 10;
TrekBike.productItem;
TrekBike.productName = 'Trek Series 500'
TrekBike.productInventory("bikes");


const SpecializedBike = new Bikes();
TrekBike.price = 400;
TrekBike.itemQuantity = 15;
TrekBike.productItem;
productName = 'Specialized Series 10'
TrekBike.productInventory("bikes");

console.log(TrekBike)
console.log(SpecializedBike)



