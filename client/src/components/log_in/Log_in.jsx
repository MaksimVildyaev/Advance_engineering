import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getLog } from '../../store/action/addLogIn_'
import { getOrder } from '../../store/action/addOrders'
import style from './logStyle.module.css';


export default function Log_in() {
  const login = useSelector((state) => state.logIn)
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessege] = useState("");
  
  const nameHandler = (e) => {
    setName(e.target.value);

  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);

  };

  const navigate = useNavigate();

  const logInNow = async (e) => {
    e.preventDefault()
    try {
      if (password.length < 8 || name.length === 0) {
        setMessege("Пароль должен быть не менее 8 символов. Поле -ИМЯ- не может быть пустым.")
      } if (password.length >= 8 && name.length > 0) {
        e.preventDefault()
        dispatch(getLog(name, password));
        dispatch(getOrder());
      }  if (login.error) {
        setMessege(login.error)
      } 
    } catch (error) {

    }
  };

  useEffect(() => {
    if (login.name.length > 0) {
      navigate('/orders');
    }
  }, [login.name, navigate]);
  
  return (
    <div className={style.box}>

      <div className={style.form}>
        <div className={style.messege}> <h4> {messege ? messege : "Заполните форму"} </h4> </div>

        <div className={style.inputdiv}>
          <input
            name='name'
            className={style.inputs}
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => nameHandler(e)}
          />
        </div>

        <div className={style.inputdiv}>
          <input
            name='password'
            className={style.inputs}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
        </div>

        <button type='submit' className={style.button}  onClick={logInNow} >Войти</button>

      </div>

    </div>
  )
}
