import Flex from "components/basic/flex";
import Icon from "components/basic/icon";
import { Span } from "components/basic/text";
import constantImages from "constants/img.constant";
import ContactStyles from "style/contact.style";
import { OverlayStyle } from "style/global.style";
import { Button, HStack, Image, Tooltip } from '@chakra-ui/react'
import BackButton from "components/custom/back-button";
import styled from "styled-components";

interface ContactPageUIProps {
    handleCopyText: (text: string) => void;
    followOcat: () => void;
    menu: boolean;
    loading: boolean;
}

const ContactInfo = ({ handleCopyText }: { handleCopyText: (text: string) => void }) => (
    <>
        <a href="https://x.com/SuyamaKeiichiro" target="_blank" rel="noreferrer">
            <Icon icon={'twitter'} />
        </a>
        <a href="mailto:luckybit0512@gmail.com" rel="noreferrer">
            <Icon icon={'email'} />
        </a>
        <a href="https://t.me/angel_10_04" target="_blank" rel="noreferrer">
            <Icon icon={'telegram'} />
        </a>
        <Tooltip label="Click to Copy Username" hasArrow placement='top-start' shouldWrapChildren>
            <Flex onClick={() => handleCopyText('twelve.eight')} $style={{ cursor: "pointer" }}>
                <Icon icon={'discord'} />
            </Flex>
        </Tooltip>
    </>
);

export default function ContactPageUI({ handleCopyText, menu, followOcat, loading }: ContactPageUIProps) {
    return (
        <Flex $style={ContactStyles.ContactWrapperStyle}>
            <BackButton />
            <ContactCard>
                {/* Banner */}
                <Flex $style={ContactStyles.BannerStyle} />

                {/* Avatar — pulled up over the banner */}
                <AvatarWrapper>
                    <AvatarImage
                        src={constantImages.Avatar}
                        alt="Suyama Keiichiro avatar"
                    />
                </AvatarWrapper>

                {/* Card body */}
                <CardBody>
                    <NameText>Suyama Keiichiro</NameText>
                    <Span $style={{ color: "color-4" }}>Senior Software Engineer</Span>

                    <SocialRow>
                        <ContactInfo handleCopyText={handleCopyText} />
                    </SocialRow>

                    <Button style={{
                        width: "100%",
                        fontFamily: "var(--body-font)",
                        background: "#32383f",
                        color: "white"
                    }} colorScheme='gray' onClick={followOcat} isLoading={loading}>
                        Follow
                    </Button>
                </CardBody>
            </ContactCard>

            <HStack style={{
                ...OverlayStyle(menu, .7),
                position: "fixed"
            }} />
        </Flex>
    );
}

/* ── Styled components ─────────────────────────────────────── */

/** The profile card — responsive width */
const ContactCard = styled.div`
    position: relative;
    z-index: 10;
    background: #22272c;
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
    max-width: 30rem;

    @media (max-width: 480px) {
        max-width: 100%;
        border-radius: .75rem;
    }
`

/** Pulls the avatar up so it overlaps the banner */
const AvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -4rem;
    padding: 0 1.5rem;
`

const AvatarImage = styled(Image)`
    border-radius: 100%;
    border: .35rem solid #22272c;
    /* Responsive avatar size */
    width: clamp(5rem, 22vw, 8rem);
    height: clamp(5rem, 22vw, 8rem);
    object-fit: cover;
`

/** Everything below the avatar */
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 1.5rem 1.5rem;
    gap: 0.4rem;
    width: 100%;

    @media (max-width: 480px) {
        padding: 0.5rem 1rem 1.25rem;
    }
`

/** Responsive name */
const NameText = styled.h2`
    font-size: clamp(1.25rem, 5vw, 2rem);
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    margin: 0.5rem 0 0.1rem;
    font-family: var(--body-font);
`

/** Social icons row */
const SocialRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0 1.25rem;
    flex-wrap: wrap;
`
