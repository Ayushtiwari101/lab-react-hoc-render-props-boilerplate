import React, { Children } from "react";
import CommonProps from "../RenderProps/CommonProps";

export default function LikeImageProps() {
  return(
    <CommonProps>
      {
        ({like,handleLike}) =>(
          <button onClick={handleLike}> Like Post {like}</button>
        )
      }
    </CommonProps>
  )
}
