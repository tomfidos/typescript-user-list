function Users(): JSX.Element {
    return (
        <div>
            <h1>User list</h1>
            <form>
                <input type="text" placeholder="Enter name" />
                <button type="submit">Add user</button>
            </form>
        </div>
    );
}

export default Users;
