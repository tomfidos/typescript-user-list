import { UserData } from './Users';
import './UserList.css';

interface UserListProps {
    userList: UserData[],
    removeUser: (id: number) => void,
}


const UserList = (props: UserListProps): JSX.Element => {

    const userElements: JSX.Element[] = props.userList.map(user => <li key={user.id}>{user.name}<span onClick={() => props.removeUser(user.id)}>X</span></li>);

    return (
        <ul className="list">{userElements}</ul>
    );
}

export default UserList;
