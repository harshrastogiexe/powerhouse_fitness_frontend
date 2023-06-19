import React from "react";
import { useUser } from "../../hooks/useUserRole";
import Navbar from "../Navbar";
import gym from "../../image/Gym.avif";
import yoga from "../../image/Yoga.jpg";
import zumba from "../../image/Zumba.jpg"


import AdminNav from "../admin/Admin_Nav";
import UserNav from "../user/User_Nav";

export const Dashboard = () => {
  const { isLoggedIn, roleId } = useUser();

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={gym} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={yoga} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={zumba} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        

      </>
    );
  }
  return (
    <>
      {roleId === 1 && <AdminNav />}
      {roleId === 2 && <UserNav />}
    </>
  );
};
