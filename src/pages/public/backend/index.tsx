import { useSelector } from "react-redux";
import { HStack, Image } from '@chakra-ui/react'

import Flex from "components/basic/flex";
import { Span } from "components/basic/text";
import constantData from "constants/data.constant";
import { useDragToScroll } from "hooks/useDragToScroll";
import FrontendStyles from "style/frontend.style";
import AIStyles, { AICardWrapper, CardItemWrapper, HorizontalScrollRow, ProjectTag } from "style/ai.style";
import { OverlayStyle } from "style/global.style";
import BackButton from "components/custom/back-button";

const BackendProjectPage = () => {
    const menu = useSelector((state: any) => state.app.menu);
    const dragScrollRef = useDragToScroll<HTMLDivElement>({
        dragThreshold: 5,
        enableMomentum: true,
        enableWheelScroll: true,
    });

    const renderProjectCard = (item: any) => (
        <CardItemWrapper key={item.name}>
            <a href={item.link} rel="noreferrer" target="_blank" style={{ display: "block", height: "100%" }}>
                <AICardWrapper>
                <Image
                    src={item.image}
                    alt={item.name}
                    style={{
                        width: "100%",
                        height: "10rem",
                        objectFit: "cover"
                    }}
                />
                <Flex $style={AIStyles.AICardContentStyle}>
                    <Flex $style={AIStyles.AITagsWrapperStyle}>
                        {(item.tags || []).map((tag: string) => (
                            <Flex key={tag} $style={AIStyles.AITagStyle}>
                                <ProjectTag>{tag}</ProjectTag>
                            </Flex>
                        ))}
                    </Flex>
                    <Span $style={AIStyles.AITitleStyle}>{item.name}</Span>
                    <Span $style={AIStyles.AIDescriptionStyle}>{item.description}</Span>
                </Flex>
            </AICardWrapper>
            </a>
        </CardItemWrapper>
    );

    return (
        <Flex $style={FrontendStyles.FrontendWrapperStyle}>
            <BackButton />
            <Flex $style={{
                ...FrontendStyles.ContentWrapperStyle,
                queries: {
                    1024: {
                        h: "100%"
                    }
                }
            }}>
                <HorizontalScrollRow ref={dragScrollRef}>
                    {constantData.BACKEND_DATA.map(renderProjectCard)}
                </HorizontalScrollRow>
            </Flex>
            <HStack style={{
                ...OverlayStyle(menu, .7),
                position: "fixed"
            }} />

        </Flex>
    );
}

export default BackendProjectPage;
