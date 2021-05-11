import React, { Component } from 'react'
import Display from '../components/app/square/Display'

export default class RandomColor extends Component {
  state = {
    colors: ['salmon', 'silver', 'papayawhip', 'pink'],
    bgColor:'salmon',
    bgImage: 'none',

  }

  componentDidMount(){
    setInterval(() => {
      const {colors, bgColor} = this.state
      const newBg = this.pickColor(colors)
      if(newBg === bgColor){
        this.setState({
          bgColor: '',
          bgImage: 'url(https://www.placecage.com/300/300)'
        })
      } else this.setState({bgColor: newBg, bgImage: 'none' })
    }, 1000);
  }

  pickColor = (colors) => {
    const color = colors[Math.floor(Math.random() * colors.length)]
    return color
  }

  render() {
    const {bgColor, bgImage} = this.state
    return (
      <Display 
      colors={bgColor}
      bgImage={bgImage}
      />
    )
  }
}
