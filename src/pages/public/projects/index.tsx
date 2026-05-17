import React from 'react';
import Flex from "components/basic/flex"
import { HStack, Heading, Image } from '@chakra-ui/react'
import Link from "components/basic/link";
import configs from "configs";
import constantImages from "constants/img.constant";
import { useSelector } from "react-redux";
import { OverlayStyle } from "style/global.style";
import WorkStyles, { AIWrapper, BackendWrapper, CardWrapper, FrontendWrapper, ScrollableWorkContainer, CardsRow } from "style/works.style";
import BackButton from "components/custom/back-button";

interface AppState {
    app: {
        menu: boolean;
    };
}

const ProjectsPage: React.FC = () => {

    const menu = useSelector((state: AppState) => state.app.menu);

    const renderCard = (path: string, imageSrc: string, wrapperComponent: React.ReactNode, title: string) => (
        <Link to={path} key={title}>
            <CardWrapper>
                <Flex className="wrapper" $style={WorkStyles.FrontendWrapperStyle}>
                    <Image src={imageSrc} style={{ width: "100%" }} />
                </Flex>
                {wrapperComponent}
                <Flex $style={WorkStyles.TitleWrapperStyle}>
                    <Heading as='h1' size='xl' style={{
                        fontFamily: "var(--heading-font)",
                        color: "white"
                    }}>
                        {title}
                    </Heading>
                </Flex>
            </CardWrapper>
        </Link>
    );

    return (
        <ScrollableWorkContainer>
            <Flex $style={WorkStyles.WorkContainerStyle}>
                <BackButton />
                <CardsRow>
                    {renderCard(configs.path.FRONTEND_PREFIX, constantImages.BRIGHT, <FrontendWrapper><Image src={constantImages.FRONTEND} /></FrontendWrapper>, 'Frontend')}
                    {renderCard(configs.path.BACKEND_PREFIX, constantImages.DARK, <BackendWrapper><Image src={constantImages.BACKEND} /></BackendWrapper>, 'Backend')}
                    {renderCard(configs.path.AI_PREFIX, constantImages.AI, <AIWrapper><Image src={constantImages.SUB_AI} /></AIWrapper>, 'AI')}
                </CardsRow>
                <HStack style={{
                    ...OverlayStyle(menu, .75),
                    position: "fixed"
                }} />
            </Flex>
        </ScrollableWorkContainer>
    );
}

export default ProjectsPage;
