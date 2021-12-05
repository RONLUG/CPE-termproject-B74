import React from "react";
import { Link } from "react-router-dom";
import "./Res3.css";

const Res3 = () => {
  return (
    <div className="res3">
      <div className="Confirmation">
        <h1>Confirmation</h1>
        <div className="image">test</div>
        <div className="first">
          <li>จุดเริ่มต้น</li>
          <c>test</c>
        </div>
        <div className="second">
          <li>จุดหมายปลายทาง</li>
          <c>test</c>
        </div>
        <div className="third">
          <li>วันที่</li>
          <li>
            <c>test</c>
          </li>
        </div>
        <div className="fouth">
          <li>พาหนะ</li>
          <li>
            <c>test</c>
          </li>
        </div>
        <div className="fifth">
          <li>คนขับ</li>
          <li>
            <c>test</c>
          </li>
        </div>
        <div className="contect">
          <c>- ช่องทางการติดต่อคนขับ -</c>
          <div className="drivercontect">
            <li>081-xxx-xxxx</li>
            <li>line id</li>
          </div>
        </div>
        <div className="Info">
          <c>- ข้อมูลส่วนตัว -</c>
          <div className="Name">
            <li>ชื่อ</li>
            <c>test</c>
          </div>
          <div className="Lastname">
            <li>นามสกุล</li>
            <c>test</c>
          </div>
          <div className="Number">
            <li>เบอร์โทรศัพท์</li>
            <c>test</c>
          </div>
          <div className="Passenger">
            <li>จำนวนผู้โดยสาร</li>
            <c>test</c>
          </div>
        </div>
        <div className="button">
          <div className="edit">
            <Link to="/">แก้ไข</Link>
          </div>
          <div className="okay">
            <Link to="/">ยืนยัน</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Res3;
