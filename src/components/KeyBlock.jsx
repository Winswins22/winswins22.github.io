import { useState, useEffect } from 'react'
import styled from 'styled-components'

import KeyLocked from "../images/KeyLocked.jpg"
import KeyUnlocked from "../images/KeyUnlocked.jpg"
import SmallImage from './SmallImage'

const Flexbox = styled.div`
  display: flex;
  justify-content: flex-start;
`

// titleWords: array of string
function renderTitle(titleWords){
    const title = titleWords.map((elem) => {
        return <>
            <h1 style={{margin:0}}>{elem}</h1>
        </>
    })
    return title;
}

// titleWords: array of string
function KeyBlock({titleWords, children}) {

    const title = renderTitle(titleWords);
    const [locked, setLocked] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLocked(false);
        }, 1000)
    })

    return (
        <>  
            {
                locked ?
                    <>
                        <Flexbox>
                            <SmallImage src={KeyLocked} />
                            <div>{title}</div>
                        </Flexbox>
                    </>
                :
                    <>
                        <Flexbox>
                            <SmallImage src={KeyUnlocked} />
                            <div>{title}</div>
                        </Flexbox>
                        <div style={{marginLeft: "30px"}}>{children}</div>
                    </>
            }
            
        </>
    )
}

export default KeyBlock