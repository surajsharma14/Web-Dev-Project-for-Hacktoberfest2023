document.addEventListener("DOMContentLoaded", function () {
    const fitnessForm = document.getElementById("fitness-form");
    const fitnessResults = document.getElementById("fitness-results");
    const nutritionResults = document.getElementById("nutrition-results");

    fitnessForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted"); // Log that the form was submitted

        // Retrieve user input (height, weight, age, gender)
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const age = parseInt(document.getElementById("age").value);

        // Initialize variables for fitness and nutrition plans
        let fitnessPlan = "";
        let nutritionPlan = "";

        // Add conditions to generate plans based on user input
        if (age < 18) 
        {
            fitnessPlan = "Sorry, fitness plans are only available for adults (age 18 and above).";
            nutritionPlan = "Sorry, nutrition plans are only available for adults (age 18 and above).";
        } 
        else if (age >= 18 && age < 25 && weight >= 80) 
        {
            fitnessPlan = `Fitness plan for a ${age}-year-old weighing ${weight} kg and ${height} cm tall:\n
            - Include 60 minutes of cardio exercises in your daily routine.\n
            - Focus on staying consistent and gradually increasing the intensity of your workouts.
            - You can follow a workout program such as this one:\n   https://chloeting.com/program/2021/get-fit-challenge\n`;

            const protein = 2.0; // grams of protein per kg of body weight
            const carbohydrates = 4.0; // grams of carbohydrates per kg of body weight
            const waterIntake = 30.0; // milliliters of water per kg of body weight
            
            nutritionPlan = `Nutrition plan for ${weight} kg weight:\n
            - Protein: ${protein * weight} grams\n
            - Carbohydrates: ${carbohydrates * weight} grams\n
            - Water Intake: ${waterIntake * weight} milliliters\n
            - Include a variety of fruits and vegetables in your diet for essential vitamins and minerals.;
            - You can go through the given link for various recipe: \n https://chloeting.com/recipes;`
        } 
        else if (age >= 18 && age < 25 && weight < 80) 
        {
            fitnessPlan = `Fitness plan for a ${age}-year-old weighing ${weight} kg and ${height} cm tall:\n
            - Focus on strength training exercises to build muscle and increase weight.\n
            - Aim for at least 3-4 days of strength training per week.\n
            - Include compound exercises like squats, deadlifts, and bench presses in your routine.
            - You can follow a workout program such as this one:\n   https://chloeting.com/program/2021/get-fit-challenge\n`;

            const protein = 1.5; // grams of protein per kg of body weight
            const carbohydrates = 3.0; // grams of carbohydrates per kg of body weight
            const waterIntake = 35.0; // milliliters of water per kg of body weight
            
            nutritionPlan = `Nutrition plan for ${weight} kg weight:\n
            - Protein: ${protein * weight} grams\n
            - Carbohydrates: ${carbohydrates * weight} grams\n
            - Water Intake: ${waterIntake * weight} milliliters\n
            - Include a variety of fruits and vegetables in your diet for essential vitamins and minerals.
            - You can go through the given link for various recipe: \n https://chloeting.com/recipes`;
        } 
        else 
        {
            fitnessPlan = "Sorry, we don't have a specific fitness plan for your age, weight, and height combination at the moment.";
            nutritionPlan = "Sorry, we don't have a specific nutrition plan for your age, weight, and height combination at the moment.";
        }
        // Display the generated plans on the webpage
        fitnessResults.textContent = fitnessPlan;
        nutritionResults.textContent = nutritionPlan;
    });
});
