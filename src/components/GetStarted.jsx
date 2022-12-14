import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>

    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-lg leading-[23px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="ArrowUp" className='w-[23px] h-[23px]' />
      </div>

      <p className='font-poppins font-medium text-lg leading-[23px]'>
        <span className='text-gradient'>Sarted</span>
      </p>
    </div>

  </div>
)

export default GetStarted