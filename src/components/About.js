import {React,useContext} from "react";
import UserContext from "../utils/UserContext";
import FoodLogo from "../Images/FoodLogo.jpg";

const About = () =>{
  const { loggedInUser } = useContext(UserContext);
  return(
    <div>
    <div>Logged in user:{loggedInUser}</div>
     <div class="flex justify-center items-center">
      <img src={FoodLogo} alt="food logo"/>
     </div>
     <div class="flex justify-center items-center">
      <h1>
        This website is a web based platform to facilitate ordering food and gathers information about nearby restaurants and display the menu of restaurants 
      </h1>
     </div> 
    </div>
  );
};


export default About;