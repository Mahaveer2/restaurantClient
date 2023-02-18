import { Route, redirect, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '../state/store';
import { useEffect } from 'react';

function RequireAuth(props) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { Component } = props;

    useEffect(() => {
        if(!token){
          navigate("/login");
        }
    },[]);
    return (
        <Component/>
    );
}

export default RequireAuth;