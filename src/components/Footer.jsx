import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: radial-(circle, rgba(97,218,251,1) 0%, rgba(47,47,47,1) 100%);


  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
//fixing the centralization problem:
@media screen and (max-width: 540px) {
margin-left: 26vw;
    width: clamp(20rem, 50%, 35rem)
    } 
  @media screen and (max-width: 375px) {
    margin-left: 30vw;
  }
  @media screen and (max-width: 320px) {
      margin-left: 35vw;
  }

`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks />
    </StyledFooter>
  );
}
