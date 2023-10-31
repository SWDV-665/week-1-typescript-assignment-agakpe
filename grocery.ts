class Grocery {
  name: string; 
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  
  let purchase: [string, number] = [this.name, this.quantity]; 
    purchase.push(this.name, this.quantity);
    window.alert(purchase);
  }
  }

const purchase1 = new Grocery("Pads", 100);
const purchase2 = new Grocery("Can Tomatoes", 10);
const purchase3 = new Grocery("Evaporated milk", 12);
const purchase4 = new Grocery("Pack of Cigarrette", 5);
const purchase5 = new Grocery("Whole wheat Bread", 4);
const purchase6 = new Grocery("Organic Orange Juice", 4);
