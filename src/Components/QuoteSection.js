
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function QuoteSection() {
  return (
    <div className='section quote'>
      <p className='quote-text'> <FontAwesomeIcon icon={faQuoteLeft}/> Enjoy your drink with the finest selection of ingredients. Guaranteed Fresh and Newly made everyday. Our Professional Skills to elaborate the taste and senses of those ingredients to another level. </p>
      <p className='quote-author'>- Rhett Marcelo</p>
    </div>
  )
}

export default QuoteSection
