

import SliderWrapper from './SliderWrapper'
import Card from './Card'
import { shuffledData } from '../data/mainProducts/CardProducts'

const Slider = () => {

  return (
        <SliderWrapper>
          {
            shuffledData.map((item)=>(
                <Card item={item} key={item.id} img={item.img} price={item.price} title={item.title} />
            ))
          }
        </SliderWrapper>
  )
}

export default Slider
