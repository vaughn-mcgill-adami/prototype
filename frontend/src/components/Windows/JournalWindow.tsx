import { Timeline, FileInput, Button, Center, TimelineItem, Collapse, Image, Group, Badge, Card, ActionIcon } from '@mantine/core';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

export function JournalWindow({state, handlers}){
	//const [buttonRecently, setButtonRecently] = useState(false); fading button background after press.
	/* const { scrollIntoView, targetRef } = useScrollIntoView<HTMLImageElement>({
		offset: 60,
	}); */
	const [opened, { toggle }] = useDisclosure(false);

	//TODO: auto-refresh every couple secs.

	//TODO: save where the user scrolled to? if necesary.

	console.log(state);

	function getEntryNumAttr(item, attr) {
		//console.log(entry.children.find((item) => item.name==attr));
		const ret = parseFloat(item.children.find((item) => item.name==attr).amount)
		return ret
	}

	const items = state.map((item, index) => (
		<Draggable key={item.id.toString()} index={index} draggableId={item.id.toString()}>
			{(provided, snapshot) => (
				<TimelineItem>
					<Card
					className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}>
						<Text fw={500}>{item.name}</Text>
						<Text size='sm'>{item.day} {item.time}</Text>
						<Space h='md'/>
						<Badge>{'RATIO: ' + (getEntryNumAttr(item, 'fat')/(getEntryNumAttr(item, 'protein') + getEntryNumAttr(item, 'netcarbs'))).toString()}</Badge>
						<Badge>{"NET CARBS: " + getEntryNumAttr(item, 'netcarbs')}</Badge>
					</Card>
				</TimelineItem>
			)}
		</Draggable>
	));

	return (
		<>
			<Center>
				<Timeline bulletSize={40}>
				<DragDropContext
				onDragEnd={({ destination, source }) =>
					handlers.reorder({ from: source.index, to: destination?.index || 0 })
				}
				>
					<Droppable droppableId="dnd-list" direction="vertical">
						{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
						{items}
						{provided.placeholder}
						</div>
						)}
					</Droppable>
				</DragDropContext>
				</Timeline>
			</Center>
		</>
	)
}
