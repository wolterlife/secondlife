import React, {useEffect, useState} from "react";
import styles from './TableOrders.module.css'
import {database, onValue, ref, set} from "../../../../util/firebase";
import PopUpOrder from "../PopUpOrder/PopUpOrder";

const TableOrders = () => {
  const [oldDataInfo, setDataInfo] = useState([]);
  const [currOrder, setOrder] = useState([]);
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  useEffect(() => { // Получение cписка доп инфы
    onValue(ref(database, 'orders/'), snapshot => {
      if (snapshot.val() !== null) setDataInfo(Object.values(snapshot.val()));
    });
  }, []);

  function dellFoo(item) {
    oldDataInfo.splice(oldDataInfo.indexOf(item), 1);
    set(ref(database, "orders/"), oldDataInfo)
  }

  function checkOrder(item) {
    setOrder(item.product);
    setPopUpVisible(true);
  }

  const res = oldDataInfo.map(item => // Экземпляр строчки таблицы
    <tr key={item.id}>
      <td className={styles.item}>{item.client.formFirstName} {item.client.formSecondName}</td>
      <td className={styles.item}>{item.client.formEmail}</td>
      <td className={styles.item}>{item.client.formPhone}</td>
      <td className={styles.item}>
        <button onClick={() => checkOrder(item)}>Заказ</button>
        <button onClick={() => dellFoo(item)}>Удалить</button>
      </td>
    </tr>
  )


  return (
    <div className={styles.container}>
      {isPopUpVisible && <PopUpOrder order={currOrder} setPopUpVisible={setPopUpVisible}/>}
      <table className={styles.table} border="1">
        <thead>
        <tr>
          <th className={styles.head}>Клиент</th>
          <th className={styles.head}>Почта</th>
          <th className={styles.head}>Телефон</th>
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

export default TableOrders;
