/* eslint-disable react/prop-types */
import './App.css'
// Using Object
// const Header = (props) =>{
//   return(
//     <header>
//       <h1> {props.name}&apos;s Kitchen</h1>
//       <p>Copyright {props.year}</p>
//     </header>
//   )
// }

// eslint-disable-next-line react/prop-types
const Header = ({name, year}) =>{
  return(
    <header>
      <h1> {name}&apos;s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const Main = ({dishes})=>{
  
  const dishObject = dishes.map((dish, i)=>({
    id: i,
    title: dish
  }))

return(
  <ul>
    {dishObject.map((dish)=> (
      <li style={{listStyle : "none"}} key={dish.i}>{dish.title}</li>
    ))}
  </ul>
)
}

function App() {
  const items = ["Macaroni and Cheese", "Salmon with Potatoes", "Tofu with Vegetables"]
  const name = "Vinuri"
  return (
    <>
    <Header name={name} year={new Date().getFullYear()}/>
    <h2>We serve the most delicious food arround</h2>
    <Main dishes={items}/>
    </>
  )
}

export default App
