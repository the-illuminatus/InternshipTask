// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Sujit Bhalekar",
    date: "13 January, 2023",
    time: "9pm",
    imgUrl: img01,
    description:
      "Drive for maximum fuel efficiency. Accelerate gently. Maintain a steady speed. Anticipate traffic. Avoid high speeds. Coast to decelerate. ",
    quote:
      "Drive for maximum fuel efficiency. Accelerate gently. Maintain a steady speed. Anticipate traffic. Avoid high speeds. Coast to decelerate..",
  },

  {
    id: 2,
    title: "If your car battery is down",
    author: "Sujit Bhalekar",
    date: "13 January, 2023",
    time: "9pm",
    imgUrl: img02,
    description: "The most common way to deal with a dead battery is by jump-starting it. All you need to jump-start a car is a set of jumper cables and another car (a good Samaritan) with a functional battery.",
    quote: "The most common way to deal with a dead battery is by jump-starting it. All you need to jump-start a car is a set of jumper cables and another car (a good Samaritan) with a functional battery."  
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Sujit Bhalekar",
    date: "13 January, 2023",
    time: "9pm",
    imgUrl: img03,
    description: "The smart way to give a trip is the no-surprise method where you and the recipient collaborate on where to go and when; then, you act as the travel agent by putting it all together.",
    quote: "The smart way to give a trip is the no-surprise method where you and the recipient collaborate on where to go and when; then, you act as the travel agent by putting it all together."
  },
];

export default blogData;
