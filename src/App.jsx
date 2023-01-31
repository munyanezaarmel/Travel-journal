import Places from "../components/Places"
import data from "./data"
import Nav from "../components/Nav"
import Form from "../components/Form"
const arrayelements =data.map((items)=>{
  return <Places 
  key={items.id}
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
        <Form />
      </div>
    )
}