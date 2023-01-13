// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
// import img02 from "../all-images/cars-img/creta.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  

  {
    id: 1,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "21kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Lamborghini Aventador (Spanish pronunciation: [aβentaˈðoɾ]) is a mid-engine sportscar produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a Spanish fighting bull that fought in Zaragoza, Aragón, in 1993. The Aventador is the successor for the Murciélago and was made by hand in Sant'Agata Bolognese, Italy.",
  },

  

  {
    id: 2,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Camry nameplate was delegated to a four-door sedan model in Japan, known as the Celica Camry. When Camry became an independent model line in 1982 with the V10 series, Toyota made it available as a five-door liftback in addition to the sedan. The subsequent Camry V20 series, debuted in 1986 with a station wagon substituting the liftback body variant and Japan-only hardtop sedans making their debut. The company replaced the V20 in 1990 with the V30 sedan and hardtop, but this model series was exclusive to Japan.",
  },

  {
    id: 3,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: 
    "The Lamborghini Murciélago is a sports car produced by Italian automotive manufacturer Lamborghini between 2001[8] and 2010. The car was first available in North America for the 2002 model year. The Murciélago was Lamborghini's first new design in eleven years, and was also the brand's first new model under the ownership of German parent company Audi, which is owned by Volkswagen. The car is designed by Peruvian-born Belgian Luc Donckerwolke, Lamborghini's head of design from 1998 to 2005 "
  },

  {
    id: 4,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: "Bayerische Motoren Werke AG, abbreviated as BMW is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria."
  },

  {
    id: 5,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. "
  },

   {
    id: 6,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: "Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services."  
  },
  

  {
    id: 7,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: "Rolls-Royce was a British luxury car and later an aero-engine manufacturing business established in 1904 in Manchester by the partnership of Charles Rolls and Henry Royce"
   },
  {
    id: 8,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide" 
  }
];

export default carData;
