import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import ThemeContext from './Context/ThemeContext';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      theme: "dark",
    };
  }

  toggleMode = () => {
    this.setState((state)=> {
      return {
        theme: state.theme === "dark" ? "light": "dark"
      }
    })
  }
    render() {
      return <ThemeContext.Provider value={{theme: this.state.theme, toggleMode: this.toggleMode}}>
                <div className='App'>
                  <Header toggleMode={this.toggleMode}/>
                  <Main />
                </div>
            </ThemeContext.Provider>
    }
}
export default App;
