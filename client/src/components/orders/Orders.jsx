import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './ordersStyle.module.css';
import Table from './Table'

export default function Orders() {
  const login = useSelector((state) => state.logIn)
  
  const [orders, setOrders] = useState([]);
  // console.log("ORDERS+++>", orders);

  useEffect(() => {
    (async function getOrders() {
      const data = await fetch('http://localhost:3002/allorders')
      const res = await data.json()
      setOrders(res)
      // console.log('Hi!!!!');
    })()
  }, [login.name])

  return (
    <div className={style.box}>
      <div className={style.table}>
         <div className={style.header}>
        <div className={style.nbr}> № </div>
        <div className={style.name}> - Имя клиента - </div>
        <div className={style.addres}> - Адрес - </div>
        <div className={style.date}> - Дата - 
        <button className={style.sortbutton1}></button> 
        <button className={style.sortbutton2}></button> 
        </div>
        <div className={style.status}> - Статус -  </div>
        <div className={style.coment}> - Коментарий - </div>
        </div>
        {orders?.map((el) => <Table el={el} key={el.id}/>)}

      </div>
    </div>
  )
}
