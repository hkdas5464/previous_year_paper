import { Card,CardBody, Image } from '@nextui-org/react'
import React from 'react';
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'


function Gallery({props}) {
  return (
    <div>
       <SlideshowLightbox className='  ' showThumbnails={true}>
                   <img className='w-full rounded' src={props}/>
                   </SlideshowLightbox>
    </div>
  )
}

export default Gallery
