import './App.css';
import Footer from './components/Common/Footer';
import Header from './components/HelpCenter/Header';
import CardDetails from './components/Pages/CardDetails';
import HelpCenter from './components/Pages/HelpCenter';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<HelpCenter/>}/>
          <Route path='/cards/:title' element={<CardDetails/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
