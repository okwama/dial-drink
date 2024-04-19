import {css} from "styled-components";

export const mobile = (props) =>{
    return css`
    @media only screen and (max-width: 380px) {

  ${props}
 }
    `;
};

// copy above and increase max width for aproriate screen size