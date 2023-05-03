import styled from 'styled-components'

const Wrapper = styled.div`
    padding-left: 100px;
    padding-right: 100px;
`

function PageWrapper({children}) {
    return (
        <>
            <Wrapper>{children}</Wrapper>
        </>
    )
}

export default PageWrapper