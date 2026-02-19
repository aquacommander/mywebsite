import { HStack } from "@chakra-ui/react"
import Flex from "components/basic/flex"
import DraggableList from "components/custom/draggable"
import constantData from "constants/data.constant"
import { OverlayStyle } from "style/global.style"
import BackButton from "components/custom/back-button"
import SkillsStyles from "style/skills.style"
import { useDragToScroll } from "hooks/useDragToScroll"
import styled from "styled-components"

interface SkillsPageUIProps {
    menu: boolean
}

const SkillsPageUI = ({ menu }: SkillsPageUIProps) => {
    const dragScrollRef = useDragToScroll<HTMLDivElement>({
        dragThreshold: 5,
        enableMomentum: true,
        enableWheelScroll: true,
    });

    return (
        <Flex
            $style={SkillsStyles.SkillsContainerStyle}
        >
            <BackButton />
            <Flex $style={SkillsStyles.ContentContainerStyle}>
                <DragScrollContainer ref={dragScrollRef}>
                    {Object.values(constantData.ABOUT_DATA).map((itemList, index) => (
                        <DraggableList key={index} itemList={itemList} title={Object.keys(constantData.ABOUT_DATA)[index]} />
                    ))}
                </DragScrollContainer>
            </Flex>
            <HStack style={{
                ...OverlayStyle(menu),
                position: "fixed"
            }} />

        </Flex>
    );
};

const DragScrollContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 1rem;
    height: 100%;
    
    /* Hide scrollbar but keep functionality */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    /* Smooth scrolling */
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */

    /* Ensure proper overflow behavior */
    overflow-x: auto;
    overflow-y: hidden;

    /* Allow text selection in child elements */
    & > * {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
`;

export default SkillsPageUI;
