import React, {useState} from 'react';
import './App.css';
import Header from "./components/NavigationBar/NavigationBar";
import Body from './components/Body/Body';

function App() {

  const [activeSearchTags, setActiveSearchTags] = useState<string[]>([])
  const [zipCode, setZipCode] = useState<number | null>(null);

  const isSearchButtonActive: boolean = activeSearchTags.length > 0 && zipCode != null;

  const toggleActiveSearchTag = (searchTag: string) => {
    let newActiveSearchTags = [...activeSearchTags];
    if (newActiveSearchTags.some(item => item === searchTag)) {
      setActiveSearchTags(newActiveSearchTags.filter(item => item !== searchTag));
    } else {
      newActiveSearchTags.push(searchTag);
      setActiveSearchTags(newActiveSearchTags);
    }
  }

  const initiateSearch = () => {
    console.error('Search initialized!')
  }

  return (
    <div className="App">
      <Header/>
      <Body
        activeSearchTags={activeSearchTags}
        isSearchButtonActive={isSearchButtonActive}
        toggleActiveSearchTag={toggleActiveSearchTag}
        initiateSearch={initiateSearch}
      />
    </div>
  );
}

export default App;
