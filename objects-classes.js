/*
Ex.1 
  Create a Fighter class which has the following attributes:
    - name (default value = "Unnamed player")
    - attack (default value = 5)
    - defense (default value = 0)
    - health (default value = 100)
  and the following methods:
    - attackOponent(opponent) which should decrease the opponent health with the value from attack attribute
    - showHealth() which console.logs the health of the player (if health is <=0 then console.log that the player is dead) (hint: this should be used inside attackOponent method)
    - heal() which adds 20 to player's health
  
  Create a Samurai class which inherits Fighter class and has a new method:
    - samuraiAttack() which calls the attackOponent method but with a doubled value of attack attribute
    
  Create a Ninja class which inherits Fighter class and has a new method:
    - ninjaAttack() which calls the attackOpenent method but by adding 20 to the attack attribute


  The constructor for all three classes:
    - will receive the name as string
    - will receive attack weapon as string 
        (possible weapons: 
          "Knife" (will be equivalent with attack=15), 
          "Sword" (will be equivalent with attack=20), 
          "Gun" (will be equivalent with attack=30),
    - will receive defense weapon as string
        (possible weapons: 
          "wooden shield" (will be equivalent with defense=5), 
          "iron shield" (will be equivalent with defense=10)
   *health will be always 100 and will not be in the constructor
   ex: constructor("Subzero", "sword", "wooden shield")
   
   
   Instantiate one player for each student and make them fight until only one player stays alive:
    - one turn for each player
    - available actions for each player:
      = attack
      = heal
      = specialAttack (samurai/ninjaAttack)
*/
