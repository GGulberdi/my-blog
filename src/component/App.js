import emojipedia from '../emojipedia';
import Entry from './Entry';



function App(props) {
    console.log(props)
    return (
      <div>
        <h1>Welcome</h1>
        <div className= 'dictionary'>
          {emojipedia.map((element)=>{
          return( <Entry 
            id={element.id}
            icon={element.icon}
            name={element.name}
            meaning={element.meaning}
            />)
          })}
        </div>
      </div>

    );
  }
  






export default App;