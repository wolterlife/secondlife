import React, {useEffect, useState} from "react";
import styles from './TableAccounts.module.css'
import {database, onValue, ref} from "../../../../util/firebase";

const TableAccount = () => {
  const [oldDataInfo, setDataInfo] = useState([]);
  useEffect(() => { // Получение cписка доп инфы
    onValue(ref(database, 'usersInfo/'), snapshot => {
      if (snapshot.val() !== null) setDataInfo(Object.values(snapshot.val()).slice(1));
    });
  }, []);

  const res = oldDataInfo.map(item => // Экземпляр строчки таблицы
    <tr key={item.formEmail}>
      <td className={styles.item}>{item.formEmail}</td>
      <td className={styles.item}>{item.formFirstName}</td>
      <td className={styles.item}>{item.formSecondName}</td>
      <td className={styles.item}>{item.formPhone}</td>
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
        <th className={styles.head}>Номер телефона</th>
      </tr>
      </thead>
      <tbody>
      {res}
      </tbody>
    </table>
    </div>
  )
}

export default TableAccount;
