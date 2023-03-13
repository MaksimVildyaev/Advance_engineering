import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import style from './ordersStyle.module.css';

export default function Table({ el }) {
   const login = useSelector((state) => state.logIn)
   const [nbr, setNbr] = useState(0);
  
   return (
      <>
         <div className={style.header}>
            <div className={style.nbr}> {el.id} </div>
            <div className={style.name}> {el.name} </div>
            <div className={style.addres}> {el.addres} </div>
            <div className={style.date}> {el.createdAt.substr(0, 10)} </div>
            <div className={style.status}> {el.status} </div>
            <div className={style.coment}> {el.comment} </div>
         </div>
         {login.role === 'ADMIN'? 
         (<div className={style.buttons}>
             <button> Cтатус </button>
            <button> Удалить </button>
         </div>
         ) : (
         <div></div>
         )}
         
      </>

   )
}
