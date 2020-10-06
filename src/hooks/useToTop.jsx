import { useEffect } from 'react';

export default function useTop() {
    useEffect(() => {
        setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 100)

    }, [])
}