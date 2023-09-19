import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profileCard.css";
const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
      </div> */}
      <div class="profileCard ml-5 mt-12">
        <div class="imgBx">
          <img src="https://res.cloudinary.com/ankur02sarkar/image/upload/v1695150637/2oszsXtmikzhRJANkJiX--transformed_gxturx.png" />
        </div>
        <div class="content">
          <div class="details">
            <h2>
              Dr. {doctor.firstName} {doctor.lastName}
              <br />
              <span className="!text-2xl">{doctor.specialization}</span>
            </h2>
            <div class="data">
              <h3>
                {doctor.experience} Years
                <br />
                <span>Experience</span>
              </h3>
              <h3>
                ₹{doctor.feesPerCunsaltation}
                <br />
                <span>Fees</span>
              </h3>
              <h3>
                {doctor.timings[0]} - {doctor.timings[1]}
                <br />
                <span>Timings</span>
              </h3>
            </div>
            <div class="actionBtn">
              <button
                onClick={() =>
                  navigate(`/doctor/book-appointment/${doctor._id}`)
                }
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
