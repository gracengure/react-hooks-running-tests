import React from "react";

function Article({ content }) {
  
   
    return <div>{content || "please pass this test"}</div>;
  
}

export default Article;
