import { Button } from "@mantine/core";
import { useState } from 'react';

//<Button onClick={() => setNavbarPage('journal')} variant={navbarPage === 'journal' ? 'light' : 'outline'} radius='40px'>Journal</Button>

export function MenuButton({name, currentPage, onClick}){
    return (
        <Button 
            onClick={onClick} 
            variant={name === currentPage ? 'light' : 'transparent'}
            color={name === currentPage ? '#ffa94d' : '#fff3bf'}
        >
            {name}
        </Button>
    )
}