import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo,moreInfo2 } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`

  margin:10px 0 auto;


  p {
    font-size: 1.25rem;
  }

  img{
    border-radius: 50%;
    transform: rotate(-12deg);
  }

  .mainct{
    display:flex;
    gap: 12rem;
    margin:0 auto;
  }


  @media screen and (max-width: 375px) {

      margin-left: 30vw;
    
  }
  @media screen and (max-width: 300px) {

      margin-left: 37vw;

  }

  @media screen and (max-width:799px){
    margin: 0 auto;
    width: 90vw;

    .mainct{
      flex-direction: column;
      gap: 1.5rem;
      margin: 0 auto;
    }
    
    .github-avatar-a {
      margin: 0 auto;
      
    }
    .github-avatar-b {
        display: none;
    }}

    @media screen and (min-width:800px){
      .github-avatar-a{
        display:none;
      }
    }
 
`;

export default function AboutMe() {
  const { avatar_url } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
  <StyledAboutMe className="section">
    <Container>
      <Container className="d-flex">
        <Title>
          <h2>About Me</h2>
          <div className="underline"></div>
        </Title>
      </Container>
      <div className="mainct">
            {/* Imagem A */}
            <img
              src={avatar_url}
              alt="GitHub Avatar A"
              loading="lazy"
              style={{ width: "15rem", height: "15rem" }}
              className="github-avatar-a"
            />
           {/* ABOUTME  */}
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{moreInfo}</p>
                <p>{moreInfo2}</p>
              </Container>
            </Col>
          </Row>
              {/* Imagem B */}
          <img
                src={avatar_url}
                alt="GitHub Avatar B"
                loading="lazy"
                style={{ width: "15rem", height: "15rem" }}
                className="github-avatar-b"
              />
      </div>
    </Container>
  </StyledAboutMe>
</Element>

  
  
  );
}
