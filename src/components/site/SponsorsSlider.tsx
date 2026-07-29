import "./sponsors.css";



import logo1 from "../../assets/lucus-escape.jpg";
import logo2 from "../../assets/influencer.png";
import logo3 from "../../assets/libreria-maria.png";
import logo4 from "../../assets/pax.jpg";

export function SponsorsSlider() {
  const logos = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4];

  return (
    <div className="overflow-hidden py-16">
      <div className="sponsors">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            className="h-40 mx-20 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}