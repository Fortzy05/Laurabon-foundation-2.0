import React from 'react'
import image1 from "../assets/Rectangle 8.png"



const foundationData = [
  {
    heading: "OUR PURPOSE",
    title: "WHY WE DO WHAT WE DO",
    image: { image1 },
    text: "Laura Bon Foundation is dedicated to improving the lives of vulnerable individuals and communities around the world through education, health care, and empowerment programs.",
  },
  {
    heading: "OUR PURPOSE",
    title: "WHY WE DO WHAT WE DO",
    image: { image1 },
    text: "Laura Bon Foundation is dedicated to improving the lives of vulnerable individuals and communities around the world through education, health care, and empowerment programs.",
  },
  {
    heading: "OUR PURPOSE",
    title: "WHY WE DO WHAT WE DO",
    image: { image1 },
    text: "Laura Bon Foundation is dedicated to improving the lives of vulnerable individuals and communities around the world through education, health care, and empowerment programs.",
  },
  {
    heading: "OUR PURPOSE",
    title: "WHY WE DO WHAT WE DO",
    image: { image1 },
    text: "Laura Bon Foundation is dedicated to improving the lives of vulnerable individuals and communities around the world through education, health care, and empowerment programs.",
  },
  {
    heading: "OUR PURPOSE",
    title: "WHY WE DO WHAT WE DO",
    image: { image1 },
    text: "Laura Bon Foundation is dedicated to improving the lives of vulnerable individuals and communities around the world through education, health care, and empowerment programs.",
  },
  {
    heading: "OUR PURPOSE",
    title: "WHY WE DO WHAT WE DO",
    image: { image1 },
    text: "Laura Bon Foundation is dedicated to improving the lives of vulnerable individuals and communities around the world through education, health care, and empowerment programs.",
  },
];

export default function Foundation() {
  return (
    <div className="flex justify-center">
      <p className="py-5 px-2 md:px-52 flex-col text-center text-gray-600 md:text-2xl text-base font-serif">
        <span>
          "One of the greatest gifts we have as humans is the ability to love
          and care for one another. As compassionate beings, we have a
          responsibility to extend that love and care to those who are in need."
        </span>
        <p className="py-5 ">
          Laura Bon foundation is a mission arm of Laura Bon Ministries. Our
          goal is simply to help as many hurting people as we possibly can, to
          alleviate human suffering and to help Christians grow in their faith.
        </p>
      </p>
    </div>
  );
}
