import React, { Fragment } from "react";
import FoodSummary from "./Foodsummary/FoodSummary";
import AvailableFood from "./Availablefood/AvailableFood";

const Food = () =>{
    return(
        <Fragment>
           <FoodSummary></FoodSummary>
          <AvailableFood></AvailableFood>
        </Fragment>
    );
}
export default Food;