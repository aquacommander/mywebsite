import Flex from "components/basic/flex"
import { heartPulse } from "../animation/animation.style"
import { Image } from '@chakra-ui/react'
import constantImages from "constants/img.constant"
import styled from "styled-components"
import { flexStyle, imageStyle } from "./loader.style"

const SealAnimeWrapper = styled(Flex)`
    animation: ${heartPulse} 2.5s ease-out infinite;
`

export default function Loader() {

    return (
        <Flex $style={flexStyle}>
            <SealAnimeWrapper>
                <Image src={constantImages.SEAL_YELLOW} alt="Ocat Portfolio Mark" style={imageStyle} />
            </SealAnimeWrapper>
        </Flex>
    )
}
