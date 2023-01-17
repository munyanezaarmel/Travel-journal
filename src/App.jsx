import Places from "../components/Places"
import data from "./data"
import Nav from "../components/Nav"
const arrayelements =data.map((items)=>{
  return <Places 
 name={items.name}
 title={items.title}
 image={items.image}
 date={items.date}
 description={items.description}
 />
})
export default function App(){
    return(
      <div className="app-container">
        <Nav />
        {arrayelements}
      </div>
    )
}