import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const theme = {
  colors: {},
  fonts: {
    title: {
      size: '',
      weight: '',
    },
    subtitle: {
      size: '',
      weight: '',
    },
    paragraph: {
      size: '',
      weight: '',
    },
    mention: {
      size: '',
      weight: '',
    },
  },
};
