import styled from 'styled-components';

export interface InlineFlexPropsType {
	flex?: string
	fDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
	fWrap?: 'wrap' | 'no-wrap';
	vAlign?: string
	hAlign?: string
	gap?: string
	count?: number
	p?: string
	mb?: string
	w?: string
	minW?: string
	maxW?: string
	h?: string
	minH?: string
	maxH?: string
	between?: string
	background?: string
	overflow?: 'auto' | 'hidden' | 'scroll'
	position?: 'absolute' | 'relative' | 'fixed' | 'sticky'
	radius?: string
	top?: string
	bottom?: string
	left?: string
	right?: string
	transform?: string
	transition?: string
	zIndex?: string
	cursor?: 'pointer' | 'normal'
	border?: string
	borderLeft?: string
	borderRight?: string
	fontFamily?: string
	backgroundSize?: string
	backgroundPosition?: 'center' | 'left' | 'right'
	backgroundRepeat?: 'repeat' | 'no-repeat'
	transformOrigin?: string
	filter?: string
	opacity?: string
}

type QueryType = { [key: string]: InlineFlexPropsType };

export interface StyledFlexPropsType extends InlineFlexPropsType {
	queries?: QueryType
}

export interface StyledFlexChildPropsType {
	w?: string
	h?: string
}

const setStyle = ({
	flex,
	fDirection,
	fWrap,
	vAlign,
	hAlign,
	gap,
	p,
	mb,
	w,
	minW,
	maxW,
	h,
	minH,
	maxH,
	background,
	position,
	overflow,
	between,
	radius,
	top,
	bottom,
	left,
	right,
	transform,
	transition,
	cursor,
	border,
	backgroundRepeat,
	backgroundPosition,
	backgroundSize,
	filter,
	transformOrigin,
	fontFamily,
	borderLeft,
	borderRight,
	opacity,
	zIndex
}: InlineFlexPropsType) => {
	return `
		${flex ? `flex:			${flex};` : ``}
		${fDirection ? `flex-direction:	${fDirection};` : ``}
		${fWrap ? `flex-wrap:		${fWrap};` : ``}
		${vAlign ? `align-items:		${vAlign};` : ``}
		${hAlign ? `justify-content:	${hAlign};` : ``}
		${gap ? `gap:				${gap};` : ``}
		${p ? `padding:			${p};` : ``}
		${mb ? `margin-bottom:	${mb};` : ``}
		${w ? `width:			${w};` : ``}
		${minW ? `min-width:		${minW};` : ``}
		${maxW ? `max-width:		${maxW};` : ``}
		${h ? `height:			${h};` : ``}
		${minH ? `min-height:		${minH};` : ``}
		${maxH ? `max-height:		${maxH};` : ``}
		${background ? `background:		${background};` : ``}
		${position ? `position:		${position};` : ``}
		${overflow ? `overflow:		${overflow};` : ``}
		${radius ? `border-radius:		${radius};` : ``}
		${top ? `top:		${top};` : ``}
		${bottom ? `bottom:		${bottom};` : ``}
		${left ? `left:		${left};` : ``}
		${right ? `right:		${right};` : ``}
		${zIndex ? `z-index:		${zIndex};` : ``}
		${transform ? `transform:		${transform};` : ``}
		${transition ? `transition:		${transition};` : ``}
		${cursor ? `cursor:		${cursor};` : ``}
		${opacity ? `opacity:		${opacity};` : ``}
		${border ? `border:		${border};` : ``}
		${borderLeft ? `border-left:		${borderLeft};` : ``}
		${borderRight ? `border-right:		${borderRight};` : ``}
		${fontFamily ? `font-family:		${fontFamily};` : ``}
		${backgroundPosition ? `background-position:		${backgroundPosition} !important;` : ``}
		${backgroundRepeat ? `background-repeat:		${backgroundRepeat} !important;` : ``}
		${backgroundSize ? `background-size:		${backgroundSize} !important;` : ``}
		${transformOrigin ? `transform-origin:		${transformOrigin};` : ``}
		${filter ? `filter:		${filter};` : ``}
		${between ? `
			margin: 0 calc(-${between} * 2) 0 -${between};
			&>* {
				padding: 0 ${between};
			}
		` : ``}
	`
}

const FLEX_STYLE_PROPS = ['flex', 'fDirection', 'fWrap', 'vAlign', 'hAlign', 'gap', 'p', 'mb', 'w', 'minW', 'maxW', 'h', 'minH', 'maxH', 'background', 'position', 'overflow', 'between', 'radius', 'top', 'bottom', 'left', 'right', 'transform', 'transition', 'cursor', 'border', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'filter', 'transformOrigin', 'fontFamily', 'borderLeft', 'borderRight', 'opacity', 'zIndex', 'queries'];
const shouldForwardFlexProp = (prop: string) => !FLEX_STYLE_PROPS.includes(prop);

export const FlexContainer = styled.div.withConfig({
	shouldForwardProp: shouldForwardFlexProp
})<StyledFlexPropsType>`
	display: flex;
	${({ queries, ...rest }: StyledFlexPropsType) => `
		${setStyle(rest)}
		${queries
			? Object.keys(queries).reverse()?.map((breakpoint: string) => {
				return `@media (max-width: ${breakpoint}px) {
							${setStyle(queries[breakpoint])}
						}`;
			}).join('')
			: ``
		}
	`}
`

const FLEX_CHILD_PROPS = ['w', 'h'];
const shouldForwardFlexChildProp = (prop: string) => !FLEX_CHILD_PROPS.includes(prop);

export const FlexChildContainer = styled.div.withConfig({
	shouldForwardProp: shouldForwardFlexChildProp
})<StyledFlexChildPropsType>`
	${({ w }) => w ? `width: ${w};` : ``}
	${({ h }) => h ? `height: ${h};` : ``}
`
