import React, { useEffect, useRef } from "react";
import "./Artworkproduct.css";
import Artwork from "../../../assets/artid.png";
import smallwork from "../../../assets/smallwork.png";
import artist from "../../../assets/usericon.png";
import vedio from "../../../assets/artvedio.png";
import image from "../../../assets/oneCompartment.png";

const Artworkproduct = () => {
  const cardRef = useRef(null);

  const handWheel = (event) => {
    event.preventDefault()
    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardRef.current.addEventListener("wheel", handWheel);
  }, []);
  return (
    <div>
      <div className="artworkproduct">
        <div className="workimage">
          <div className="artimage_sidesection">
            <img src={smallwork} alt="" />
            <img src={smallwork} alt="" />
            <img src={smallwork} alt="" />
            <img src={smallwork} alt="" />
            <img src={smallwork} alt="" />
          </div>
          <img src={Artwork} alt="" />
        </div>
        <div className="workdata">
          <h1>Art Title</h1>
          <h2>Rs. 50,00000</h2>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="purchasebutton">
            <button className="addtocart">Add to Cart</button>
            <button className="buynow">Buy Now</button>
          </div>

          <div className="artistmention">
            <h3>Artist Profile</h3>
            <div className="artist">
              <img src={artist} alt=" " className="artisticon" />
              <h3>Abijith EA</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="artdescription">
        <h2>Description</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="artworkvedio">
        <img src={vedio} alt="" />
      </div>
      <h1 className="relatedart">Related Artwork</h1>
      <div className="relatedworks" ref={cardRef}>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>

        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
        <div className="relatedwork">
          <img src={image} alt="" />
          <h3>One a compartment</h3>
          <h4> RS.1,00000</h4>
        </div>
      </div>
    </div>
  );
};

export default Artworkproduct;
