import Flex from "components/basic/flex";
import { Span } from "components/basic/text";
import { TypeTagStyle, YearTagStyle } from "./tag.style";

interface TagProps {
    year: string
}
export default function YearTag({ year }: TagProps) {
    return (
        <Flex $style={YearTagStyle}>
            <Span $style={{
                size: ".7rem"
            }}>
                {
                    year + ' years experience'
                }
            </Span>
        </Flex>
    )
}

interface TypeProps {
    type: string
}
export const TypeTag = ({ type }: TypeProps) => {
    return (
        <Flex $style={TypeTagStyle}>
            <Span $style={{
                size: ".7rem"
            }}>
                {
                    type
                }
            </Span>
        </Flex>
    )
}