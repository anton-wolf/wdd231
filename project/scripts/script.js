document.addEventListener('DOMContentLoaded', async () => {


    /**
     * to improve runtime complexities,
     * we'll store the fetched data in localStorage
     * since we don't expect any since the meal database
     * isn't updated routinely
     * */
    let getMeals = localStorage.getItem("mealsData");

    if (!getMeals) {

        await fetch("data/meals.json")

            .then(response => {
                return response.json()
            }).then(meals => {

                localStorage.setItem("mealData", JSON.stringify(meals));
            })


        // map the data now stored in localStorage
        const mealData = JSON.parse(localStorage.getItem("mealData"));

        const mealTemplate = document.querySelector("#meal_template");
        //const ingredientTemplate  = document.querySelector("#ingredient_template");
        const container = document.querySelector(".meals_container");

        const elements = mealData.map(meal => {
            const clone = mealTemplate.content.cloneNode(true);

            const serves = meal.serves[0];
            const getCookingTime = () => {
                let cookingTime = 0;
                serves.set.forEach(set => {
                    cookingTime += set.cookingTime.reduce((acc, num) => acc + num);
                });
                return {minutes: Math.floor(cookingTime / 60), remainder: cookingTime % 60}
            }

            const getIngredients = () => {
                serves.set.forEach(set => {
                    /*console.log(set)*/
                });
            };

            getIngredients();

            const cookingTime = getCookingTime();

            //populate
            clone.querySelector("#meal_name").textContent = meal.name;
            clone.querySelector("#meal_last_cooked").textContent = meal.lastCooked;
            clone.querySelector("#meal_serves").textContent = `${serves.adults} Adults, ${serves.children} Children`;
            clone.querySelector("#meal_cook_time").textContent =
                `${cookingTime.minutes} minutes ${cookingTime.remainder > 1 ?
                    `${cookingTime.remainder} seconds` : (cookingTime.remainder > 0 ?
                        `${cookingTime.remainder} second` : ``)}`;

            return clone
        });

        container.append(...elements);
    }

});

const modal = document.querySelector(".modal");
document.querySelector(".close-button").addEventListener("click", () => {
    modal.close();
})

const delay_meal_buttons = setTimeout(() => {

    const meal_buttons = document.querySelectorAll(".meal_button");

    meal_buttons.forEach(button => {
        button.addEventListener("click", event => {
            modal.showModal();
        });
    });
}, 100);
