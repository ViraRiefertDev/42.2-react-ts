import { PatekPhilippePage, Title, Country, Highlights, PopularModels } from "./styles";
import Button from "components/Button/Button";

function PatekPhilippe(){
  return(
    <PatekPhilippePage>
      <Title>Patek Philippe</Title>
      <Country>Country: Switzerland</Country>
      <Highlights>Highlights: One of the oldest and most prestigious watchmakers in the world. Famous for their complex mechanisms like perpetual calendars and minute repeaters. Often considered the epitome of luxury.</Highlights>
      <PopularModels>Popular Models: Nautilus, Calatrava, Grand Complications.</PopularModels>
      <Button name="Go Back" onClick={()=>{}}/>
    </PatekPhilippePage>
  )
}

export default PatekPhilippe;