import styled from "styled-components";

export const Container = styled.div`
 
  border-bottom: 3px solid #dadada;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start; 
  background-color:#A69EB0;
  padding: 0.6rem 3rem;
 
  
`;

export const Logo = styled.a`
padding: 0 0.3rem;
display: flex;
list-style: none;
margin-bottom: 0px;
background:transparent;




img {
    width: 5rem;
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
  margin-left:-20px;
   
  
  li {
   
    color:  white;
  
    padding: 0 0.4rem;
    font-size: 1.8rem;
    display: fixed;
    align-items: center;

  }
  
    a {
      text-decoration: none;
      color:  #000;
      font-weight: 800;
      padding: 0 1.0rem;
      font-size: 1.2rem;
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