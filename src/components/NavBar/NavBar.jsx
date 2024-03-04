import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [path, setPath] = useState('');
    const nav = useNavigate();

    useEffect (() => {
        nav(path)
    }, [path]);

    return (
        <div className="NavBar">
            <div className="NavBar-title">wan</div>
            <header onClick={() => {setPath('/')}}>Home</header>
            <header onClick={() => {setPath('/BookReview')}}>Book Review</header>
            <header onClick={() => {setPath('/MovieReview')}}>Movie Review</header>
        </div>
    )
}

export default NavBar;