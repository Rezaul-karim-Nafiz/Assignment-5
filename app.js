//======Get Input Text=========//
const searchFood = () =>{
    const searchInputText = document.getElementById('searchField').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
    .catch(error => displayError('Item Not Fount !! please try again')) 
}
//=======Get Food Item To Display=======//
const displayFoods = foods =>{
    const foodContainer = document.getElementById('foodContainer')
    foods.forEach(food => {
     const div = document.createElement('div');
     div.className = 'food'
     const foodInfo =`
     <div onClick="getIngredients('${food.strMeal}')">
        <img src="${food.strMealThumb}">
        <h1>${food.strMeal}</h1>
    </div>   
     `
     div.innerHTML = foodInfo
     foodContainer.appendChild(div)
 })
} 
//=========Get Ingredients Item==========//
const getIngredients = (mealsIngredients) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsIngredients}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => mealIngredients(data.meals[0]))    
  };
//==========display Ingredients=========//
const mealIngredients = (mealsIngredients) => {
    const ingredientsDiv = document.getElementById("ingredientsInfo");
    ingredientsDiv.innerHTML = `
    <div class="mealIngredients">
       <img src="${mealsIngredients.strMealThumb}" alt="" />
          <h2>${mealsIngredients.strMeal}</h2>
           <h3>Ingredients:</h3>
          <ul>
            <li>${mealsIngredients.strIngredient1}</li>
            <li>${mealsIngredients.strIngredient2}</li>
            <li>${mealsIngredients.strIngredient3}</li>
            <li>${mealsIngredients.strIngredient4}</li>
            <li>${mealsIngredients.strIngredient5}</li>
            <li>${mealsIngredients.strIngredient6}</li>
            <li>${mealsIngredients.strIngredient7}</li>
            <li>${mealsIngredients.strIngredient8}</li>
            <li>${mealsIngredients.strIngredient9}</li>
            <li>${mealsIngredients.strIngredient10}</li>
          </ul>     
    </div> 
    `;
  };
//=======Show Error Message=========//
  const displayError = error =>{
      const errorTag = document.getElementById('alertError')
      errorTag.innerText = error
  }  







