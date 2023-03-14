
import style from './addStyle.module.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getNewOrder } from '../../store/action/addNewOrder'
import { getOrder } from '../../store/action/addOrders'

export default function Add() {
  const login = useSelector((state) => state.logIn)
  const state = useSelector((state) => state)
  console.log('STATE==>', state);

  useEffect(() => {

    setName(login.name);
   
  }, [login.name])

  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");
  const [comment, setComment] = useState("");
  const [messege, setMessege] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);

  };
  const addresHandler = (e) => {
    setAddres(e.target.value);

  };
  const commentHandler = (e) => {
    setComment(e.target.value);

  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newOrder = async (e) => {
    e.preventDefault()
    try {
      if (name.length === 0 || addres.length === 0) {
        setMessege("Запoлните поля ИМЯ и АДРЕС !!!")
      } if (name.length > 0 && addres.length > 0) {
        e.preventDefault()
        dispatch(getNewOrder(name, addres, comment));
        dispatch(getOrder());
        navigate('/orders');
      }  
    } catch (error) {

    }
  };


  return (
    <div className={style.box}>

      <form className={style.form}>

        <h2> {messege? messege : 'Добавить заказ'} </h2>

        <div className={style.inputdiv}>
          <input
            className={style.inputs}
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => nameHandler(e)}
          />
        </div>

        <div className={style.inputdiv}>
          <input
            className={style.inputs}
            type="text"
            placeholder="Ваш адрес"
            value={addres}
            onChange={(e) => addresHandler(e)}
          />
        </div>

        <div className={style.inputdiv}>
          <input
            className={style.inputs}
            type="text"
            placeholder="Коментарий"
            value={comment}
            onChange={(e) => commentHandler(e)}
          />
        </div>

        <button type='submit' className={style.button} onClick={newOrder}>Добавить</button>

      </form>

    </div>
  )
}
