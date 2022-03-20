import React, {useEffect, useState} from "react";
import styles from './TableMessages.module.css'
import {database, onValue, ref, set} from "../../../../util/firebase";

const TableMessages = () => {
  const [oldDataInfo, setDataInfo] = useState([]);
  useEffect(() => { // Получение cписка доп инфы
    onValue(ref(database, 'messages/'), snapshot => {
      if (snapshot.val() !== null) setDataInfo(Object.values(snapshot.val()));
    });
  }, []);

  function dellFoo(item) {
    oldDataInfo.splice(oldDataInfo.indexOf(item),1);
    set(ref(database, "messages/"), oldDataInfo)
  }

  const res = oldDataInfo.map(item => // Экземпляр строчки таблицы
    <tr key={item.id}>
      <td className={styles.item}>{item.email}</td>
      <td className={styles.item}>{item.firstName}</td>
      <td className={styles.item}>{item.secondName}</td>
      <td className={styles.item}>{item.message}</td>
      <td className={styles.item}><button onClick={() =>dellFoo(item)}>Удалить</button></td>
    </tr>
  )


  return (
    <div className={styles.container}>
      <table className={styles.table} border="1">
        <thead>
        <tr>
          <th className={styles.head}>Email</th>
          <th className={styles.head}>Имя</th>
          <th className={styles.head}>Фамилия</th>
          <th className={styles.head}>Сообщение</th>
          <th className={styles.head}>Действие</th>
        </tr>
        </thead>
        <tbody>
        {res}
        </tbody>
      </table>
    </div>
  )
}

export default TableMessages;
