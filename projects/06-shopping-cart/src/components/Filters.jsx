import './Filters.css'

import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
  const { filters, setFilters } = useFilters()
  
  const minPriceFilterId = useId
  const categoryFilterId = useId

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
    
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input 
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={Filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
    
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="smartphones">Celulares</option>
          <option value="groceries">Comestibles</option>
          <option value="skincare">Cuidado de la piel</option>
          <option value="home-decoration">Decoración</option>
          <option value="fragrances">Fragancias</option>
          <option value="laptops">Portátiles</option>
        </select>
      </div>
    </section>
  )
}