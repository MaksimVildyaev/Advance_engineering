import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from './ordersStyle.module.css';
import Table from './Table'

export default function Orders() {
  const orders = useSelector((state) => state.orders)
  const newOrders = useSelector((state) => state.newOrder)
  const status = useSelector((state) => state.status)
  const deleteOrder = useSelector((state) => state.deleteOrder)
   const state = useSelector((state) => state)
   console.log(state);

  const [ordersFinal, setOrders] = useState();
  const [st, setSt] = useState(0);

  console.log("ordersFinal", ordersFinal);
  
  useEffect(() => {
    const finalDatas = setTimeout (() => {
        if (status.length <= newOrders.length) {
          setOrders(status)
          } else if ( newOrders.length > orders.length) {
            setOrders(newOrders)
            } else if (deleteOrder.length < newOrders.length && deleteOrder.length < orders.length)  {
          setOrders(deleteOrder)
             } else {
            setOrders(orders)
              }
        }, 0)
      }, [deleteOrder, deleteOrder.length, newOrders, newOrders.length, orders, orders.length, status, state])



  
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
        {ordersFinal?.map((el) => <Table el={el} key={el.id}/>)}

      </div>
    </div>
  )
}
