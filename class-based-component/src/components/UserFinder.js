import { Fragment, useState, useEffect } from 'react';

import Users from './Users';



const UserFinder = () => {
    const DUMMY_USERS = [
        { id: 'u1', name: 'Max' },
        { id: 'u2', name: 'Manuel' },
        { id: 'u3', name: 'Julie' },
      ];
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input type='search' onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;