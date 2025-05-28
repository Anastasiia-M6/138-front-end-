import './style.css'
export default function UsersCard({ name }) {
    console.log(name.name)

    return (
        <div className='item'>
            <img src={`./img/${user.img}`} alt="" />
            <h3>{name.name}</h3>
            <p>age:{name.age}</p>
            <p> Email: <a href='{`mailtoo`}'>{name.email}</a></p>
        </div>

    )
}
