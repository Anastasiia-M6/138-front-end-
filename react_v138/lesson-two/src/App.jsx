
import Button from './components/Button/Botton';
import './style/main.scss';


export default function App() {
    return (
        <div className="wrapper">
            <header className='header'></header>

            <section className='hero'>
                <div className="container">
                    <h1>test</h1>
                    <button>test</button>
                </div>
            </section>

            <section className='contact'>
                <div className="container">
                    <Button />
                </div>
            </section>
        </div>
    )
}

