import React, { useState } from 'react';

import UserList from './UserList';
import './Users.css';

interface userData {
    name: string,
    id: number,
}

interface Props {
    userList: userData[],
}


const Users = (): JSX.Element => {

    const [name, setName] = useState<string>('')
    const [userList, setUserList] = useState<userData[]>([]);

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

    return (
        <div>
            <h1>User list</h1>
            <form onSubmit={event => addUser(event)}>
                <input type="text" placeholder="Enter name" value={name} onChange={changeInput} />
                <button type="submit">Add user</button>
            </form>
            <UserList userList={userList} />
        </div>
    );
}

export default Users;
export type { Props };
