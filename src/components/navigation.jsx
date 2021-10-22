import { useHistory } from "react-router";
import HeaderInfoLink from "./header-info-link";
import backIcon from "./../img/back_arrow.svg";
import { Container } from "reactstrap";

export default function Navigation({ items }) {
  const history = useHistory();

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
            <div className="mr-auto">
              <h1>Ivan Suvak Martinovic</h1>
            </div>
            <div className="header-info-links">
              {items?.map((headerLink) => {
                console.log(headerLink);
                return <HeaderInfoLink {...headerLink} />;
              })}
            </div>
          </div>
        </div>
        <p className="col-12 mt-4">
          Front-End Web Designer, iOS and Android Mobile App Designer, UX/UI,
          WordPress, Photographer Currently in Montréal, Canada, looking for a
          new and challenging position as a Front-end developer or UI/UX
          designer where I can create digital magic and elevate user experience
          to the next level.
          <br />
          <br />
          <strong>Working on a closed work permit in Canada</strong> and willing
          to relocate anywhere in Canada.
        </p>
      </Container>
    </Container>
  );
}
