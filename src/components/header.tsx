import * as React from 'react';
import "./header.css";
import Nav from './nav';

export interface IHeaderProps {
  logoIcon: string;
  userName: string;
}

function Header({ userName, logoIcon}: IHeaderProps) {
  return (
    <header className="App-header">
        <img src={logoIcon} className="App-logo" alt="logo" />
        <Nav />
        <span className="User-info">{userName}</span>
    </header>
  );
}

export default Header;
