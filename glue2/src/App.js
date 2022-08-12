import React, { Component } from 'react'
import Main from "./components/Main";
import Person from "./components/Person";
import Header from "./components/Header"
import Footer from './components/Footer';

export default class App extends Component{
  render(){
    return (
      <>
      <Header />
      <Main />
      <Person />
      <Footer />
      </>
    )
  }

}