Hero.prototype.elementalAttack = function (opponent) {
  opponent.hitPoints -= (this.attackPower * 2);
  console.log(`${this.alias} attacked ${opponent.alias}!!!`);
}

Hero.prototype.elemental = true;
