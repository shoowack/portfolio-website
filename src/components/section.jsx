import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import RichText from "@madebyconnor/rich-text-to-jsx";
import { getContrast } from "./../getContrast";
import FsLightbox from "fslightbox-react";
import("./../components/slick.scss");
import("./../components/slick-theme.scss");

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         bottom: "10px",
//         top: "unset"
//         postMessage
//       }}
//       onClick={onClick}
//     />
//   );
// }

export default function Section({
  backgroundColor = "#ffffff",
  title,
  description,
  gallery = []
}) {
  console.log(gallery);

  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const sliderOptions = {
    infinite: true,
    slidesToShow: 6,
    dots: true,
    centerMode: true,
    initialSlide: 0,
    prevArrow: <div />,
    // nextArrow: <SampleNextArrow />,
    customPaging: function (i) {
      return (
        <span>
          <div
            className="owl-dot-el-1"
            style={{ backgroundColor: backgroundColor }}
          ></div>
          <div
            className="owl-dot-el-2"
            style={{ backgroundColor: backgroundColor }}
          ></div>
          <div
            className="owl-dot-el-3"
            style={{ backgroundColor: backgroundColor }}
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
    <Container
      fluid
      style={{
        backgroundColor: backgroundColor
      }}
      className={`py-5 px-md-0 ${getContrast(backgroundColor)}`}
    >
      <FsLightbox
        toggler={toggler}
        // sources={productsImages[productIndex]}
        key={productIndex}
      />

      <Row className="py-5">
        <Col md={12}>
          <h2>{title}</h2>
        </Col>
        <Col md={12}>
          <Container fluid="lg" className="pt-2 pb-4 text-center">
            <RichText richText={description} />
          </Container>
        </Col>

        <Col md={12}>
          {gallery?.map((item, i) => {
            const { title, type, images } = item.fields;

            return (
              <>
                <h3>{title}</h3>
                <Slider
                  {...sliderOptions}
                  className={type.replace(/ /g, "-").toLowerCase()}
                >
                  {images?.map((image) => {
                    const {
                      file: { url }
                    } = image.fields;

                    // console.log(image);

                    return (
                      <img
                        src={url}
                        alt=""
                        onClick={() => {
                          setToggler(!toggler);
                          setProductIndex(1);
                        }}
                      />
                    );
                  })}
                </Slider>
                {i !== gallery.length - 1 && <hr />}
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

Section.propTypes = {
  bgColor: PropTypes.string,
  layout: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  gallery: PropTypes.array
};
