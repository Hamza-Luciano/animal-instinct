import styled from "styled-components";

export default styled.div`
  background-color: var(--yellow);
  color: var(--black);
  text-shadow: 2px 2px 5px black;
  box-shadow: 2px 2px 5px black;
  height: 30vh;
  width: 70vw;
  position: relative;
  bottom: 10vh;
  margin: auto;
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 700px) {
    /* height: 20vh;
    width: 70vw; */
  }
`;
