import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div className="flex app-header">
            <div className="flex header-container">
                <img className="todo-icon" src={require('../../assets/todo-list.svg')} alt="todo-list-icon" />
                <h1>Todo List</h1>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;