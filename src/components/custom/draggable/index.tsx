import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import Flex from "components/basic/flex";
import Icon from "components/basic/icon";
import { Span } from "components/basic/text";
import YearTag, { TypeTag } from "../tag";
import { flexStyle, itemFlexStyle, spanStyle } from "./draggable.style";

interface Item {
    id: string;
    icon: string;
    content: string;
    description?: string;
    year?: string;
    type?: string;
}

interface DraggableListProps {
    itemList: Item[];
    title: string
}

export default function DraggableList({ itemList, title }: DraggableListProps) {
    const [items, setItems] = useState(itemList);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        const reorderedItems = reorderItems(items, result.source.index, result.destination.index);
        setItems(reorderedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <Flex
                        {...provided.droppableProps}
                        cRef={provided.innerRef}
                        $style={flexStyle}
                    >
                        <Span $style={{
                            mb: ".5rem"
                        }}>{title}</Span>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <ItemWrapper
                                        cRef={provided.innerRef}
                                        $isDragging={snapshot.isDragging}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Icon icon={item.icon} width="3rem" />
                                        <Flex $style={itemFlexStyle}>
                                            <Span $style={{
                                                color: "color-blue",
                                                weight: "0"
                                            }}>
                                                {item.content}
                                            </Span>
                                            {item.description && <Span $style={spanStyle}>{item.description}</Span>}
                                            <Flex $style={{
                                                gap: ".5rem"
                                            }}>
                                                {item.year && <YearTag year={item.year} />}
                                                {item.type && <TypeTag type={item.type} />}
                                            </Flex>
                                        </Flex>
                                    </ItemWrapper>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </Flex>
                )}
            </Droppable>
        </DragDropContext>
    )
}

const reorderItems = (list: Item[], startIndex: number, endIndex: number): Item[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};



const ItemWrapper = styled(Flex).withConfig({
    shouldForwardProp: (prop) => prop !== 'isDragging' && prop !== '$isDragging'
})<{ $isDragging: boolean }>`
    background: ${({ $isDragging }) => $isDragging ? '#3f464e' : '#22272c'};
    padding: .5rem;
    margin-bottom: .5rem;
    align-items: center;
    gap: 1rem;
    border-radius: .5rem;
    max-width: 20rem;

    transition: background .3s;

    &:hover {
        background: #3f464e;
    }
`