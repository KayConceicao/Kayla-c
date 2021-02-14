import React from "react";

// styles
import styled from "styled-components";

const KIconAnimation = () => {
  return (
    <HeaderTitle>
      <KIconAnimated viewBox="0 0 240 240" >
        <path
          d="M70.6 41.9s20.1 128.8 26.5 128.8c6.3 0 29.9-118.8 26.5-118.8s-4.1 42.5-10.2 69.9c-3.1 14.2-11.3 48.9-16.3 48.9-4.7 0 20.3-44 39.4-24.9s33.4 36.2 44.4 31.4 8.2-18.1 8.2-18.1"/>
      </KIconAnimated>
      <h1>ayla C</h1>
    </HeaderTitle>
  );
};

export const HeaderTitle = styled.div `
  display: flex;
  flex-flow: row;
  align-items: center;
  h1 {
    margin-left: -4rem;
    color: #6A5ACD;
    font-family: 'Roboto Slab';
    font-size: 3rem;
  }
`

const KIconAnimated = styled.svg `
  left: 0;
  top: 5%;
  z-index: 1;
  width: 60%;

  path{
    fill: none;
    stroke: #6A5ACD;
    stroke-width: 12px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-dasharray: 513;
    stroke-dashoffset: 513;
    animation: dash 3000ms cubic-bezier(.72,.22,.35,1) 666ms forwards;

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;

export default KIconAnimation;
