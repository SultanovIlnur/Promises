//Пример работы с промисом
/*Здесь с помощью промисов я создам абстракцию процесса готовки еды по рецепту.
Если еда выполнена не по рецепту - промис реджектится.
Если еда выполнена по рецепту - промис ресолвится.
setTimeout здесь нужен для симуляции асинхронности процесса (так как в моем случае без этого операция происходит мгновенно); например симуляция запроса к вебсерверу, ответ от которого приходит не сразу.
*/
var recipe = [
  "add raspberry",
  "add mushrooms",
  "make dough",
  "put in the oven",
];

function cookFood(ingredients) {
  let currentRecipe = [];
  for (ingredient of ingredients) {
    currentRecipe.push(ingredient);
  }
  return currentRecipe;
}

function recipeCheck(...input) {
  return new Promise((resolve, reject) => {
    let food = cookFood(input);
    setTimeout(() => {
      if (food == recipe) {
        resolve("true");
      } else {
        reject("false");
      }
    }, 250);
  });
}

var promises = [
  recipeCheck(
    "add raspberry",
    "add mushrooms",
    "make dough",
    "put in the oven"
  ),
  recipeCheck(
    "make dough",
    "put in the oven",
    "add mushrooms",
    "add raspberry"
  ),
];

function checkRecipes() {
  Promise.all(promises)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

$(document).ready(function () {
  $("#btn").on("click", () => checkRecipes());
});
