import styled from 'styled-components'
import SmallImage from './SmallImage'

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`

const HorizontalFlexbox = styled.div`
  display: flex;
`

const VerticalFlexbox = styled.div`
  display: flex;
  flex-direction: column;
`

function MainContentBlock({title, image1, image2, image3, date, children}) {
    return (
        <>  
            <Flexbox>
                <div>
                    <h1 style={{marginBottom:0}}>{title}</h1>
                    <h2 style={{margin:0}}>{date}</h2>
                    {children}
                </div>
                {/* images */}
                <VerticalFlexbox>
                    <img style={{width: "140px"}} src={image1} />
                    <HorizontalFlexbox>
                        <SmallImage src={image2}/>
                        <SmallImage src={image3}/>
                    </HorizontalFlexbox>
                </VerticalFlexbox>
            </Flexbox>
        </>
    )
}

export default MainContentBlock