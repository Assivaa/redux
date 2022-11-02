import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
  );
};
export default Header;

