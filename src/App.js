import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import OnClickFunction from './Components/OnClickFunction'
import OnClickClass from './Components/OnClickClass'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import PersonList from './Components/PersonList'
import Form from './Components/Form'


const App = () => {
  return (
    <div className="App">
      {/*<Message />*/ }
      {/*<Greet firstName="Tsigabu" lastName="Birhanu"/>*/  }
      {/*<p> Thanks for welcoming</p>*/ }
      {/*<Greet firstName="Mitslal" lastName="Gebre"/>*/ } 
      {/* <Welcome />*/ } 
      {/*<Counter />*/}
      {/*<OnClickFunction />*/}
      {/*<OnClickClass />*/}
      {/*<EventBind />*/}
      <Form />
      <ParentComponent />
      <PersonList />
      
    </div>
  );
}
export default App;
