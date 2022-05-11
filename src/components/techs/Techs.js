import React from 'react'
import { ImgTech } from './TechsStyles'
import { ListTitle2 } from '../Technologies/TechnologiesStyles'

const Techs = () => {
  return (
    <div className='techs'>
        <div className='techs__section'>
          <ListTitle2>Principal Stack</ListTitle2>
        </div>
        <div className='techs__principal'>
            <ImgTech src="/images/structure.png" alt="js" />
            <ImgTech src="/images/nodejs.png" alt="js" />
            <ImgTech src="/images/js.png" alt="js" />
            <ImgTech src="/images/html-5.png" alt="js" />
            <ImgTech src="/images/css.png" alt="js" />

        </div>
        
        
        <ListTitle2>Other Techs</ListTitle2>
        <ImgTech src="/images/git.png" alt="js" />
        <ImgTech src="/images/mysql.png" alt="js" />
        <ImgTech src="/images/python.png" alt="js" />
        <ImgTech src="/images/c-sharp.png" alt="js" />
        <ImgTech src="/images/figma.png" alt="js" />
    </div>
  )
}

export default Techs

