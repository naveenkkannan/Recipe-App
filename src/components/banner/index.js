"use client";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // caption: 'All your recipes in one place'
  },
  {
    url: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // caption: 'Second Slide'
  },
  {
    url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // caption: 'Third Slide'
  },

  {
    url: "  https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // caption: 'Third Slide'
  },

  // https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
];

// const spanStyle = {
//   fontSize: "20px",
//   background: "#efefef",
//   color: "#000000",
//   padding: "10px",
//   borderRadius: "5px"
// };

export default function Banner() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              className="w-full h-[860px] sm:h-[635px] md:h-[1109px] lg:h-[727px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* <span style={spanStyle}>{image.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
