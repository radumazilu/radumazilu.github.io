import React from 'react';
import { withSiteData } from 'react-static';
import ImageComponent from './ImageComponent';
import InfoComponent from './InfoComponent';
//
import logoImg from '../logo.png';

export default withSiteData(() => (
  <div className='main-wrapper'>
    <ImageComponent />
    <InfoComponent />
  </div>
))
