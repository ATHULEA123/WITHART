import React from "react";
import "./Venue.css";
import gallery from "../../../assets/galleryimage.png";
import cafe from "../../../assets/cafeimage.png";
import publicimg from "../../../assets/publicimage.png";
import {Link} from "react-router-dom"

const Venue = () => {
  return (
    <div className="venue">
      <h1> VENUE</h1>
      <div className="venue_head">
     
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>

      <div className="venue_body">
      
        <div className="venue_body_head">
        <Link to="/exhibition">
          <img src={gallery} alt="" />
</Link>
          <h1>Gallery</h1>
        </div>
        <div className="venue_body_head">
        <Link to="/exhibition">
          <img src={cafe} alt="" />
          </Link>
          <h1>Cafe</h1>
        </div>
        <div className="venue_body_head">
        <Link to="/exhibition">
          <img src={publicimg} alt="" />
          </Link>
          <h1>Public</h1>
        </div>
     
      </div>
    </div>
  );
};

export default Venue;
