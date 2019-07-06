function phone(brand, price, color, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
}

phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", it's color is " + this.color + " and the price is " + this.price + " zl. It's camera has " + this.camera + " Mpx.")
}

var SamsungGalaxyS6 = new phone("Samsung", 2300, "silver", 16);
var iPhone6s = new phone("Apple", 2500, "space grey", 12);
var OnePlusOne = new phone("Oneplus", 1000, "black", 13);

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();