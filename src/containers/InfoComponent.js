import React, { Component } from 'react'
import SocialIconsComponent from './SocialIcons'

class InfoComponent extends Component {
  render () {
    return (
      <div className='info-wrapper'>
        <h2>Radu Mazilu</h2>
        <p>I'm a third-year Management Science and Engineering student, minoring in Intelligent Systems. My main interests are AI, Decentralisation and Software Development. More generally, I am interested in the intersection of business and technology.</p>
        <p>I'm a self-taught developer and like reading / hearing / studying things that challenge the way I see the world.</p>
        <p>I was born in Bucharest, but now live in London, where I had the chance to meet some great peers, study in <a href='https://www.ucl.ac.uk/'>world-leading university</a> and work on interesting problems with an amazingly <a href='https://www.satalia.com/'>smart company</a>.</p>
        {/* <p>You can find a list of my favourite books and a few notes on them here.</p> */}
        <SocialIconsComponent />
      </div>
    )
  }
}

export default InfoComponent;
