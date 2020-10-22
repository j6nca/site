import {createGlobalStyle} from 'styled-components';
export const Style = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Roboto, sans-serif;
        transition: all 0.25s linear;
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        opacity: 0.5;
    }
    a:hover{
        opacity: 1.0;
    }
    html{
        scroll-behavior: smooth;

    }
    li{
        list-style: none;
        font-size: 3vh;
    }
    .navbar{
        position: fixed;
      
        height: 100vh;
        left: 0;
        width: 25%;
    }
    #lightswitch{
        
    }
    #content{
        position: relative;
        left:25%;
        width:50%;
      }
      #landing h1{
        font-size: 15vh;
      }
      h1{
        font-size: 7vh;
      }
      p{
        font-size: 3vh;
      }
      #landing span{
        font-size: 5vh;
      }
      #landing, #about, #work{
        height: 100vh;
      }
      #contact ul {
        padding-left:0;
      }
      #contact ul li{
        display: inline;
        padding-right: 50px;
      }
      .Component-root-1{
        margin: 0 !important;
      }
      .project{
          height: 250px;
          
      }
      .project-thumb{
          width: 48%;
          height: 100%;
          float: left;
          background-color:red;
      }
      .project-title{
        width: 48%;
        height: 100%;
        float: right;
        margin-left:10px;
    }
      `;
