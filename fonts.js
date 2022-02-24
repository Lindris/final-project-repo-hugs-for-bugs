// Import custom font and create a component for it
import { Global } from "@emotion/react"

const Fonts = () => {
    return (
        <Global
            styles={`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    </style>`}
        />)
}

export default Fonts