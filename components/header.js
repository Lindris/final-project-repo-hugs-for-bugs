// Create a header component in order to maintain consistency across the app
// Use Paragraph component we built to re-use the font-family, font-weight etc 
// Only need to pass in text as a prop
import Paragraph from "../components/paragraph";

const Header = ({ text }) => {
    return (
        <div>
            <Paragraph fontSize={"5em"} text={text} fontWeight={"extrabold"} />
        </div>
    )
}

export default Header