import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --blue: #5429CC;
  --green: #33CC95;
  --red: #E62E4D;
  --blue-ligth: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffffff;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //Font-size defalut: 16px. 1rem = 16px!
  html{
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [desabled] {
    opacity:0.6;
    cursor: not-allowed;
  }

`