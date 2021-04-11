import * as images from "./../img";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./../components/slick.scss";
import "./../components/slick-theme.scss";

export default function Section({
  key,
  bgColor = "#ffffff",
  ui,
  title,
  description,
  gallery
}) {
  const sliderOptions = {
    infinite: true,
    slidesToShow: 6,
    dots: true,
    centerMode: true,
    initialSlide: 0,
    // prevArrow={<div />}
    // nextArrow={<div />}
    customPaging: function (i) {
      return (
        <span>
          <div
            className="owl-dot-el-1"
            style={{ backgroundColor: bgColor }}
          ></div>
          <div
            className="owl-dot-el-2"
            style={{ backgroundColor: bgColor }}
          ></div>
          <div
            className="owl-dot-el-3"
            style={{ backgroundColor: bgColor }}
          ></div>
        </span>
      );
    },
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section key={key} className={ui} style={{ background: bgColor }}>
      <h2>{title}</h2>

      <p className="desc" dangerouslySetInnerHTML={{ __html: description }}></p>

      {Object.entries(gallery).map((gallery) => {
        return (
          <>
            <h3>
              {(gallery[0] === "iphone" && "iPhone") ||
                (gallery[0] === "ipad" && "iPad") ||
                (gallery[0] === "desktop" && "Desktop App") ||
                (gallery[0] === "ipadlandscape" && "iPad Landscape")}
            </h3>

            <Slider {...sliderOptions} className={gallery[0]}>
              {gallery[1].map((image) => (
                <img src={images[image]} alt="" />
              ))}
            </Slider>
          </>
        );
      })}
    </section>
  );
}

Section.propTypes = {
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  ui: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  gallery: PropTypes.object
};
