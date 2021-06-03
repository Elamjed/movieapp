import React,{useState} from 'react';
import './App.css';
import Header from './component/header/Header.js'
import Filter from '../src/component/FIlter/Filter.js'
import Add from '../src/component/add/Add'
import Movielist from './movielist/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Description from './component/description/Description'
function App() {
  const movieArray=([
    {
      Title: 'Tom & Jerry ',
      Year: '2021',
      Rate: 2,
      Type: 'aventure et comédie.',
      Poster:
          'https://media.senscritique.com/media/000019881602/150/Tom_Jerry.jpg',
          id:1,
          trailler:'https://youtu.be/KW8fGRTFWKc',
  },
  {
    Title: 'Space Jam : Nouvelle Ère',
    Year: '2021',
    Rate: 5,
    Type: 'aventure et comédie',
    Poster:
        'https://media.senscritique.com/media/000019976823/150/Space_Jam_Nouvelle_Ere.jpg',
        id:2,
        trailler:'https://youtu.be/8T95KdGq-dk',


},
{
  Title: 'Shang-Chi et la Légende des Dix Anneaux ',
  Year: '2021',
  Rate: 1,
  Type: 'fantastique et arts martiaux',
  Poster:
      'https://media.senscritique.com/media/000020019772/150/Shang_Chi_et_la_Legende_des_Dix_Anneaux.jpg',
      id:3,
      trailler:'https://youtu.be/YQOsxQUxMWk',


},
{
  Title: 'The Last Duel  ',
  Year: '2021',
  Rate: 3,
  Type: 'Drame et historique',
  Poster:
      'https://media.senscritique.com/media/000019812016/150/The_Last_Duel.jpg',
      id:4,
      trailler:'https://youtu.be/QqUI0Uxn0JY',


},
{
  Title: 'Un homme en colère  ',
  Year: '2021',
  Rate: 5,
  Type: 'Action et thriller.',
  Poster:
      'https://media.senscritique.com/media/000019951379/150/Un_homme_en_colere.jpg',
      id:5,
      trailler:'"https://www.youtube.com/embed/Zk2dnNQaXBw"',
      
},


     ])
   
const [data,setData]=useState(movieArray)
const addMovie=(x)=>{
  setData([...data,x]);
}

const [search, setSearch] = useState("")
     const handleSearch=(x)=>{
       setSearch(x)
     }
     const [searchrating, setSearchrating] = useState(0)
     const handleSearchrating=(x)=>{
       setSearchrating(x)
     }

  return (
    <div className="App">
           <Header/>
      <Switch>
      <Route exact path = '/' >
       <div className="nav">
     </div>
     <div className="site">
           <div className="head">  
        <Filter handleSearch={handleSearch} handleSearchrating={handleSearchrating} />
        <Add addMovie={addMovie}/>
        </div>
<div className="main">
<Movielist movieArray={data.filter(movie=>movie.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())&& movie.Rate>=searchrating)}/>
</div>
</div>
 </Route>
<Route path ={'/:Title'} render={ (props) => <Description  data= {movieArray} {...props} />}/>
</Switch>
    </div>
  );
}

export default App;
