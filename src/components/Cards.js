import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>
        Discover the WONDERS that Await at these Extraordinary Destinations!
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Where dreams become reality, discover the opulence of Dubai's shimmering desert oasis."
              label="DreamSands"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Fall in love with the romantic charm of Paris, where art, history, and exquisite cuisine create an enchanting tapestry of experiences."
              label="LuxuryLove"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Uncover the treasures of Greece, where turquoise waters, sun-kissed islands, and ancient ruins transport you to a realm of mythical beauty."
              label="MythicalCharms"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Indulge in la dolce vita as you wander through Italy's picturesque streets, savoring delectable cuisine and marveling at timeless art."
              label="BellaVita"
              path="/products"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Step into a world where East meets West, where ancient ruins and vibrant bazaars weave a captivating tapestry in Turkey."
              label="MysticTales"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-6.jpg"
              text="Where history meets innovation, embark on a journey through London's iconic streets and embrace a city that seamlessly blends tradition and modernity."
              label="TimelessElegance"
              path="/products"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Immerse yourself in a tapestry of vibrant colors, rich traditions, and diverse landscapes as you discover the kaleidoscope of wonders that is India."
              label="EnchantingTales"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="In the city that never sleeps, embrace the energy of New York and let its iconic skyline ignite your soul."
              label="CityPulse"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="From breathtaking landscapes to warm-hearted locals, Canada invites you to explore its vast wonders and create unforgettable memories."
              label="NatureScape"
              path="/sign-up"
            />
            <CardItem
              src="images/img-10.jpg"
              text="Immerse yourself in a vibrant fusion of cultures and indulge in the futuristic wonders of Singapore."
              label="UrbanGem"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
