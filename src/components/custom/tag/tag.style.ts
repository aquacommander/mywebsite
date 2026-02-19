import { InlineFlexPropsType } from "components/basic/flex/style";

const baseTagStyle: InlineFlexPropsType = {
    p: ".1rem .3rem",
    radius: ".5rem"
}

export const YearTagStyle: InlineFlexPropsType = {
    ...baseTagStyle,
    background: "#4caf50",
}

export const TypeTagStyle: InlineFlexPropsType = {
    ...baseTagStyle,
    background: "#8a4af3",
}