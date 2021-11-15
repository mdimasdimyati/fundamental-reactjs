import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Title from "./components/Title";

const App = () => {

  let title = "Fundamental React"; //let dapat berubah

  const description = "React Js"; //Const tidak dapat dirubah/tetap

  //regular function
  function showHello() {
    return "Hello World";
  }

  //arrow function
  const showMe = () => {
    return "Hello Dunia"
  };

  const testParams = (params) => {
    return params;
  }

  const alertTitles = () => {
    console.log("Hello parrent alert");
  }

  //Mengirim data objek
  const profile = {
    id: 1,
    name: "dimas Z",
    location: "Indonesia"
  }
  //mengirim data array
  const profiles = [
    { id: 1, name: "Dimas",location: "Indonesia"},
    { id: 2, name: "Dimyati",location: "Indonesia"},
    { id: 3, name: "Dimas Dimyati",location: "Indonesia"},
  ]

  //conditional rendering
  const isSow = true;


  return (
    <div style={{backgroundColor:"blue"}}>
      {isSow ? <h1>Hallo React</h1> : <h1>Stop React</h1>}
      <Header />
      <Title title={title} alertTitle={alertTitles} profil={profile} profiles={profiles} />
      <h1>{title}</h1>
      <h1> {description} </h1>
      <h2>{showHello()}</h2>
      <h2>{showMe()}</h2>
      <h2>{testParams("hallo params")}</h2>
      <Content>
      <h1>Welcome React Web App</h1>
      <h1>Welcome React Web App</h1>
      <h1>Welcome React Web App</h1>
      </Content>    
      <Footer />
    </div>
  );
};

export default App;
