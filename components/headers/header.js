// Create a header component in order to maintain consistency across the app
// Use Paragraph component we built to re-use the font-family, font-weight etc 
// Only need to pass in text as a prop
import Paragraph from "../paragraph";

const Header = ({ content }) => {
    return (
        <div>
            <Paragraph fontSize={"6em"} content={content} fontWeight={"extrabold"} />
        </div>
    )
}

export default Header