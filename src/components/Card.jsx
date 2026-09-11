import './Card.css';
import { FaStar } from "react-icons/fa";

function Card({ card }) {

  return (
    <div className='card'>
      <div className='card-image-background'>
        <h4 className={"card-rarity " + (card.rarity === 'SSR' ? 'ssr' : 'sr')}>{card.rarity}</h4>
        <img className='card-image' src={card.image} alt="" />
      </div>
      <div className='card-content'>
        <div className='card-power'>
          <h3>{card.level}</h3>
          <h3 className='card-plus'>+{card.plus}</h3>
        </div>
        <h3 className='card-title'>{card.name}</h3>
        <h3 className='card-stars'>
          {Array.from({length: card.stars}).map((_, star) => (
            <span className='star'><FaStar key={star} /></span>
          ))}
          </h3>
      </div>
    </div>

  )
}

export default Card