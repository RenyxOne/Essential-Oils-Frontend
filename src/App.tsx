import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import {MainPage} from "./pages/MainPage/MainPage";
import {ItemPage} from "./pages/ItemPage/ItemPage";

const textt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam atque commodi consectetur dolor eius, ex, explicabo fuga id impedit, maxime molestiae nam necessitatibus odio officia perspiciatis provident quas quidem quisquam quos repellendus repudiandae saepe similique temporibus unde vel voluptatibus. Adipisci amet architecto assumenda aut blanditiis consequatur dicta dolorum, ea et eveniet fugiat harum id impedit incidunt ipsam iure magni mollitia numquam odio optio perspiciatis porro possimus provident quae quas quo quod temporibus tenetur, veritatis voluptatum. Aspernatur autem commodi deserunt doloribus et fugit itaque minus nemo nihil, nobis nostrum numquam odio pariatur perferendis quae, quia repellat suscipit tempora velit voluptate."

function App() {

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/search/:value/:mode" element={<MainPage/>}/>
          <Route path="/item/:id" element={<ItemPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
