import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import style from './navStyle.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getLog } from '../../store/action/addLogIn_'




export default function Navigation() {
  const login = useSelector((state) => state.logIn)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (login.name?.length === 0) {
      navigate('/login');
    }

  }, [login.name, navigate])

  const logOut = async (e) => {
    
    try {
     dispatch(getLog(undefined, undefined));
    } catch (error) {

    }
  };

  return (
    <>
      {login.name ?
        (<div className={style.box}>
          <div className={style.left}>
            <div > <Link to='/orders' className={style.textcolor} >Все заказы</Link> </div>
            <div > <Link to='/add' className={style.textcolor}>Добавить заказы</Link></div>
          </div>

          <div className={style.right}>
            <div className={style.name}> {login.name}  </div>
            <div>  <Link  className={style.textcolor} onClick={logOut} >Выйти</Link></div>
          </div>
        </div>
        ) : (<div></div>)}

    </>


  )
}
