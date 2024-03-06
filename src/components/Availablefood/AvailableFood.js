import React from "react";
import classes from './AvailableFood.module.css';
import Card from "../Ui/Card";
import FoodItem from "./FoodItem";

const DUMMY_FOODS = [

    {
        id: 'f1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'f2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'f3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },
      {
        id: 'f4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      },
]

const AvailableFood = () => {
    // const FoodList = DUMMY_FOODS.map((food) => <li>{food.name}</li>);
    const FoodList = DUMMY_FOODS.map((food) => <FoodItem 
    key={food.id} 
    id={food.id}
    name={food.name} 
    description={food.description} 
    price={food.price}>

    </FoodItem>);
    

    return(
     
        <section className={classes.foods}>
          <Card>
            <ul>{FoodList}</ul>
            </Card>
        </section>
       
    );
}
export default AvailableFood;