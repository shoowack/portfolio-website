import { useHistory } from "react-router";
import HeaderInfoLink from "./header-info-link";
import backIcon from "./../img/back_arrow.svg";
import { Container } from "reactstrap";

export default function Navigation() {
  const history = useHistory();
  const navigationData = require("./../data/navigation-data.json");
  const { name, description, headerInfoLinks } = navigationData;

  return (
    <Container fluid className="aboutme py-5">
      <Container fluid="lg">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <div>
              <a
                href="/"
                className="back-button mr-4"
                onClick={() => history.goBack()}
              >
                <img src={backIcon} alt="Go back" />
              </a>
            </div>
            <div className="mr-auto">{name && <h1>{name}</h1>}</div>
            <div className="header-info-links">
              {headerInfoLinks.map((headerLink) => (
                <HeaderInfoLink {...headerLink} />
              ))}
            </div>
          </div>
        </div>
        <p
          className="col-12 mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </Container>
    </Container>
  );
}
