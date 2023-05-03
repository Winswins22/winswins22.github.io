import ContentBlock from "../components/ContentBlock"
import KeyBlock from "../components/KeyBlock"
import MainContentBlock from "../components/MainContentBlock"

import One from "../images/One.jpg"
import Two from "../images/Two.jpg"
import Three from "../images/Three.png" 

function ExperiencesPage() {
    return (
        <>
            <KeyBlock titleWords={["Key", "Experiences"]}>

                <MainContentBlock title="key_exp1" date="date" image1={One} image2={Two} image3={Three}> 
                    at this experience, i...
                </MainContentBlock>

                <ContentBlock> </ContentBlock>
                <ContentBlock> </ContentBlock>
                <ContentBlock> </ContentBlock>
                
            </KeyBlock>
        </>
    )
}

export default ExperiencesPage