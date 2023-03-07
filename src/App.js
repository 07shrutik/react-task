import './App.css';
import Head1 from './Head1';
import Fields from './Fields';
import Btn from './Btn';

function App() {
  return (
    <div className='container'>
      <Head1 content="Register here..."/>
      <Fields />
      <Btn btn="Submit"/>
    </div>
  );
}

export default App;