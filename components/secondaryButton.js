import { Button } from "@chakra-ui/react";
import Link from "next/link";

//use chakra 'button' component - choose
//create export default function LargeButton - call different name than chakra button
//return button with color, size - from chacka UI Library
//import button into index.js
//create button tag in index.js below h1 - with text props
//pass in the text props in button function () and tag
//set colour of font and background using color='brand.quaternary' for white text and bg='brand.primary' (for purple)
//round off corners using borderRadius

export default function SecondaryButton({ content, route }) {
    return (
        <Button
            bg="brand.primaryLight"
            color="brand.mainPurple"
            borderRadius="25px"
            size="lg"
            letterSpacing="0.5px"
            border='1px'
            borderColor='brand.mainPurple'
        >
            <Link href={route}>
                {content}
            </Link>
        </Button>
    );
}
