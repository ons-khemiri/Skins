import React from "react";
import { Carousel } from "react-bootstrap";

const Home=()=>{
    return (
    <header>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.nimbu.io/s/0avhbyt/social/1555405680/Cosmetics%20Social.jpg?yx94jm4"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Be your own kind of Beautiful</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/beautiful-woman-with-different-skin-types-picture-id909258254?k=20&m=909258254&s=170667a&w=0&h=RkImQjzEBu5jzgAkI5kkJdkahr5dnntxBatNMjhkWsc="
          alt="Second slide"
        />
  <Carousel.Caption>
           <p>Give your skin a little Love</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/07/28/83/360_F_207288394_nefpexoySLbf72BN5Ru4cSHbo6GQ37kh.jpg"
          alt="Third slide"
        />
<Carousel.Caption>
          <p>
            A healthy skin assures healthy Smile
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </header>
)};

export default Home;