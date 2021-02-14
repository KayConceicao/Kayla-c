import styled from "styled-components";

export const FlexAround = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Bio = styled.div`
  color: #14664A;
  z-index: 2;
  padding: 3rem;
`;

export const Image = styled.div`
  overflow: hidden;
  width: 45%;
  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }
`;