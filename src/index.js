import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './login';
import New from './New';
import ClassComponentDemo from './ClassComponent';
import ClassStateDemo from './ClassStateDemo';
import Book from './Book';
import EventHandling from './EventHandling';
import ButtonCounter from './ButtonCounter';
import ClassComponentText from './ClassComponentText';
import ComponentLifeCycle from './ComponentLifeCycle';

import FormDemo from './FormDemo';

//import ComponentLifeCycle from './ComponentLifeCycle';
import LoginText from './LoginText';
import UnControlledComponent from './UnControlledComponentDemo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Login/>
    <New/>
    <ClassComponentDemo/>
    <ClassStateDemo/>
    <Book/>
    <EventHandling/>
    <ButtonCounter/>
   <ClassComponentText/>
   <ComponentLifeCycle/>
   
   <FormDemo/>
   
    <LoginText/>
    <UnControlledComponent/>
    
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
