import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import UserInfoForm from './components/UserInfoForm';
import TourPlanner from './components/TourPlanner';
import TourSummary from './components/TourSummary';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<UserInfoForm />} />
            <Route path="/plan" element={<TourPlanner />} />
            <Route path="/summary" element={<TourSummary />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;