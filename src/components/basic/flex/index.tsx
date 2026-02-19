import { FC } from "react";
import { FlexChildContainer, FlexContainer, StyledFlexChildPropsType, StyledFlexPropsType } from "./style";

interface FlexPropsType {
    children?: any
    $style?: StyledFlexPropsType
    [key: string]: any
    cRef?: any
}

const Flex: FC<FlexPropsType> = ({ children, cRef, $style, ...rest }) => {
    return (
        <FlexContainer {...$style} {...rest} ref={cRef}>
            {children}
        </FlexContainer>
    )
}

interface FlexChildPropsType extends StyledFlexChildPropsType {
    children?: any
    [key: string]: any
}

export const FlexChild: FC<FlexChildPropsType> = ({ children, ...rest }) => {
    return (
        <FlexChildContainer {...rest}>
            {children}
        </FlexChildContainer>
    )
}

export default Flex;
