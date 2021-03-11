import { useState } from 'react';


export const useExpandMenu = ( initialState = true ) => {
    
    const [open, setOpen] = useState(initialState); // 10
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return {
        open,
        handleDrawerOpen,
        handleDrawerClose
    };

}