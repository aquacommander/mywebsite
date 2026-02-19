import Flex from "components/basic/flex";
import Link from "components/basic/link";
import { Span } from "components/basic/text";
import constantData from "constants/data.constant";
import styled from "styled-components";
import { flexStyle, menuStyle } from "./menu.style";

interface MenuUIProps {
    handleHover: (flag: boolean) => void
}

export default function MenuUI({ handleHover }: MenuUIProps) {
    return (
        <Flex as="ul" $style={menuStyle}>
            {
                constantData.MENU_DATA.map((item: any) => renderMenuItem(item, handleHover))
            }
        </Flex>
    )
}

function renderMenuItem(item: any, handleHover: any) {
    return (
        <Link to={item.link} $style={{ w: "fit-content" }}>
            <MenuItem onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>
                <Flex $style={flexStyle}>
                </Flex>
                <Span>
                    {item.content}
                </Span>
            </MenuItem>
        </Link>
    )
}

const MenuItem = styled(Flex)`
    align-items: center;
    gap: .8rem;
    span, p {
        transition: all .15s;
    }

    &:hover {
        span, p {
            font-size: 1.15rem;
            text-shadow:
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px #0fa,
                0 0 82px #0fa,
                0 0 92px #0fa,
                0 0 102px #0fa,
                0 0 151px #0fa;
        }
    }
`