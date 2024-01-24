import CommonHOC from './CommonHOC.jsx'
const LikeImageHOC = ({likeHandle, likeCount}) =>{

  return(
    <div>
      <button onClick={likeHandle}>Like Image {likeCount}</button>
    </div>
  )
}

export default CommonHOC(LikeImageHOC)