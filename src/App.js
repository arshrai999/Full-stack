import logo from './logo.svg';
import './App.css';
import Addproduct from './Component/Signup';
import FetchAPI from './Component/mylist';
import ShowData from './Component/show';
import Edit from './Component/edit';

function App() {
  return (
    <div >
      <Addproduct/>
      <ShowData/>
      <Edit/>

    </div>
  );
}

export default App;
