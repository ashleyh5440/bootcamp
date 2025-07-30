function Hero(alias, hitPoints, attackPower){
  this.alias = alias;
  this.hitPoints = typeof hitPoints === 'number' ? hitPoints : 10;
  this.attackPower = typeof attackPower === 'number' ? attackPower : 10;
  this.attack = function(opponent){
    opponent.hitPoints -= this.attackPower;
    console.log(`${this.alias} attacked ${opponent.alias}!!!`);
  }
  this.isAlive = function(){
    if(this.hitPoints > 0){
      console.log(`${this.alias} is alive!`);
    }
    else{
      console.log(`${this.alias} is down!`);
    }
  }
}