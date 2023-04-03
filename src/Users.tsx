import React, { useState } from 'react';

import UserList from './UserList';
import './Users.css';

interface UserData {
    name: string,
    id: number,
}


const Users = (): JSX.Element => {

    const [name, setName] = useState<string>('')
    const [userList, setUserList] = useState<UserData[]>([]);

    const changeInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setName(event.currentTarget.value);
    }

    const addUser = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        const user = {
            name: name,
            id: Date.now(),
        }

        setUserList(userList.concat(user));
    }

    const removeUser = (id: number): void => {
        setUserList(userList.filter(user => user.id !== id));
    }

    return (
        <div className="container">
            <h1>User list</h1>
            <form onSubmit={event => addUser(event)}>
                <input type="text" placeholder="Enter name" value={name} onChange={changeInput} />
                <button type="submit">Add user</button>
            </form>
            <UserList userList={userList} removeUser={removeUser} />
        </div>
    );
}

export default Users;
export type { UserData };
