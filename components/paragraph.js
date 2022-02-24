// Create reusable text component (a paragraph tag) to avoid hard-coding the font-family every time we render a component 
// Pass down the text, fontSize, fontWeight as a props

import { Text } from '@chakra-ui/react'

const Paragraph = ({ text, fontSize, fontWeight }) => {
    return (
        <div>
            <Text fontSize={fontSize} fontWeight={fontWeight}>{text}</Text>
        </div>
    )
}

export default Paragraph