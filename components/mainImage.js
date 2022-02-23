import { Image, Box } from '@chakra-ui/react';

// Using Chakra's Image component to create our reusable image components
// Creating a mainImage component and passing down the src and alt as props 

export default function mainImage({src, alt}) {
    return (
        <Box boxSize='lg'>
            <Image src={src} alt={alt} />
        </Box>
    )
}
