import styled from 'styled-components'

const Spacer = styled.div`
    padding-left: 100px;
    padding-right: 100px;
`

function PageSpacer({children}) {
    return (
        <>
            <Spacer>{children}</Spacer>
        </>
    )
}

export default PageSpacer