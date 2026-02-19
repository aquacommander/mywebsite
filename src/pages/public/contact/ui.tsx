import Flex from "components/basic/flex";
import Icon from "components/basic/icon";
import { Span } from "components/basic/text";
import constantImages from "constants/img.constant";
import ContactStyles from "style/contact.style";
import { OverlayStyle } from "style/global.style";
import { Button, HStack, Image, Tooltip } from '@chakra-ui/react'
import BackButton from "components/custom/back-button";

interface ContactPageUIProps {
    handleCopyText: (text: string) => void;
    followOcat: () => void;
    menu: boolean;
    loading: boolean;
}

const ContactInfo = ({ handleCopyText }: { handleCopyText: (text: string) => void }) => (
    <>
        <a href="mailto:emmanuelsuyama@gmail.com" rel="noreferrer">
            <Icon icon={'email'} />
        </a>
        <a href="https://www.linkedin.com/in/emmanuelocat" target="_blank" rel="noreferrer">
            <Icon icon={'linkedin'} />
        </a>
        <a href="https://t.me/angel_10_04" target="_blank" rel="noreferrer">
            <Icon icon={'telegram'} />
        </a>
        <Tooltip label="Click to Copy Number" hasArrow placement='top-start' shouldWrapChildren>
            <Flex onClick={() => handleCopyText('+09939645152')} $style={{ cursor: "pointer" }}>
                <Icon icon={'phone'} />
            </Flex>
        </Tooltip>
        <Tooltip label="Click to Copy Username" hasArrow placement='top-start' shouldWrapChildren>
            <Flex onClick={() => handleCopyText('today.just')} $style={{ cursor: "pointer" }}>
                <Icon icon={'discord'} />
            </Flex>
        </Tooltip>
    </>
);

export default function ContactPageUI({ handleCopyText, menu, followOcat, loading }: ContactPageUIProps) {
    return (
        <Flex $style={ContactStyles.ContactWrapperStyle}>
            <BackButton />
            <Flex $style={ContactStyles.ContentWrapperStyle}>
                <Flex $style={ContactStyles.BannerStyle} />

                <Flex $style={ContactStyles.CardContentWrapperStyle}>
                    <Flex $style={ContactStyles.ImageWrapperStyle}>
                        <Image
                            src={constantImages.Avatar}
                            alt="Emmanuel Ocat avatar"
                            style={{ borderRadius: "100%", maxWidth: "10rem" }}
                        />
                    </Flex>
                    <Flex $style={ContactStyles.CardInfoWrapperStyle}>
                        <Span $style={{ size: "2rem" }}>Emmanuel Ocat</Span>
                        <Span $style={{ color: "color-4" }}>Senior Software Engineer</Span>
                    </Flex>
                    <Flex $style={{ gap: "1rem", mb: "2rem" }}>
                        <ContactInfo handleCopyText={handleCopyText} />
                    </Flex>
                    <Button style={{
                        width: "100%",
                        fontFamily: "var(--body-font)",
                        background: "#32383f",
                        color: "white"
                    }} colorScheme='gray' onClick={followOcat} isLoading={loading} >
                        Follow
                    </Button>
                </Flex>
            </Flex>
            <HStack style={{
                ...OverlayStyle(menu, .7),
                position: "fixed"
            }} />

        </Flex>
    );
}
