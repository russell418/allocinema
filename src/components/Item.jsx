import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  const [cinema, setCinema] = useState([]);
  const [genres, setGenre] = useState([]);
  // const  [production_countries, setCompagnie] = useState([]);
  const  [text, setText] = useState("marveil");
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e328b532f3c60b5f93231b4606d40400&language=fr`)
   .then((res) => {
     setCinema(res.data)
     setGenre(res.data.genres)
    //  setCompagnie(res.data.setCompagnie)
     console.log("miss"+JSON.stringify(res.data))
   })
   .catch((e) => console.log(e))
  }, [])
  

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
    <div className="tailleitem">
  <Item.Group divided>
<Item>
<Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

<Item.Content>
  <Item.Header as='a'>{cinema.title}</Item.Header>
  <Item.Meta>
    <span className='cinema'>Union Square 14</span>
  </Item.Meta>
  <Item.Description>{paragraph}</Item.Description>
  <Item.Extra>
    <Label>IMAX</Label>
    <Label icon='globe' content='Additional Languages' />
  </Item.Extra>
</Item.Content>
</Item>


</Item.Group>
</div>
)

export default ItemExampleDivided