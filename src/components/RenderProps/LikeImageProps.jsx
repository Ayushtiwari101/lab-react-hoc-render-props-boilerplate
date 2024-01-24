import React from "react";
import CommonProps from "../RenderProps/CommonProps";

export default function LikeImageProps() {
  return(
    <CommonProps>
      {
        ({like,handleLike}) =>(
          <button onClick={handleLike}> Like Image {like}</button>
        )
      }
    </CommonProps>
  )
}
