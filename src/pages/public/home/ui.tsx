import constantImages from "constants/img.constant"
import Link from "components/basic/link"
import constantData from "constants/data.constant"
import HomeStyles from "style/home.style"
import { ScaleAnime, FadeAnime } from "components/custom/animation"
import { OverlayStyle } from "style/global.style"
import { HStack, Image, VStack } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import styled from "styled-components"

interface HomePageUIProps {
    menu: boolean
}

const AvatarImage = () => (
    <Image
        src={constantImages.Avatar}
        alt="Emmanuel Ocat avatar"
        style={{
            borderRadius: "100%",
            maxWidth: "15rem"
        }}
    />
);

const TitleContent = () => (
    <VStack>
        <ScaleAnime level={1}>
            <FadeAnime $style={{ fontFamily: "Ocat" }}>
                {constantData.HOME_DATA.Title}
            </FadeAnime>
        </ScaleAnime>
        <Text
            as="div"
            style={{
                textAlign: "center",
                maxWidth: "30rem",
                fontSize: "1.15rem"
            }}
        >
            <FadeAnime>
                {constantData.HOME_DATA.Content}
            </FadeAnime>
        </Text>
    </VStack>
);

const NavLinks = () => (
    <NavLinksStack spacing={4}>
        {constantData.MENU_DATA.map((item: any, index: number) => (
            <Link key={index} to={item.link}>
                <NavLinkItem>{item.content}</NavLinkItem>
            </Link>
        ))}
    </NavLinksStack>
);

export default function HomePageUI({ menu }: HomePageUIProps) {
    return (
        <VStack style={HomeStyles.HomeContainerStyle}>
            <VStack style={HomeStyles.ContentContainerStyle}>
                <AvatarImage />
                <TitleContent />
                <NavLinks />
            </VStack>
            <HStack style={{
                ...OverlayStyle(menu),
                position: "fixed"
            }} />
        </VStack>
    )
}

const NavLinksStack = styled(HStack)`
    flex-wrap: wrap;
    justify-content: center;
`

const NavLinkItem = styled(Text)`
    cursor: pointer;
    position: relative;
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 0.95rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #e5e7eb;
    padding: 0.15rem 0;
    margin: 0 0.35rem;
    text-shadow: 0 0 8px rgba(15, 23, 42, 0.85);
    transition:
        transform 0.18s ease-out,
        color 0.18s ease-out,
        text-shadow 0.2s ease-out;

    &::before {
        content: "";
        position: absolute;
        left: -0.65rem;
        top: 50%;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 999px;
        background: radial-gradient(circle, #22d3ee, #7c3aed);
        box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
        transform: translateY(-50%);
        opacity: 0.5;
    }

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -0.2rem;
        width: 0;
        height: 2px;
        border-radius: 999px;
        background: linear-gradient(90deg, #22d3ee, #7c3aed);
        box-shadow: 0 0 12px rgba(129, 140, 248, 0.8);
        transform: translateX(-50%);
        transition: width 0.22s ease-out;
    }

    &:hover {
        transform: translateY(-1px) scale(1.05);
        color: #e0f2fe;
        text-shadow:
            0 0 6px rgba(59, 130, 246, 0.8),
            0 0 22px rgba(79, 70, 229, 0.9);

        &::after {
            width: 115%;
        }
    }
`
