import { createContext, useEffect, useState } from 'react'

export const CardContext = createContext()


export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const response = await fetch('api/cards');
                const data = await response.json()
                setCards(data);
            }
            catch (error) {
                console.log('API Error : ', error)
            }
            finally {
                setLoading(false);
            }
        }
        fetchAll();
    }, [])



    return (
        <CardContext.Provider value={{ cards, setCards, loading }}>
            {children}
        </CardContext.Provider>
    )
}

