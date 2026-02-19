import styled from 'styled-components';

export interface InlineGridPropsType {
	flex?:						string
	fDirection?:				'column' | 'row' | 'row-reverse' | 'column-reverse'
	fWrap?:						'wrap' | 'no-wrap';
	vAlign?:					string
	hAlign?:					string
	gap?:						string
	p?:							string
	mb?:						string
	w?:							string
	minW?:						string
	maxW?:						string
	h?:							string
	minH?:						string
	maxH?:						string
	columns?:					string
	rows?:						string
	overflow?: 'auto' | 'hidden' | 'scroll'
	border? : string
	zIndex?: string
	position?: 'absolute' | 'relative' | 'fixed' | 'sticky'
}

type QueryType = { [key: string]: InlineGridPropsType };

export interface GridPropsType extends InlineGridPropsType {
	$queries?: QueryType
}

export interface StyledGridChildPropsType {
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
	overflow,
	columns,
	border,
	rows,
	zIndex,
	position
}: InlineGridPropsType) => {
	return `
		${flex              ? `flex:				${flex};`           : ``}
		${fDirection        ? `flex-direction:		${fDirection};`     : ``}
		${fWrap             ? `flex-wrap:			${fWrap};`          : ``}
		${vAlign            ? `align-items:			${vAlign};`         : ``}
		${hAlign            ? `justify-content:		${hAlign};`         : ``}
		${gap               ? `gap:					${gap};`            : ``}
		${p                 ? `padding:				${p};`              : ``}
		${mb                ? `margin-bottom:		${mb};`             : ``}
		${w                 ? `width:				${w};`              : ``}
		${minW              ? `min-width:			${minW};`           : ``}
		${maxW              ? `max-width:			${maxW};`           : ``}
		${h                 ? `height:				${h};`              : ``}
		${minH              ? `max-height:			${minH};`           : ``}
		${maxH              ? `max-height:			${maxH};`           : ``}
		${columns           ? `grid-template-columns: repeat(${columns}, minmax(0, 1fr));` : ``}
		${rows             	? `grid-template-rows: repeat(${rows}, minmax(0, 1fr));` : ``}
		${overflow ? `overflow:		${overflow};` : ``}
		${border ? `border:		${border};` : ``}
		${zIndex ? `z-index:		${zIndex};` : ``}
		${position ? `position:		${position};` : ``}

	`
}

const GRID_STYLE_PROPS = ['flex', 'fDirection', 'fWrap', 'vAlign', 'hAlign', 'gap', 'p', 'mb', 'w', 'minW', 'maxW', 'h', 'minH', 'maxH', 'overflow', 'columns', 'border', 'rows', 'zIndex', 'position', '$queries'];
const shouldForwardGridProp = (prop: string) => !GRID_STYLE_PROPS.includes(prop);

export const GridContainer = styled.div.withConfig({
	shouldForwardProp: shouldForwardGridProp
})<GridPropsType>`
	display: inline-grid;

	${({ $queries, ...rest }: GridPropsType) => `
		${setStyle(rest)}
		${
			$queries 
				? Object.keys($queries).reverse()?.map((breakpoint: string) => {
						return `@media (max-width: ${breakpoint}px) {
							${setStyle($queries[breakpoint])}
						}`;
					}).join('') 
				: ``
		}
	`}
`

const GRID_CHILD_PROPS = ['w', 'h'];
const shouldForwardGridChildProp = (prop: string) => !GRID_CHILD_PROPS.includes(prop);

export const GridChildContainer = styled.div.withConfig({
	shouldForwardProp: shouldForwardGridChildProp
})<StyledGridChildPropsType>`
	${({ w }) => w ? `width: ${w};` : ``}
	${({ h }) => h ? `height: ${h};` : ``}
`
