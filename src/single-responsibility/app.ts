import myLogger from "./looger";
/**
 * A class should have one, and only one, reason to change.
 * calorieTracker class habe onl7y one reason to change,thai is how calories calculate
 * Logger functionaly came from  another module.
 */
class calorieTracker{

    maxCalories: number;
    currentCalories: number;

    constructor(maxCalories:number){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    increateCalories(calories:number){
        this.currentCalories+=calories;
        if(this.currentCalories > this.maxCalories){
            myLogger('Max Calories Exceeds');
          
        }else{
            myLogger('Not Max Calories Exceeds');
            
        }
    }

}

const calories = new calorieTracker(200)
calories.increateCalories(100)
calories.increateCalories(250)


