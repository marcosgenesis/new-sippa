import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:none;
    box-sizing:border-box;
  }
  *:focus{
    outline:none;
  }
  html,body,#root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing:antialiased;
    background:#F3F5F7;
  }
  body,input,button{
    font: 14px 'Roboto',sans-serif;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor:pointer;
  }
`;
