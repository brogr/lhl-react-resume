import './App.css';
import profileData from './data/profileData';
import resumeData from './data/resumeData';
import Profile from './components/Profile';
import ResumeSection from './components/ResumeSection';

function App() {
  return (
    <div className="App">
      <header>
        <Profile {...profileData} />
      </header>
      <main>
        <ResumeSection {...resumeData[0]} />
        <ResumeSection {...resumeData[1]} />
        <ResumeSection {...resumeData[2]} />
      </main>
    </div>
  );
}

export default App;
