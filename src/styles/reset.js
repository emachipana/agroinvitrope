import { css } from "@emotion/react";
import { colors } from "./colors";
import { font } from "./font";

export const reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 4px;
  }

  li::before {
    content: "\\2022";
    color: ${colors.secondary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1.5em;
  }

  body {
    font-family: ${font.primary};
    color: ${colors.gray.primary};
    font-size: 1rem;
  }

  // reset scrollbar

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, .6);
  }
`;
