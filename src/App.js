import './App.css';
import profileData from './data/profileData';
import resumeData from './data/resumeData';
import Profile from './components/Profile';
import ResumeSection from './components/ResumeSection';

function App() {
  // parse all sections from data to list of components
  const parsedSections = resumeData.map((section) => (
    <ResumeSection {...section} />
  ));

  return (
    <div className="App">
      <header>
        <Profile {...profileData} />
      </header>
      <main>{parsedSections}</main>
    </div>
  );
}

export default App;
