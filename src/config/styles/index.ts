import { createGlobalStyle } from "styled-components";
import { theme } from "../../helpers/themes";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-moz-selection { /* Code for Firefox */
      color: #fff;
      background: #da0812;
    }

    ::selection {
      color: #fff;
      background: #da0812;
    }
  }

  body {
    font-family: 'Chivo', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-style: normal;
    margin: 0 auto;
    width: auto;
    -webkit-font-smoothing: antialiased;
  }
  
  :focus {
    outline: none;
  }

  .carousel .control-dots .dot {
    border-radius: ${theme.space["x1/4"]} !important;
    width: ${theme.space.x5};
    height: ${theme.space.x1};
    background: ${theme.colors.neutral["200"]};
    box-shadow: none;
  }

  .carousel .control-dots .selected {
    width: ${theme.space.x6};
    background: ${theme.colors.primary["200"]};
  }
`;
