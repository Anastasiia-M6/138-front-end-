import { home, global } from '../../data/content';
import './style.css'

export default function Home() {
    return (
        <>
            <section className='hero'>
                <h1>{home.title}</h1>
                <p>{home.text}</p>
                <button>{global.buttonAdd}</button>
            </section>
            <section className='about'>
                <h1>{global.logo}</h1>
            </section>
        </>

    )
}