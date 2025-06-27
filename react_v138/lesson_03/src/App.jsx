
import UsersCard from './component/Users/UsersCard.jsx';
import { Users } from './data/users.js';


export default function App() {

    // const users = [
    //     { id: 1, name: "Пользователь 1", age: 25, email: "user1@example.com" },
    //     { id: 2, name: "Пользователь 2", age: 30, email: "user2@example.com" },
    //     { id: 3, name: "Пользователь 3", age: 22, email: "user3@example.com" },
    //     { id: 4, name: "Пользователь 4", age: 27, email: "user4@example.com" },
    //     { id: 5, name: "Пользователь 5", age: 29, email: "user5@example.com" }
    // ]
    console.log(Users);

    //створення компоненту в цьому файлы
    // const Arr1 = true;
    // const usersCard = (Users.map(item => <li>{item.name}</li>))
    // const UsersIsLogin = (UsersIsLogin.map(item => <li>{item.name}</li>))
    const usersList = Users.map(item => (
        item.age >= 18 && (
            <UsersCard name={item} />)
    ))


    return (
        <>
            {/* <h1>{Users[0].name}</h1>
            <h1>{Users[1].name}</h1>
            <h1>или</h1> */}

            {/* old */}
            {/* <ul>
                {
                    users.map(item => (
                        <li key={item.id}>
                            <h5>{item.name}</h5>
                            <p>{item.age}</p>
                        </li>
                    ))

                }
            </ul> */}
            {/* <hr />
            verasia v2
            <ul>
                {usersCard}
            </ul> */}


            {/* <ul>
                {Arr1 ? usersCard : UsersIsLogin}
            </ul> */}

            versia v3
            <hr />

            {/* <UsersCard name={Users[0]} />
            <UsersCard name={Users[1]} /> */}
            {usersList ? usersList : <h3>нет пользователей</h3>}
        </>
    )
}