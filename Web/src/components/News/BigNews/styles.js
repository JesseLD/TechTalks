import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  text-align: left;

  
  .post-date{
    margin: 10px 0;
    color: #777;
  }
  .post-title{
    font-weight: bold;
    color: #252525;
    font-size: 32px;
    margin: 10px 0;
  }
  .post-description{
    color: #252525;
    flex-direction: column;
    font-size: 20px;
    max-width: 650px;
    max-height: 60px;
    padding: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
  }
  .post-image{
    width: 50vw;
    max-width: 550px;
  }
  .post-taglist{
    display: flex;
    li{
      font-weight: bold;
      color: #252525;
      list-style: none;
      margin: 20px 10px 20px 0;
      padding: 5px 15px;
      border: 3px solid #252525;
      border-radius: 100px;
    }
  }
`