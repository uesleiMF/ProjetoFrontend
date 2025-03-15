import styled from "styled-components";

export const Container = styled.div`
 
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start; 
  background-color:#aa67d7;
  padding: 0.6rem 2rem;
 
  
`;

export const Logo = styled.a`
padding: 0 0.1rem;
display: flex;
list-style: none;
margin-bottom: 0px;
background:transparent;




img {
    width: 4rem;
    margin: 0 0.9rem;
    border-radius: 25%;
    margin-top: auto;
    margin-left:-25px;
    

  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0px;
  background:transparent;
  margin-left:-40px;
  li {
    
    a {
      text-decoration: none;
      color:  #000;
      font-weight: 700;
      padding: 0 0.5rem;
      font-size: 0.9rem;
      display: flex;
      align-items: center;

      span {
        padding: 0 0.2rem;
      }

      &:hover {
        color: white;
        cursor: pointer;
        transition: all 200ms ease;
      }
    }
  }
`;