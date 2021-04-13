import Head from 'next/head'
import React, {useState} from 'react'
import Nav from '../components/Nav'
import Toggler from '../components/Toggler'
export default function Home() {

  return (
    <div className='text-gray-500 font-serif bg-black min-h-screen'>
      <div className='w-2/3 ml-auto mr-auto'>
        <Nav />
        <Toggler
                  className='pt-11'
                  imgSrc={'/KaiveOffizial.jpg'}
                  header={'ME'}
                  contentHeader={'Amazing Header!'}
                  contentIntro={'Hi! My name is Kaive Man, welcome to jackass!'}
                  contentParagraph={'this is some amazing text, it looks so awesome and has a lot of great content. I cant belive i wrote this!this is some amazing text, it looks so awesome and has a lot of great content. I cant belive i wrote this!this is some amazing text, it looks so awesome and has a lot of great content. I cant belive i wrote this!this is some amazing text, it looks so awesome and has a lot of great content. I cant belive i wrote this!this is some amazing text, it looks so awesome and has a lot of great content. I cant belive i wrote this!'}
                  />
        <Toggler
                  imgSrc={'/rinrin.jpg'}
                  header={'YOU'}
                  contentHeader={'Hot Chick!'}
                  contentIntro={'So this is some pretty neat lingerie'}
                  contentParagraph={'looks like you are a pussy oO'}
                  />
        <Toggler
                  imgSrc={'/piker und Ricard.jpg'}
                  header={'THE WORLD'}
                  contentHeader={'well...'}
                  contentIntro={'look at the world... just look at them...'}
                  contentParagraph={'nothing left to say, we all gonna die...'}
                  />
      </div>
    </div>
  )
}
