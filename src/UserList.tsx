import { Props } from './Users';


const UserList = (props: Props): JSX.Element => {

    const userElements = props.userList.map(user => <li key={user.id}>{user.name}</li>);

    return (
        <ul>{userElements}</ul>
    );
}

export default UserList;
