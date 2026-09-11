import { useContext, useState } from 'react'
import Card from './components/Card'
import SearchForm from './components/SearchForm'
import { CardContext } from './context/CardContext'
import './App.css'

function App() {
  const { cards, loading } = useContext(CardContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");

  const filterCards = cards.filter(card => {
    const searchName = card.name.toLowerCase().includes(searchQuery.toLowerCase());
    const searchRarity = selectedRarity === "" || card.rarity === selectedRarity;
    return searchName && searchRarity;
  })

  return (
    <div className='collection'>
      <h1>Collection</h1>
      <div className='search-form'>
        <SearchForm cards={cards} searchQuery={searchQuery} selectedRarity={selectedRarity} setSearchQuery={setSearchQuery} setSelectedRarity={setSelectedRarity} />
      </div>
      <div className='cards'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          filterCards.map((card) => (
            <Card key={card.id} card={card} />
          ))
        )}

      </div>
    </div>
  )
}

export default App
