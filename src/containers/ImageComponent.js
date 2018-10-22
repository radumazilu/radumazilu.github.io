import React, { Component } from 'react'

class ImageComponent extends Component {
  state = {
    imageLink: ''
  }

  componentWillMount() {
    this.grabImage();
  }

  grabImage = () => {
    this.setState({ imageLink: '../../img/water.jpeg' })
  }

  render () {
    const { imageLink } = this.state;
    let backgroundStyle = 'url(' + imageLink + ') no-repeat center center fixed';
    return (
      <div className='image-wrapper'>
        <div className='profile-picture'
          style={{
            background: backgroundStyle,
            width: '100%',
            height: '100%',
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
            backgroundSize: 'cover',
            position: 'relative'
          }}>
          <div className='layer' />
        </div>
      </div>
    )
  }
}

export default ImageComponent
