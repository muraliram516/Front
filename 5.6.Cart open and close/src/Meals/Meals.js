import { Fragment } from "react";
import MealsSummary  from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import MealItem from "./MealItem/MealItem";
import MealItemForm from "./MealItem/MealItemForm";
const meals = () => {
return (
<Fragment>
    <MealsSummary />
    <AvailableMeals /> 
    <MealItem/>
    <MealItemForm/>
</Fragment>
);

};
export default meals;