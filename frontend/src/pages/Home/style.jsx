import styled from "styled-components";

export default styled.div`
  background-color: var(--orange);

  p {
    font-family: var(--font-family);
  }
  @media screen and (max-width: 700px) {
    img {
      height: auto;
      width: 90vw;
    }
    p {
      justify-content: center;
    }
  }
`;
