import React, { Component } from 'react'
import './header.css'
import ThemeContext from '../../Context/ThemeContext'

export default class Header extends Component {
    static contextType = ThemeContext
    
  render() {
    console.log(this.context);
    const light = "light";
    return (
      <div className={`header ${light} ${this.context.theme}`}>
        <div id="navbar" className='container'>
            <ul className='links'>
                <li><h3 className={`${this.context.theme}`}>Dilshod Normurodov</h3></li>
                <li><a href={'/'} className={`${this.context.theme}`}>Section two</a></li>
                <li><a href={'/'} className={`${this.context.theme}`}>Section three</a></li>
                <li><a href={'/'} className={`${this.context.theme}`}>Section four</a></li>
            </ul>

            <ul className='services'>
                <li><i className={`fa-brands fa-twitter fa-xl ${this.context.theme}`}></i></li>
                <li><i className={`fa-brands fa-figma fa-xl ${this.context.theme}`}></i></li>
                <li><i className={`fa-brands fa-instagram fa-xl ${this.context.theme}`}></i></li>
                <li><p  className={`${this.context.theme}`}>Mode: </p></li>
                <button className='btn' onClick={this.context.toggleMode}><i className={`fa-solid fa-circle-half-stroke fa-xl ${this.context.theme}`}></i></button>
            </ul>
        </div>
      </div>
    )
  }
}

