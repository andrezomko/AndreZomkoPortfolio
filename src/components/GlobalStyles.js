import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-light: #61DAFB;
  /* Primary Color */
  --primary: red;//??
  --primary-dark: #FFAF00;
  --border: 1px solid #61DBFB;
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --card-height: 30rem;
}

/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.name === "light" ? "black":"#FAAF00"};
}

a:hover {
  cursor: pointer;
}

.navbar {
  border-bottom:2px solid #61DAFB ;

}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
        color: var(--primary);
      }
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;


}

//main title 
.title { 
  font-family: 'Busorama ITC Std', cursive;
  font-weight: 900;
  font-size: 100px; 
  color: #212529;
  text-shadow: 2px 4px 1px #36393C;

}

.titleDarkMode{
  font-family: 'Busorama ITC Std', cursive;
  font-weight: 900;
  font-size: 100px; 
  text-shadow: 2px 4px 1px #DF0000;

}


.card {
  height: var(--card-height);
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}

.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
}


@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 3rem;
  }
  .form-group {
      max-width: 750px;
    }
}

 @media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
  }
`;

export default GlobalStyles;
