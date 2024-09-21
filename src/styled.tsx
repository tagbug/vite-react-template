import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Alliance;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
  }

  body,
  a {
    text-decoration: none;
    outline: 0;
  }

  a {
    color: unset;
  }

  .hideScrollbar::-webkit-scrollbar {
    display: none;
  }

  input,
  textarea {
    border: none;
    outline: none;
  }

  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 100%;
  margin: 0;
`;

export const Section = styled.section<{
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  background?: string;
  padding?: string;
  margin?: string;
  flex?: string;
  overflow?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  relative?: boolean;
}>`
  display: flex;
  flex-direction: ${prop => prop.flexDirection || "column"};
  gap: ${prop => prop.gap || "0px"};
  align-items: ${prop => prop.alignItems || "flex-start"};
  justify-content: ${prop => prop.justifyContent || "flex-start"};
  background: ${prop => prop.background || "none"};
  padding: ${prop => prop.padding || "0px"};
  margin: ${prop => prop.margin || "0px"};
  flex: ${prop => prop.flex || "1 1 auto"};
  overflow: ${prop => prop.overflow || "visible"};
  width: ${prop => prop.width || "auto"};
  height: ${prop => prop.height || "auto"};
  min-height: ${prop => prop.minHeight || "auto"};
  position: ${prop => (prop.relative ? "relative" : "static")};
`;

export const AbsoluteSection = styled(Section)<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;
  top: ${prop => prop.top || "auto"};
  right: ${prop => prop.right || "auto"};
  bottom: ${prop => prop.bottom || "auto"};
  left: ${prop => prop.left || "auto"};
`;

export const FlexRow = styled.div<{
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  background?: string;
  padding?: string;
  margin?: string;
  flex?: string;
  width?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: ${prop => prop.gap || "0px"};
  align-items: ${prop => prop.alignItems || "center"};
  justify-content: ${prop => prop.justifyContent || "flex-start"};
  background: ${prop => prop.background || "none"};
  padding: ${prop => prop.padding || "0px"};
  margin: ${prop => prop.margin || "0px"};
  flex: ${prop => prop.flex || "1 1 auto"};
  width: ${prop => prop.width || "auto"};
  flex-wrap: ${prop => (prop.wrap ? "wrap" : "nowrap")};
`;

export const RoundCard = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
}>`
  width: ${prop => prop.width || "auto"};
  height: ${prop => prop.height || "auto"};
  border-radius: ${prop => prop.borderRadius || "16px"};
  background: ${prop => prop.background || "#96ffe5"};
  img {
    width: 100%;
    height: 100%;
    border-radius: ${prop => prop.borderRadius || "16px"};
    object-fit: cover;
  }
`;

export const GridWrap = styled.div<{
  rowGap?: string;
  columnGap?: string;
  columnCount?: number;
  width?: string;
}>`
  width: ${prop => prop.width || "auto"};
  display: grid;
  grid-template-columns: repeat(
    ${prop => prop.columnCount || "auto-fill"},
    minmax(min-content, 1fr)
  );
  grid-row-gap: ${prop => prop.rowGap || "0px"};
  grid-column-gap: ${prop => prop.columnGap || "0px"};
`;

export const Divider = styled.hr<{
  width?: string;
  height?: string;
  border?: string;
  margin?: string;
}>`
  width: ${prop => prop.width || "100%"};
  height: ${prop => prop.height || "100%"};
  border: ${prop => prop.border || "1px solid #FFFFFF26"};
  margin: ${prop => prop.margin || "0px"};
`;
