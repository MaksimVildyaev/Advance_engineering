import React from 'react'
import style from './addStyle.module.css';

export default function Add() {
  return (
    <div className={style.box}>

      <form className={style.form}>

        <h2>Добавить заказ</h2>

        <div className={style.inputdiv}>
          <input
            className={style.inputs}
            type="text"
          />
        </div>

        <div className={style.inputdiv}>
          <input
            className={style.inputs}
            type="text"
            placeholder="Ваш адрес"
          />
        </div>

        <div className={style.inputdiv}>
          <input
            className={style.inputs}
            type="text"
            placeholder="Коментарий"
          />
        </div>

        <button className={style.button}>Добавить</button>

      </form>

    </div>
  )
}
