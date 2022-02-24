import { Stack, Text } from '@chakra-ui/react';

// Import template from Chakra
// TODO: Pass props in - event name, event date, event info?

export default function EventListingCard() {
    return (
        <Stack p="4" boxShadow="lg" borderRadius="sm">
            <Stack direction="row" alignItems="center">
                <Text fontWeight="semibold">Your Privacy</Text>
            </Stack>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-between">
                <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                    We use cookies and similar technologies to help personalise content,
                    tailor and measure ads, and provide a better experience. By clicking
                    OK or turning an option on in Cookie Preferences, you agree to this,
                    as outlined in our Cookie Policy. To change preferences or withdraw
                    consent, please update your Cookie Preferences.
                </Text>
            </Stack>
        </Stack>
    );
}
