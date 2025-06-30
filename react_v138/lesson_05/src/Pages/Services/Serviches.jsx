import './style.css'
import { Item } from '../../data/shop'

export default function Services() {
    return (

        <section>
            <h1>Service</h1>
            <div className="row">
                {
                    Item.map(item => (

                        <div className='item'>
                            <h4>{item.name}</h4>
                            <p>{item.text}</p>
                            <a href="/">на товар</a>
                        </div>

                    ))
                }
            </div>

        </section>


    )
}