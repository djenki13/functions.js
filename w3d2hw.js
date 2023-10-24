// Part 1

class Cat {
    constructor(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
    }
    meow(name) {
      console.log("meow" +name,"!")
    }
    iam(color) {
        console.log("I am" +color, "!")
    }
  }
  const cat1 = new Cat("Fiona", 6, "brown")
  const cat2 = new Cat("Sadie", 6, "orange")
  console.log(cat2)
  cat1.iam("orange")

  // Part 2

  class Pirate {
    constructor(name, limb, treasure) {
        this.name = name;
        this.limb = limb;
        this.treasure = treasure;
    }
    greeting(name){ 
        console.log("I am" +name, "esteemed sailor of the seven seas!")
    }
    booty(treasure) {
        console.log("I have come for your" +treasure, "!")
    }
    loss(limb) {
        console.log("I lost my" +limb, "in the war!")
    }
  }

  const jollyRoger1 = new Pirate ("Livingston", "hand", "rubies")
  const jollyRoger2 = new Pirate ("Annabelle", "leg", "emeralds")
  const jollyRoger3 = new Pirate ("Poppy", "ear", "gold")
  const blackPearl1 = new Pirate ("Marco", "toe", "diamonds")
  const blackPearl2 = new Pirate ("Kenneth", "finger", "silver")
  const blackPearl3 = new Pirate ("Evelyn", "nose", "sapphires")
  console.log(jollyRoger2)
  blackPearl1.greeting("Kenneth")
  jollyRoger3.booty("gold")
  blackPearl3.loss("nose")
