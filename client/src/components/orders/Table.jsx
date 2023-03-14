import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { getStDone } from '../../store/action/addStatusDone'
import { getStNew } from '../../store/action/addStatusNew'
import { getDelete } from '../../store/action/addDeleteOrder'

import style from './ordersStyle.module.css';

export default function Table({ el }) {
   const login = useSelector((state) => state.logIn)
   const state = useSelector((state) => state)
   const status = useSelector((state) => state.status)
   const dispatch = useDispatch();

   console.log(state);

   const [dsp, setDsp] = useState("none");
   const [dsp2, setDsp2] = useState("none");

   const nbrHandler = (e) => {
      if (dsp === 'none') {
        setDsp('block')
       } 
    };
  
     const closeHandler = (e) => {
       if (dsp === 'block') {
         setDsp('none')
       }
    };

    const dsp2Handler = (e) => {
      if (dsp2 === 'none') {
         setDsp2('block')
       } 
    };

    const stusDone = async (id) => {
      try {
         dispatch(getStDone(id));
         setDsp2('none');
      } catch (error) {
  
      }
    };

     const stusNew = async (id) => {
      try {
         dispatch(getStNew(id));
         setDsp2('none');
      } catch (error) {
  
      }
    };
      const deleteOrder = async (id) => {
         try {
            dispatch(getDelete(id));
            setDsp('none');
         } catch (error) {
      
         }
      };
    
   return (
      <>
         <div className={style.header} >
            <div className={style.modal} style={{display: dsp}}> 
            <h3>Удалить заказ?</h3> 
            <button type='button' onClick={() => deleteOrder(el.id)}>Да</button> 
            <button type='button' onClick={closeHandler}> Нет</button>
            </div>
            <div className={style.modal2} style={{display: dsp2}}> 
            <h3>Изменить статус?</h3> 
            <button type='summit' onClick={() => stusDone(el.id)}>Выполнен</button> 
            <button type='summit' onClick={() => stusNew(el.id)}> Новый </button>
            </div>
            <div className={style.nbr} > {el.id} </div>
            <div className={style.name}> {el.name} </div>
            <div className={style.addres}> {el.addres} </div>
            <div className={style.date}> {el.createdAt.substr(0, 10)} </div>
            <div className={style.status} 
            style={el.status === 'Выполнен' ? { backgroundColor: "rgb(175, 228, 175)" } 
            : {backgroundColor: "rgb(207, 168, 168)"}}> {status.id === el.id? status.status:el.status} </div>
            <div className={style.coment}> {el.comment} </div>
         </div>
         {login.role === 'ADMIN'? 
         ( el.status === 'Выполнен' ? 
             <div className={style.buttons}>
            <button type='button' onClick={dsp2Handler}> Cтатус </button>
            <button type='button' onClick={nbrHandler}> Удалить </button>
            </div> : <div className={style.buttons}>
            <button type='button' onClick={dsp2Handler}> Cтатус </button>
            </div>

         ) : (
         <div></div>
         )}
         
      </>

   )
}
