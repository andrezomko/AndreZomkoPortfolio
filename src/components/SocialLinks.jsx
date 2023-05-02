import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { FaGithub} from "react-icons/fa";

//css AQUI  MEXE NOS LINKS
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons animate__animated animate__slower animate__fadeIn animate__delay-3s"
      >
        <FaGithub />
      </a>
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons animate__animated animate__slower animate__fadeIn animate__delay-3s">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
