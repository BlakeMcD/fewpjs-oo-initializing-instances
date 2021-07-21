// Write your code here
class Breakfast {
    constructor(food, drink) {
    this.food = food;
    this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, _dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = _dessert;
    }
}

let breakfast1 = Breakfast("eggs", "Orange Juice");
let lunch1 = Lunch("side salad", "beef", "beef drink")
let dinner1 = Dinner("balsamic salad", "pumpkin soup", "salad", "pie");