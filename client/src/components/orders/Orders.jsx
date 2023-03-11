import React from 'react'
import style from './ordersStyle.module.css';

export default function Orders() {
  return (
    <div className={style.box}>
      <div className={style.table}>
        
         <div className={style.header}>
        <div className={style.nbr}> № </div>
        <div className={style.name}> - Имя клиента - </div>
        <div className={style.addres}> - Адрес - </div>
        <div className={style.date}> - Дата - </div>
        <div className={style.status}> - Статус - </div>
        <div className={style.coment}> - Коментарий - </div>
        </div>

        <div>
          
        <div className={style.header}>
        <div className={style.nbr}> 1 </div>
        <div className={style.name}> Ивн Иванов </div>
        <div className={style.addres}> г.Сaмара. 25.24 </div>
        <div className={style.date}> 12 ноября 2023 </div>
        <div className={style.status}> Новый </div>
        <div className={style.coment}> нету </div>
        </div>

        <div className={style.buttons}> <button> Cтатус </button> <button> Удалить </button> </div>
        </div>
        

      </div>
    </div>
  )
}
