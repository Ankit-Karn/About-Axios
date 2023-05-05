import Get from './component/AboutGet';
import Post from './component/AboutPost';
import Put from './component/AboutPut';
import Patch from './AboutPatch';
import Delete from './AboutDelete';

function App() {
  return (
    <div>
      <Get />
      <Post />
      <Put />
      <Patch />
      <Delete />
    </div>
  );
}

export default App;
