import { Text, Title } from '@mantine/core';

import classes from 'Logo.css';

export function Logo(){
	return (
		<Title className={classes.title} >
			<Text inherit={true} variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
				prototype
			</Text>
		</Title>
	)
}
