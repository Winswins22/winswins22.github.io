import ContentBlock from "../components/ContentBlock"
import Placeholder from "../images/Placeholder.png"

function AboutPage() {
    return (
        <>
            <ContentBlock title="Hello!" date="?" image={Placeholder}>
                My name is Winston, nice to meet you!
            </ContentBlock>
        </>
    )
}

export default AboutPage