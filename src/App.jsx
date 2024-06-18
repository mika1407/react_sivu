import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header/Header"
import { Footer } from "./Footer";
import {Food} from "./Food"
import { Card } from "./Card";
import { Button } from "./Button";
import { Student } from "./Student";
import Pic from './assets/omaKuva.jpg'
import Pic2 from './assets/apple.jpg'
import Pic3 from './assets/ankkuri.jpg'
import { UserGreeting } from "./UserGreeting";
import { List } from "./List";
import About from "./About";
import { Services } from './Services';
import { ColorPicker } from './ColorPicker';
import { Contact } from './Contact';
import { ToDoList } from './ToDoList';
import './App.css'; 

function Home() {

        const fruits = [{id: 1, name: "apple", calories: 95}, 
                        {id: 2, name: "orange", calories: 45}, 
                        {id: 3, name: "banana", calories: 105}, 
                        {id: 4, name:"coconut", calories: 159}, 
                        {id: 5, name:"pineapple", calories: 37}];

        const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                            {id: 7, name: "celery", calories: 15}, 
                            {id: 8, name: "carrots", calories: 25}, 
                            {id: 9, name:"corn", calories: 63}, 
                            {id: 10, name:"broccoli", calories: 50}];

    return(
        <>
        <UserGreeting isLoggedIn={true} username="Mika"/>
        <div className="cards-container">
            <Card img={Pic} name="Mika" do="I make websites."/>
            <Card img={Pic2} name="Ilmari" do="I make YouTube videos and play video games."/>
            <Card img={Pic3} name="Tiihonen" do="I do computer programming and i like apples."/>
        </div>
        <Button />
        <ColorPicker />
        <ToDoList />
        <Student name="Matti" age={30} isStudent={false}/>
        <Student name="Heli" age={18} isStudent={true}/>
        <Student />
        <Food/>
        {fruits.length > 0 ? <List items={fruits} category="Fruits and calories"/> : null}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables and calories"/>}    
        </>
    );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
