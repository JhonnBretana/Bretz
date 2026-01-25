import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import EliClip from "../Assets/Video/EliClip.mp4";
function Intership() {
  return (
    <div className="flex gap-10 items-center bg-gradient-to-br from-blue-500 to-purple-600  font-montserrat">
      <div>
        <video
          width="260"
          height="315"
          autoPlay
          muted
          loop
          controlsList="nodownload"
        >
          <source src={EliClip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-montserrat text-white font-bold">Endless Logic Innovation IT Solution</h2>
        <div className="flex items-center gap-2 justify-start mb-2">
          <FaMapMarkerAlt className="text-white text-xl" />
          <span className="text-xl  font-montserrat text-white">#18 Isidro Francisco St. Maysan Val-City</span>
        </div>
      </div>
    </div>
  );
}

export default Intership;