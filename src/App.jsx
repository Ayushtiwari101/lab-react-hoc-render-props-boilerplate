import './App.css';
import LikeImageHOC from './components/HOC/LikeImageHOC'
import LikePostHOC from './components/HOC/LikePostHOC'
import LikeImageProps from './components/RenderProps/LikeImageProps';
import LikePostProps from './components/RenderProps/LikePostProps';


function App() {
  return (
    <div>
      {/* <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div> */}

      {/* {Part 1- HOC Logic} */}

      <h1>Blog Using HOC</h1>
      <div className='buttons'>
      <LikeImageHOC/>
      <LikePostHOC/>
      </div>
    

      {/* // {Part 2- Render Props} */}
      <h1>Blog using Props</h1>
      <LikeImageProps/>
      <LikePostProps/>
    </div>
  );
}

export default App;