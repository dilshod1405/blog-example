import React, { Component } from 'react'
import './main.css'
import ThemeContext from '../../Context/ThemeContext'

export default class Main extends Component {
    static contextType = ThemeContext
  render() {
    return (
      <div className={`${this.context.theme} mainer`} style={{transition: '0.5s'}}>
        <div className='banner'>
            <div className='container'>
                <h1 className={`text ${this.context.theme}`}>Hello.</h1>
                <h1 className={`text ${this.context.theme}`}>My name is Dilshod.</h1>
                <hr className={`${this.context.theme}`}/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur praesentium quae officia, pariatur id eos iste eligendi provident a recusandae tempora assumenda iure tenetur quidem. Pariatur, quisquam? Molestiae necessitatibus cumque placeat. Molestiae ducimus reiciendis debitis autem voluptatibus et quasi, recusandae consectetur deleniti qui quae nisi quis sequi inventore quisquam minima vel facere eius nostrum veniam magnam, ad, obcaecati aperiam? Placeat dolore aliquam quaerat quod sed eum inventore in alias eveniet eligendi incidunt, tenetur culpa animi! In accusamus adipisci corrupti dolorum quasi nulla eius vitae, expedita dignissimos velit perferendis neque id temporibus sapiente soluta eos qui exercitationem optio tempora atque quis magni quod? Necessitatibus tenetur, expedita esse nihil eos nesciunt. Id, facere reiciendis sunt incidunt quaerat aperiam illum blanditiis maiores non, natus nisi iste enim nemo numquam maxime adipisci unde ratione. Odit pariatur esse ab hic minus, voluptas modi, cupiditate consectetur omnis ad praesentium reiciendis sed mollitia! Non, officia esse corrupti id vero ut dolorem consequuntur adipisci excepturi architecto illo laudantium, at sint, nisi amet eveniet harum voluptatem nemo deleniti temporibus! Quibusdam non ad architecto, nesciunt labore perspiciatis ratione sapiente ex harum consequatur omnis quasi illo quo a! Recusandae totam molestiae facere repellendus magni illo rem quae dolor cum cupiditate. Quaerat!</p>
            </div>
        </div>
      </div>
    )
  }
}
