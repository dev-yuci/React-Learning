import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /* JS Kodları yazılıyor */
  let a = 5;
  const firstName = "John";

  let vize1 = 40;
  let vize2 = 65;

  let sonuc = true;

  let isimler = ["John", "Jane", "Jack", "James"];
  return (
    /* HTML'i return içerisinde çağırıyoruz.. */
    <div>
      <p>A değişkeninin değeri: {a}</p>
      <p>Müşteri Adı: {firstName}</p>
      <p>Ortalama: {vize1 * 0.4 + vize2 * 0.6}</p>

      {sonuc ? <p>Geçti</p> : <p>Kaldı</p>}

      {vize1 * 0.4 + vize2 * 0.6 >= 50 ? (
        <p>Dersten Geçtin</p>
      ) : (
        <p>Dersten Kaldın</p>
      )}

      {isimler.map((isim, index) => (
        <div style={{
          backgroundColor: "lightblue",
          border : "1px solid black",
        }} key={index}>{isim}</div>
      ))}
    </div>
  );
}

export default App; //index.html de görünmesi için import edilmesi gerekiyor
