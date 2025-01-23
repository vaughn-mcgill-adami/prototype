import { useDisclosure } from '@mantine/hooks';
import { Flex, Burger, AppShell } from '@mantine/core';
import { Timeline, FileInput, Button, Center, TimelineItem, Collapse, Image, Group, Badge, Card, ActionIcon } from '@mantine/core';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

import { useListState } from '@mantine/hooks';
import cx from 'clsx';

import { Space } from '@mantine/core';

import plus from '../assets/plus.svg'

import { useScrollIntoView } from '@mantine/hooks';

import { MenuButton } from '../components/Buttons/StdButton';

import { Anchor, Text, Title } from '@mantine/core';

import classes from './randomstuff.css';

import './plus.css'
//import './mainpage.css'

import { AreaChart } from '@mantine/charts';
import axios from 'axios';

import refresh from '../assets/refresh.svg'

export function HomePage() {
	const [entries, handlers] = useListState([]);
	const [navbarPage, setNavbarPage] = useState<string>("Journal")
	const [opened, {toggle}] = useDisclosure();
	
	return (
		<AppShell
			header={{height : 100}}
			navbar={{width : 300, breakpoint : 'sm', collapsed : {mobile : !opened}}}
			padding="md"
			withBorder={false}
		>
			<AppShell.Header withBorder={true}>
				<Flex 
					justify="space-between"
					align='center'
					style={{padding : '10px 20px'}}
				>   
					<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm'/>
					<Logo/>
				</Flex>
			</AppShell.Header>
			<AppShell.Navbar p='md' style={{gap : '10px'}}>   
				<Menu buttonNameList={['Journal', 
									   'Trends']} 
					  stateChanger={setNavbarPage}
					  activeButton={navbarPage}
				/>
			</AppShell.Navbar>
			<AppShell.Main>
				<MainWindow page={navbarPage} entries={entries} handlers={handlers}/>
			</AppShell.Main>
			<AppShell.Aside>
				<RefreshButton onClick={
					() => {
						axios
						.get("http://localhost:8000/api/journal/")
						.then((res) => handlers.setState(res.data))
						.catch((err) => console.log(err));
						console.log(entries);
					}
				}
				/>
			</AppShell.Aside>
		</AppShell>
	);
}