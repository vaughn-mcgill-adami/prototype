import { Space } from '@mantine/core';
import { useState } from 'react';

import { TrendsWindow } from './TrendsWindow';
import { JournalWindow } from './JournalWindow';

export function BigSpace(){
    return (
        <>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </>
    )
}

export function MainWindow({page, entries, handlers}){
	if(page === 'Journal'){
		return ( 
            <>
                <JournalWindow state={entries} handlers={handlers}/>
                <BigSpace/>
            </>
        )
	}
	else if(page === 'Trends'){
		return (
            <>
                <TrendsWindow entries={entries}/>
                <BigSpace/>
            </>
        )
	}
}