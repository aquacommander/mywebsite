import Flex from "components/basic/flex";
import Icon from "components/basic/icon";
import { Span } from "components/basic/text";
import constantImages from "constants/img.constant";
import ContactStyles from "style/contact.style";
import { OverlayStyle } from "style/global.style";
import { Button, HStack, Image, Input, Textarea } from '@chakra-ui/react'
import BackButton from "components/custom/back-button";
import styled from "styled-components";

type ContactForm = { name: string; email: string; message: string };

interface ContactPageUIProps {
    menu: boolean;
    form: ContactForm;
    sending: boolean;
    handleFormChange: (field: keyof ContactForm, value: string) => void;
    handleSendMessage: () => void;
    bookMeeting: () => void;
}

const ContactInfo = () => (
    <>
        <a href="https://www.instagram.com/suyamakeiichiro" target="_blank" rel="noreferrer">
            <Icon icon={'instagram'} />
        </a>
        <a href="https://www.reddit.com/user/benselinmisim3/" target="_blank" rel="noreferrer">
            <Icon icon={'reddit'} />
        </a>
        <a href="https://t.me/angel_10_04" target="_blank" rel="noreferrer">
            <Icon icon={'telegram'} />
        </a>
        <a href="https://x.com/SUYAMAKEIIvuco" target="_blank" rel="noreferrer">
            <Icon icon={'twitter'} />
        </a>
    </>
);

export default function ContactPageUI({
    menu,
    form,
    sending,
    handleFormChange,
    handleSendMessage,
    bookMeeting,
}: ContactPageUIProps) {
    // Shared Chakra field styling — keeps native focus ring / hover states intact.
    const fieldProps = {
        bg: "#1b2026",
        borderWidth: "1px",
        borderColor: "#30363d",
        color: "#e6edf3",
        borderRadius: "0.65rem",
        fontFamily: "var(--body-font)",
        focusBorderColor: "#2f81f7",
        _hover: { borderColor: "#414a54" },
        _placeholder: { color: "#7d8590" },
    } as const;
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
                        <ContactInfo />
                    </SocialRow>

                    {/* Message me */}
                    <FormPanel>
                        <FormHeader>
                            <FormTitle>Send me a message</FormTitle>
                            <FormSubtitle>
                                Tell me what you need and I&apos;ll reply to your inbox.
                            </FormSubtitle>
                        </FormHeader>

                        <MessageForm
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                            }}
                        >
                            <FieldGrid>
                                <Field>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input
                                        placeholder="Jane Doe"
                                        value={form.name}
                                        onChange={(e) => handleFormChange('name', e.target.value)}
                                        {...fieldProps}
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input
                                        type="email"
                                        placeholder="jane@email.com"
                                        value={form.email}
                                        onChange={(e) => handleFormChange('email', e.target.value)}
                                        {...fieldProps}
                                    />
                                </Field>
                            </FieldGrid>

                            <Field>
                                <FieldLabel>Message</FieldLabel>
                                <Textarea
                                    placeholder="Hi Keiichiro, I'd love your help with…"
                                    value={form.message}
                                    onChange={(e) => handleFormChange('message', e.target.value)}
                                    rows={4}
                                    resize="vertical"
                                    {...fieldProps}
                                />
                            </Field>

                            <Button
                                type="submit"
                                leftIcon={<Icon icon={'email'} width="18px" height="18px" />}
                                width="100%"
                                colorScheme="blue"
                                bg="#2f81f7"
                                _hover={{ bg: "#3a8bff" }}
                                _active={{ bg: "#2872de" }}
                                fontFamily="var(--body-font)"
                                borderRadius="0.65rem"
                                isLoading={sending}
                                loadingText="Sending…"
                            >
                                Send message
                            </Button>
                        </MessageForm>
                    </FormPanel>

                    {/* Book a meeting via Google Calendar */}
                    <Button
                        onClick={bookMeeting}
                        leftIcon={<Icon icon={'calendar'} width="18px" height="18px" />}
                        width="100%"
                        variant="outline"
                        color="#e6edf3"
                        borderColor="#30363d"
                        bg="transparent"
                        _hover={{ bg: "#1b2026", borderColor: "#414a54" }}
                        fontFamily="var(--body-font)"
                        borderRadius="0.65rem"
                    >
                        Book a meeting
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

/** Message form panel — a subtle inset card that groups the whole form */
const FormPanel = styled.div`
    width: 100%;
    margin: 0.5rem 0 0.9rem;
    padding: 1.1rem;
    background: #191d22;
    border: 1px solid #2a2f36;
    border-radius: 0.9rem;

    @media (max-width: 480px) {
        padding: 0.9rem;
    }
`

const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin-bottom: 0.9rem;
`

const FormTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    text-align: left;
    margin: 0;
    font-family: var(--body-font);
`

const FormSubtitle = styled.p`
    font-size: 0.8rem;
    line-height: 1.35;
    color: #8b949e;
    text-align: left;
    margin: 0;
    font-family: var(--body-font);
`

const MessageForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    width: 100%;
`

/** Name + email sit side by side, stacking on narrow screens */
const FieldGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;

    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
`

const FieldLabel = styled.label`
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #adb5bd;
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
