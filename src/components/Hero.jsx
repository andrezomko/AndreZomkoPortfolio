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
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));
  font-family: "Busorama ITC Std", helvetica;
  
@font-face {
  font-family:"Busorama ITC Std" ;
  src: url('../fonts/Busorama ITC Std Bold.otf');
}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: transparent; */
    /* background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(38deg, rgba(244,242,232,1) 30%, rgba(12,12,12,1) 60%, rgba(97,218,251,1) 100%)"
        : "linear-gradient(38deg, rgba(250,175,0,1) 20%, rgba(12,12,12,1) 50%, rgba(97,218,251,1) 100%)"}; */
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

/* REACT LOGO ANIMATION: -------------------------------- */
@media (prefers-reduced-motion: no-preference) {
  .hero-img {
    animation: ${puffInCenter} 1s ease-in-out forwards,
               ${Spin} infinite 20s linear 1s;
  }
}

//QUEBRA MINIMA
@media screen and (max-width: 550px) {
  background: transparent;

}


  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) center center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
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
