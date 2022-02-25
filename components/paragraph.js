// Create reusable text component (a paragraph tag) to avoid hard-coding the font-family every time we render a component 
// Pass down the text, fontSize, fontWeight, colour as a props

import { Text } from '@chakra-ui/react'

const Paragraph = ({ content, fontSize, fontWeight, colour }) => {
    return (
        <div>
            <Text color={colour} fontSize={fontSize} fontWeight={fontWeight}>{content}</Text>
        </div>
    )
}

export default Paragraph