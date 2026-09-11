import { useMemo } from 'react'

import './SearchForm.css'


function SearchForm({ cards, searchQuery, setSearchQuery, selectedRarity, setSelectedRarity }) {
  const RarityData = useMemo(() =>{
    const uniqueRarity = [...new Set(cards.map(card => card.rarity))]
    return uniqueRarity;
  }, [cards])

  return (
    <div className='search-content'>
      <form>
        <input value={searchQuery} name='query' placeholder='Rechercher une carte...' className='input-name' type="text" onChange={e => setSearchQuery(e.target.value)} />
        <select value={selectedRarity} className='select-rarety' name='rarety' defaultValue="" onChange={e => setSelectedRarity(e.target.value)}>
          <option value="">Toutes raretés</option>
          {RarityData.map(rarity => (
            <option key={rarity} value={rarity}>{rarity}</option>
          ))}
        </select>
      </form>
      <h3>{cards.length} cartes</h3>
    </div>
  )
}

export default SearchForm