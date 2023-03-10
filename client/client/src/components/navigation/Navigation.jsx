import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import style from './navStyle.module.css';
// import { useSelector, useDispatch } from 'react-redux';



export default function Navigation() {
  return (
    <div className={style.box}>
      <div className={style.left}>
        <div > <Link to='/orders' className={style.textcolor} >Все заказы</Link> </div>
        <div > <Link to='/add' className={style.textcolor}>Добавить заказы</Link></div>
      </div>
      
    <div className={style.right}>
      <div className={style.name}> UserName UserName  </div>
      <div> <Link to='/logout' className={style.textcolor}>Выйти</Link></div>
    </div>
             
        {/* <Link className="nav-link" to='/login' >LogIn</Link> */}

          
    </div>
  )
}
