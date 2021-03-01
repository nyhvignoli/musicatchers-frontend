import { useState } from 'react';

export const useProgress = (initialValue) => {
    const [pending, setPending] = useState(initialValue);
    
    const changeProgress = () => {
        setPending(!pending);
    };

    return { pending, changeProgress };
};