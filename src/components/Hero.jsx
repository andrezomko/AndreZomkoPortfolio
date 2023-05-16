import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { FaChevronCircleDown } from "react-icons/fa";
// Media
import Logo from "../images/logo.svg";
import { Light, Dark } from "../data";
import "animate.css"
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin, puffInCenter} from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";
import { useAppContext } from "../appContext";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: calc(100vh - var(--nav-height));
  font-family: "Busorama ITC Std", 'Limelight', helvetica; //'Limelight' Oswald
  background: ${({ theme }) =>
    theme.name === "light"
      ? `url(${Light}) top center no-repeat`
      : `url(${Dark}) top center no-repeat`};
  background-size: cover;

  /* Overlay for contrast */
  &::after {
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: -1;
  }

  .down-container {
    height: 9rem;
  }

  /* REACT LOGO ANIMATION: -------------------------------- */
  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${puffInCenter} 1s ease-in-out forwards,
                 ${Spin} infinite 20s linear 1s;
    }
  }

  @media (min-width: 768px) and (max-width: 770px) {
  width: 50rem;
}

  /* Media query para dispositivos com largura inferior a 544px */
  @media (max-width: 544px) {
    min-height: calc(100vh - var(--nav-height) - 9rem); /* Subtrai a altura do down-container */
    width:34rem;
  }
  @media (max-width: 300px) {
    min-height: calc(100vh - var(--nav-height) - 6rem); /* Subtrai a altura do down-container */
    width:34rem;
  }

`;



  

export default function Hero() {
  const { theme} = useAppContext();

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
          {/*TITLE ANIMATION:  https://animate.style/     */}
        <h1  className= {` mb-3 display-3 ${theme ==='dark' ? 'titleDarkMode' : 'title'}`}>
          <p className="animate__animated animate__fadeInLeft animate__slow animate__delay-1s ">André</p>
          <p className="animate__animated animate__fadeInUpBig animate__slower animate__delay-1s " >Zomkowski</p>
        </h1>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks/>
            </div>
          </Col>
          <Col className="d-none d-md-block">

            {/*React Logo */}
            <img
              src={Logo}
              alt="React Logo"
              className=" w-75 mx-auto hero-img"
            />
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <FaChevronCircleDown />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
