var angularApp = angular.module('RecipeApp', []);

angularApp.service('RecipeFilterService', function() {
  var filterService = {
    filters: {
      calories: 0,
      time: 0,
      cuisine: '',
      title: ''
    },
    filterRecipes: function(recipe) {
      var filters  = filterService.filters;

      var valid = true;
      valid = valid && (filters.calories > 0 ? filters.calories >= recipe.calories : true);
      valid = valid && (filters.time > 0 ? filters.time >= recipe.time : true);
      valid = valid && (filters.cuisine != '' ? filters.cuisine === recipe.cuisine : true);
      valid = valid && (filters.title != '' ? (new RegExp(filters.title, 'i')).test(recipe.title) : true);
      return valid;
    }
  };
  return filterService;
});

angularApp.controller('RecipeFilterCtrl', ['$scope', 'RecipeFilterService', function($scope, filterService) {
  $scope.filters = filterService.filters;
  $scope.cuisines = ['Indian', 'Chinese', 'American', 'Italian'];
}]);

angularApp.controller('RecipeListCtrl', ['$scope', 'RecipeFilterService', function($scope, filterService) {
  $scope.filterService = filterService;
  $scope.recipes = [
    {
      "id": "1",
      "author": "abc",
      "title" : "5 Spice Mushroom Rice",
      "description": "Mushrooms and Chinese 5 spice powder together make this rice very traditional fare.This dish is a delicate blend of flavours and textures that may not appeal to all,but it's a \"must\" for those who like to experiment beyond the conventional Chinese fried rice.",
      "cuisine":"Chinese",
      "category":"Main Course",
      "calories":100,
      "ingredients":[{"name": "chinese rice", "amount": "2 cups"},
        {"name": "dark black mushroom, soaked and sliced", "amount": "1/2 cup"},
        {"name": "mushrooms, sliced", "amount": "1/3 cup"},
        {"name": "chinese 5 spice powder", "amount": "1 tsp"},
        {"name": "sugar", "amount": "1 pinch"},
        {"name": "oil", "amount": "2 tsp"},
        {"name": "salt to taste", "amount":""}],
      "method":[{"step": "Heat the oil, add the mushrooms and sauté till they are tender."},
        {"step":"Add the dried black mushrooms and sauté for 2 to 3 more minutes."},
        {"step":"Add the Chinese 5 spice powder and sauté for ½ a minute."},
        {"step":"Add the rice, sugar and salt and mix well."},
        {"step":"Serve hot."}],
      "time": 10 ,
      "servings": "4",
      "cooking_tips": [{"tip":"Soak the dried mushrooms in hot water for 15 minutes. Remove and discard the stalk."}],
      "img_url": "images/5-spice-mushroom-rice-1031.jpg"
    },
    {
      "id": "2",
      "author": "abc",
      "title" : "Achari Chana Pulao",
      "description": "Achaaris spices such as saunf, rai, methi, kalongi and elaichi are combined with some fine long grained rice some kabuli chana to form a highly flavourful and fragrant pulao. The Punjabi garam masala forms an important part as it lends great taste to the dish. The mango pickle paste used in the pulao is what I believe was the secret ingredient behind the scrumptious preparation. So go ahead serve your family some of this irresistible pulao.",
      "cuisine":"Indian",
      "category":"Main Course",
      "calories":150,
      "ingredients":[{"name": "mango pickle", "amount": "2 tbsp"},
        {"name": "long grained rice (basmati)", "amount": "1 1/4 cups"},
        {"name": "ghee", "amount": "2 tbsp"},
        {"name": "fennel seeds (saunf)", "amount": "1 tbsp"},
        {"name": "mustard seeds", "amount": "1 tbsp"},
        {"name": "fenugreek seeds", "amount": "1 tsp"},
        {"name": "nigella seeds", "amount":"1 tbsp"},
        {"name": "black cardamoms", "amount":"2"},
        {"name": "cumin seeds", "amount":"1/2 tsp"},
        {"name": "asafoetida", "amount":"1/2 tsp"},
        {"name": "sliced onions", "amount":"1/2 cup"},
        {"name": "ginger garlic paste", "amount":"1 tsp"},
        {"name": "soaked and boiled kabuli chana", "amount":"1 cup"},
        {"name": "turmeric powder", "amount":"1/2 tsp"},
        {"name": "chilli powder", "amount":"1/2 tsp"},
        {"name": "garam masala", "amount":"1/2 tsp"},
        {"name": "salt", "amount":"to taste"}],
      "method":[{"step": "Blend the mango pickle in a mixer to a coarse paste. Keep aside."},
        {"step":"Clean, wash and soak the rice for 10 minutes. Drain and keep aside."},
        {"step":"Put 2½ cups of water to boil."},
        {"step":"Heat the ghee in a pressure cooker, add the fennel seeds, mustard seeds, fenugreek seeds, onion seeds, big cardamoms, cumin seeds and asafoetida."},
        {"step":"When the seeds crackle, add the onions and sauté till they turn translucent."},
        {"step":"Add the ginger-garlic paste, kabuli chana, turmeric powder, chilli powder, Punjabi garam masala, salt and the prepared pickle paste and sauté for 2 minutes."},
        {"step":"Add the rice and sauté for 2 more minutes."},
        {"step":"Add the hot water and pressure cook for 2 whistles."},
        {"step":"Allow the steam to escape before opening the lid."},
        {"step":"Separate each grain of rice lightly with a fork."},
        {"step":"Serve hot."}],
      "time": 35 ,
      "servings": "4",
      "cooking_tips": "",
      "img_url": "images/achari_chana_pulao-2981.jpg"
    },
    {
      "id": "3",
      "author": "abc",
      "title" : "Cheese and Spring Onion Sandwich",
      "description": "Cheese and Spring Onion Sandwich is a tasty preparation of lightly buttered bread stuffed with a creamy spread of mayonnaise, garlic cheese and spring onlions.",
      "cuisine":"American",
      "category":"Snack",
      "calories":50,
      "ingredients":[{"name": "bread slices, lightly buttered", "amount": "8"},
        {"name": "large tomato, thinly sliced", "amount": "1"},
        {"name": "lettuce leaves", "amount": "4"},
        {"name": "cheese spread", "amount":"1/2 cup"},
        {"name": "mayonnaise", "amount":"1/4 cup"},
        {"name": "clove of garlic, grated", "amount":"1"},
        {"name": "finely chopped celery", "amount":"1 tsp"},
        {"name": "spring onions with greens, finely chopped", "amount":"2"},
        {"name": "freshly ground black pepper powder", "amount": "as per taste"},
        {"name": "freshly ground pepper powder", "amount":"as per taste"},
        {"name": "salt", "amount":"as per taste"}],
      "method":[{"step": "Place a lettuce leaf over a slice of bread."},
        {"step": "Apply a generous layer of the spread over it."},
        {"step": "Top with the sliced tomatoes."},
        {"step": "Sprinkle with salt and freshly ground pepper."},
        {"step": "Sandwich with another slice of bread."},
        {"step": "Repeat with the remaining bread slices, tomatoes, lettuce and spread to make 3 more sandwiches."},
        {"step": "Serve immediately."}],
      "time": 5 ,
      "servings": "4",
      "cooking_tips": "",
      "img_url": "images/cheese_and_spring_onion_sandwich-4510.jpg"
    },
    {
      "id": "4",
      "author": "abc",
      "title" : "Baked Mushroom Macaroni",
      "description": "Macaroni fits well into almost any baked dish. Here's a quick combo of macaroni and vegetables, which satiates your hunger pangs and delights your taste buds at the same time.",
      "cuisine":"Italian",
      "category":"Main Course",
      "calories":250,
      "ingredients":[{"name": "chopped onions", "amount": "1/2 cup"},
        {"name": "chopped colored capsicums (red and yellow)", "amount": "1 cup"},
        {"name": "chopped tomatoes", "amount": "1 cup"},
        {"name": "chinese 5 spice powder", "amount": "1 tsp"},
        {"name": "sliced mushrooms", "amount": "1 cup"},
        {"name": "dried oregano", "amount": "2 tbsp"},
        {"name": "sliced olives", "amount":"2 tbsp"},
        {"name": "butter", "amount": "2 tbsp"},
        {"name": "salt and black pepper", "amount": "as per taste"},
        {"name": "instant mushroom soup powder", "amount": "1/4 cup"},
        {"name": "water", "amount": "1 1/2 cups"},
        {"name": "grated mozarella cheese", "amount": "1/4 cup"}
      ],
      "method":[{"step": "Heat the butter in a pan, add the onions and sauté till they turn translucent."},
        {"step":"Add the capsicum, tomatoes and mushrooms and sauté for another 2 minutes."},
        {"step":"Add the oregano, olives, salt, pepper and mix well. Keep aside."},
        {"step":"Arrange the macaroni on the bottom of a greased baking dish"},
        {"step":"Spread the vegetable layer on top of the pasta and pour the mushroom sauce on top."}],
      "time":30 ,
      "servings": "4",
      "cooking_tips": "",
      "img_url": "images/baked_mushroom_macaroni-3940.jpg"
    }
  ];
}]);
