import classes from'./AvailableMeals.module.css' 
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'soshi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A German Speciality',
        price: 22.99,
    },
    {
        id: 'm3',
        name: 'Burger',
        description: 'Raw meat',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Boowl',
        description: 'Green veg',
        price: 10.99,
    },
];

const AvailableMeals = () => {
const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>) 
return(
<section className={classes.meals}>
   <ul>{mealsList}</ul> 
</section>
);

};

export default AvailableMeals;