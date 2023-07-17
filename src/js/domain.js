export class Character {
constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence; 

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error("Некорректное имя");
    } 
    
    if (this.type != "Bowman" && this.type != "Magician"&& this.type != "Swordsman" && this.type != "Undead" && this.type != "Daemon" && this.type != "Zombie") {
      throw new Error("Некорректный тип");
    }
  }

  levelUp() {
    this.level++;
    this.attack = this.attack + (this.attack / 100 * 20);
    this.defence = this.defence + (this.defence / 100 * 20);
    if (this.health <= 0) {
      throw new Error("Персонаж умер");
    }
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
  } 
  }
  
}

class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
 constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  } 
}

class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}

const defaultCharacter = new Character();
export default defaultCharacter;