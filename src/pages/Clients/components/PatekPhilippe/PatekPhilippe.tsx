import { PatekPhilippePage, Title, Country, Highlights, PopularModels } from "./styles";
import GoBackButton from "components/GoBackButton/GoBackButton";
import { CLIENTS_LINKS } from "pages/Clients/types";

function PatekPhilippe(){
  return(
    <PatekPhilippePage>
      <Title>Patek Philippe</Title>
      <Country>Country: Switzerland</Country>
      <Highlights>Highlights: One of the oldest and most prestigious watchmakers in the world. Famous for their complex mechanisms like perpetual calendars and minute repeaters. Often considered the epitome of luxury.</Highlights>
      <PopularModels>Popular Models: Nautilus, Calatrava, Grand Complications.</PopularModels>
      <GoBackButton/>
    </PatekPhilippePage>
  )
}

export default PatekPhilippe;