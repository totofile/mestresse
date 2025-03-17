import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomepageView from './components/Home';
import HomePlanner from './components/HomePlanner';
import TeacherPlannerUIDesign from './components/TeacherPlannerUIDesign';
import PlannerEditor from './components/PlannerEditor';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomepageView />} />
          <Route path="/homeplanner" element={<HomePlanner />} />
          <Route path="/teacherplanner/:dayId" element={<TeacherPlannerUIDesign />} />
          <Route path="/planner-editor" element={<PlannerEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;