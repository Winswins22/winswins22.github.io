import styled from 'styled-components'

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`

function ContentBlock({title, image, date, children}) {
    return (
        <>  
            <Flexbox>
                <div>
                    <h1 style={{margin: 0}}>{title}</h1>
                    <h2 style={{marginTop: 0}}>{date}</h2>
                    <div>{children}</div>
                </div>
                <img src={image}></img>
            </Flexbox>
        </>
    )
}

export default ContentBlock