import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="hero-wrap js-fullheight d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/images/bg_5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        height: "100vh",
        color: "#fff",
      }}
    >
      {/* Overlay mờ */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Nội dung chính */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center align-items-center text-center">
          <div
            className="col-md-10 d-flex flex-column flex-md-row align-items-center justify-content-center"
            data-aos="fade-up"
          >
            {/* Text bên trái */}
            <div
              className="hero-text me-md-5"
              style={{
                maxWidth: "600px",
                textAlign: "center",
              }}
            >
              <h1
                className="mb-3"
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  color:"white",
                }}
              >
                Welcome to TripTick
              </h1>

              <h2
                className="mb-3"
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Discover Your Favorite Place with Us
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#eee",
                }}
              >
                Travel to any corner of the world, without going around in circles.
              </p>
            </div>

            {/* Nút video bên phải — có khoảng cách xa hơn */}
            <div
              className="hero-video mt-4 mt-md-0 ms-md-5"
              data-aos="zoom-in"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://vimeo.com/45830194"
                target="_blank"
                rel="noreferrer"
                className="icon-wrap d-flex align-items-center justify-content-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  color: "#000",
                  fontSize: "40px",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  marginLeft: "80px", 
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                ▶
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
