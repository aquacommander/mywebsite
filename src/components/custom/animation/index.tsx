import { ScaleAnimeStyle, FadeAnimeStyle, PulseAnimeWrapper } from "./animation.style"
import { HeadingPropsType } from "components/basic/heading/style"
import { TextPropsType } from "components/basic/text/style"
import React from 'react';

interface PropsType {
    children?: any
    level: HeadingLevelType
    $style?: Partial<HeadingPropsType>
    cref?: any
    [key: string]: any

}

interface SpanPropsType {
    children?: any
    $style?: TextPropsType
    [key: string]: any
}

interface PulsePropsType {
    $style?: TextPropsType
}


export const ScaleAnime = ({ children, cref, level, $style, ...rest }: PropsType) => {
    return (
        <ScaleAnimeStyle
            as={`h${level}`}
            level={level}
            {...$style}
            {...rest}
            ref={cref}
        >
            {children}
        </ScaleAnimeStyle>
    )
}

export const FadeAnime = ({ children, $style, ...rest }: SpanPropsType) => {
    let words: string[] = [];

    if (typeof children === 'string') {
        words = children.split(' ');
    } 

    const wordGroups = [];
    for (let i = 0; i < words.length; i += 3) {
        wordGroups.push(words.slice(i, i + 3).join(' '));
    }

    return (
        <>
            {wordGroups.map((wordGroup: string, index: number) => (
                <FadeAnimeStyle
                    key={index}
                    {...$style}
                    delay={0.1 * (index + 1)}
                    
                    {...rest}
                >
                    {wordGroup}&nbsp;
                </FadeAnimeStyle>
            ))}
        </>
    );
};

export const PulseAnime = ({ ...rest }: PulsePropsType) => {
    return (
        <PulseAnimeWrapper>
            <div />
            <div />
            <div />
        </PulseAnimeWrapper>
    )
}