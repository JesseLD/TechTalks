import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  align-items: flex-start;
  text-align: left;
  margin: 0px 0px 0px 20px;

  .post-info-container{
    margin-left: 15px;
  }
  .post-date{
    margin: 2px 0;
    color: #777;
  }
  .post-title{
    font-weight: bold;
    color: #252525;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 260px;
    margin: 2px 0;
  }
  .post-description{
    color: #252525;
    flex-direction: column;
    font-size: 12px;
    max-width: 650px;
    max-height: 60px;
    padding: 2px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
  }

  .post-image{
    width: 20vw;
    max-width: 220px;
  }
  .post-taglist{
    display: flex;
    li{
      font-weight: bold;
      color: #252525;
      list-style: none;
      margin: 10px 10px 10px 0;
      padding: 5px 15px;
      border: 2px solid #252525;
      border-radius: 100px;
      font-size: 10px;
    }
  }
`