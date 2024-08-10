import React from "react";
import "./Artworks.css";
import artimage from "../../../assets/art.png";
const Artworks = () => {
  return (
    <div className="artcollections">
      <div className="artworks">
        <img src={artimage} className="artworkimage" />
        <h4 className="artworktitle">Artwork Title</h4>
        <h4 className="artsize">art size</h4>
        <h4>Rs.500000</h4>
      </div>
      <div className="artworks">
        <img src={artimage} className="artworkimage" />
        <h4 className="artworktitle">Artwork Title</h4>
        <h4 className="artsize">art size</h4>
        <h4>Rs.500000</h4>
      </div>
      <div className="artworks">
        <img src={artimage} className="artworkimage" />
        <h4 className="artworktitle">Artwork Title</h4>
        <h4 className="artsize">art size</h4>
        <h4>Rs.500000</h4>
      </div>
      <div className="artworks">
        <img src={artimage} className="artworkimage" />
        <h4 className="artworktitle">Artwork Title</h4>
        <h4 className="artsize">art size</h4>
        <h4>Rs.500000</h4>
      </div>
       <div className="artworks">
        <img src={artimage} className="artworkimage" />
        <h4 className="artworktitle">Artwork Title</h4>
        <h4 className="artsize">art size</h4>
        <h4>Rs.500000</h4>
      </div>
    </div>
  );
};

export default Artworks;
