import React from 'react';
import Sidebar from './components/Sidebar';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatbot from './components/Chatbot';
import './App.css';


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      {/* <div className="flex-grow-1">
        <Products />
      </div> */}
       <Dashboard />
       <script src="https://widget.cxgenie.ai/widget.js" data-aid="7f7ae37f-d65d-4347-9976-fdc28f4fd928" data-lang="en"></script>
    </div>
  );
}

export default App;


