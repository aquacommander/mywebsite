import React from 'react';
import Flex from "components/basic/flex"
import Grid from "components/basic/grid";
import { HStack, Heading, Image } from '@chakra-ui/react'
import Link from "components/basic/link";
import configs from "configs";
import constantImages from "constants/img.constant";
import { useSelector } from "react-redux";
import { OverlayStyle } from "style/global.style";
import WorkStyles, { AIWrapper, BackendWrapper, CardWrapper, FrontendWrapper, ScrollableWorkContainer } from "style/works.style";
import BackButton from "components/custom/back-button";

interface AppState {
    app: {
        menu: boolean;
    };
}

const ProjectsPage: React.FC = () => {

    const menu = useSelector((state: AppState) => state.app.menu);

    const renderCard = (path: string, imageSrc: string, wrapperComponent: React.ReactNode, title: string) => (
        <Link to={path}>
            <CardWrapper>
                <Flex className="wrapper" $style={WorkStyles.FrontendWrapperStyle}>
                    <Image src={imageSrc} style={{
                        width: "100%"
                    }} />
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
            <Grid $style={{
                ...WorkStyles.GridWrapperStyle,
                $queries: {
                    1170: {
                        columns: "2"
                    },
                    800: {
                        columns: "1"
                    },
                    400: {
                        columns: "1",
                        gap: "1rem",
                        w: "100%",
                        p: "1rem",
                        hAlign: "center",
                        vAlign: "center",
                        overflow: "auto",
                        h: "100%",
                    }
                }
            }}>
                {renderCard(configs.path.FRONTEND_PREFIX, constantImages.BRIGHT, <FrontendWrapper><Image src={constantImages.FRONTEND} /></FrontendWrapper>, 'Frontend')}
                {renderCard(configs.path.BACKEND_PREFIX, constantImages.DARK, <BackendWrapper><Image src={constantImages.BACKEND} /></BackendWrapper>, 'Backend')}
                {renderCard(configs.path.AI_PREFIX, constantImages.AI, <AIWrapper><Image src={constantImages.SUB_AI} /></AIWrapper>, 'AI')}
            </Grid>
            <HStack style={{
                ...OverlayStyle(menu, .75),
                position: "fixed"
            }} />
        </Flex>
        </ScrollableWorkContainer>
    )
}

export default ProjectsPage;
