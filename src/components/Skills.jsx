import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import styled from "styled-components";
import "animate.css"


// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledSkills = styled.div``;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

    .figureCt{
    display:flex;
    }
    figure{
      margin:0 auto;
      width: fit-content;
      &:hover{
        transform: scale(1.5);
      }
    }
      &:hover {
        color: #61DAFB;   
      
      }

      @media screen and (max-width: 767px) {
        .figureCt{
          margin-bottom: 2rem;
        }
      }
    `;

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <StyledSkills>
      <Element name={"Skills"} id="skills">
        <section className="section">
          <Container className="text-center">
            <Title>
              <h2>Skills</h2>
              <div className="underline"></div>
            </Title>
            <Row className="mt-3 align-items-center">
              {skillData.map((skills) => {
                return (
                  <Col xs={4} key={skills.id} className="my-md-5">
                    <StyledLink
                      className="animate__animated animate__pulse"
                      href={skills.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="figureCt">
                      <figure>
                        {skills.skill}
                        <figcaption>{skills.name}</figcaption>
                      </figure>
                        
                      </div>
                    </StyledLink>
                  </Col>
                );
              })}
            </Row>
            {resume && (
              <a href={resume}>
                <Button
                  size="lg"
                  variant={
                    theme === "light" ? "outline-dark" : "outline-light"
                  }
                  className="mt-5"
                >
                  R&eacute;sum&eacute;
                </Button>
              </a>
            )}
          </Container>
        </section>
      </Element>
    </StyledSkills>
  );
}
