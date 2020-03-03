// 学习教程
/* 
  https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tutorials/React.html
*/


import * as React from 'react';
import './App.css';
import Header from './components/header';


import logo from './logo.svg';

const userInfo = {
  logoIcon: logo,
  userName: "赵兴来",
};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header {...userInfo}/>
      </div>
      
    );
  }
}

export default App;
