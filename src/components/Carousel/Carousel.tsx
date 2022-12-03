import { useEffect, useState } from "react";
import dataCarousel from "../../api/Carousel.json";

interface Carousel {
  id: number;
  image: string;
  title: string;
  slug: string;
}

const defaultCarouselProps = {
  data: [],
};

function Carousel() {
  return (
    <>
      <div className="pt-20 pb-20">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            {dataCarousel.map((dataCarousel, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={dataCarousel.id}
                aria-label={"Slide" + " " + (dataCarousel.id + 1)}
              />
            ))}
          </div>
          <div className="carousel-inner relative w-full h-[200px] overflow-hidden rounded-lg">
            <div className="carousel-item active relative float-left w-full h-[200px]">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="w-full h-full object-cover bg-cover"
                alt="Santri"
              />
              <div className="carousel-caption block absolute text-center">
                <h5 className="text-xs">Santri Go International</h5>
              </div>
            </div>
            {dataCarousel.map((dataCarousel, index) => (
              <div
                key={index}
                className="carousel-item relative float-left w-full h-[200px]"
              >
                <img
                  src={dataCarousel.image}
                  className="h-full w-full object-cover bg-cover"
                  alt={dataCarousel.title}
                />
                <div className="carousel-caption block absolute text-center">
                  <h5 className="text-xs">{dataCarousel.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
