import React, {useState} from 'react'
import Header from './Header'
import Content from './Content'
export default function Toggler({className, imgSrc, contentHeader, contentIntro, contentParagraph, header}) {
const [clicked, setClicked] = useState(false)

function clickMe() {
    setClicked(!clicked)
  }
return (
    <div className={className}>
        <Header className={` bg-black text-4xl mb-1 ${clicked ? 'bg-blue-900 rounded-t-full' : 'bg-red-900 rounded-full'}`} header={header} onClick={()=>clickMe()}/>
        {clicked ? <Content imgSrc={imgSrc} contentHeader={contentHeader} contentIntro={contentIntro} contentParagraph={contentParagraph}/> : null}
    </div>
    )
}