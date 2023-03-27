let shoppingList=[];
console.log("length is:", shoppingList.length)
shoppingList.push('Milk');
shoppingList.push('Bread');
shoppingList.push('Butter');
console.log("length is:", shoppingList.length)
console.log(shoppingList)
shoppingList.splice(1,1,"Flour","Eggs")
console.log(shoppingList)
shoppingList.pop();
console.log(shoppingList)
console.log("Index of flour is :",shoppingList.indexOf('Flour'))
shoppingList.splice(2,0,"Banana","Carrot","Lettuce")
console.log(shoppingList)

let additionalItemscontaining = new Array();
additionalItemscontaining.push("Orange Juice")
additionalItemscontaining.push("PineApple Juice")
additionalItemscontaining.push("Popcorn")
console.log(additionalItemscontaining)

let combineArray= shoppingList.concat(additionalItemscontaining);
console.log(combineArray)
