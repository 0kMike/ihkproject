import React, {useState} from 'react';
import './App.css';
import Header from './components/NavigationBar/NavigationBar';
import Content from './components/Content/Content';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getJobs} from "./provider/DataProvider";
import {IJob} from "./interfaces/IJob";

function App() {

  const [activeSearchTags, setActiveSearchTags] = useState<string[]>([])
  const [searchZip, setSearchZip] = useState<string>("");
  const [searchRadius, setSearchRadius] = useState<number>(25);
  const [searchResult, setSearchResult] = useState<IJob[]>([]);

  const isSearchButtonActive: boolean = activeSearchTags.length > 0 && searchZip !== "";

  const toggleActiveSearchTag = (searchTag: string) => {
    let newActiveSearchTags = [...activeSearchTags];
    if (newActiveSearchTags.some(item => item === searchTag)) {
      setActiveSearchTags(newActiveSearchTags.filter(item => item !== searchTag));
    } else {
      newActiveSearchTags.push(searchTag);
      setActiveSearchTags(newActiveSearchTags);
    }
  }

  const getData = async () => {
    await getJobs(searchZip, activeSearchTags, searchRadius)
      .then((response) => {
        setSearchResult(response);
      })
      .catch((error) => {
          console.error(error)
        }
      );
  }

  const initiateSearch = () => {
    getData()
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header/>
            <Content
              activeSearchTags={activeSearchTags}
              isSearchButtonActive={isSearchButtonActive}
              toggleActiveSearchTag={toggleActiveSearchTag}
              initiateSearch={initiateSearch}
              setZipCode={setSearchZip}
              zipCode={searchZip}
            />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
