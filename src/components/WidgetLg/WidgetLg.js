import React from "react";
import "./WidgetLg.css";
import { transactions } from "./../../datas";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>;
  };

  return (
    <div className="WidgetLg">
      <h3 className="widgetLgTitle">Latest TransActions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amout</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="WidgetLgTr">
              <td className="WidgetLgUser">
                <img src={item.img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{item.customer}</span>
              </td>
              <td className="widgetLgDate">{item.date}</td>
              <td className="widgetLgAmount">${item.amount}</td>
              <td className="widgetLgStatus">
                <Button type={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
