import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f8;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;

  span {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0 1rem;
  }

  input[type=text] {
    margin: 0 0.5rem;
    width: 18rem;
    padding: 0.9rem;
    font-size: 1.1rem;
    border-radius: 100px;
  }

  input[type=submit] {
    margin: 0 0.5rem;
    width: 5rem;
    padding: 0rem;
    font-size: 1.1rem;
    border-radius: 60px;

    &:hover {
      cursor: pointer;
      background-color: #414040;
      transition: all 200ms ease;
    }
  }
`;