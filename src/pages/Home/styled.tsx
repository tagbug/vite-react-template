import styled from "styled-components";

export const HomeWrapper = styled.main<{
  gap?: string;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${prop => prop.gap || "0px"};

  * {
    margin: 0;
  }
`;
