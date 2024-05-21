import React from "react";
import photo1 from "../../assets/pr-1.jpg";
import photo2 from "../../assets/pr-2.jpg";
import photo3 from "../../assets/pr-3.jpg";
import photo4 from "../../assets/pr-4.jpg";
import photo5 from "../../assets/pr-5.jpg";
import photo6 from "../../assets/pr-6.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="projects-all">
          <h1>My Projects</h1>
          <div className="projects-wrapper">
            <Swiper
              cssMode={true}
              loop={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="project-1">
                  <img src={photo1} alt="" />
                  <Link to={"https://computer-sigma.vercel.app/"}>
                    View project
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-1">
                  <img src={photo2} alt="" />
                  <Link to={"https://products-saidaziz.vercel.app/"}>
                    View project
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-1">
                  <img src={photo3} alt="" />
                  <Link to={"https://mohid-saidaziz.vercel.app/"}>
                    View project
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-1">
                  <img src={photo4} alt="" />
                  <Link to={"https://bayern-saidaziz.vercel.app/"}>
                    View project
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-1">
                  <img src={photo5} alt="" />
                  <Link to={"https://exam-6-delta.vercel.app/"}>
                    View project
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-1">
                  <img src={photo6} alt="" />
                  <Link to={"https://e-commm-saidaziz.vercel.app/"}>
                    View project
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
