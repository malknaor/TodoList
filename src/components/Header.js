import React from 'react';
import './css/Header.css';

const Header = () => {
    return (
        <div className="flex app-header">
            <div className="header-container">
                <img className="todo-icon" src={require('../assets/todo-list.svg')} alt="todo-list-icon" />
                <h1>Todo List</h1>
            </div>
        </div>
    );
};

export default Header;