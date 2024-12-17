import { AudemarsPiguetPage, Title, Country, Highlights, PopularModels } from "./styles";
import GoBackButton from "components/GoBackButton/GoBackButton";
import { CLIENTS_LINKS } from "pages/Clients/types";

function AudemarsPiguet(){
  return(
    <AudemarsPiguetPage>
      <Title>Audemars Piguet</Title>
      <Country>Country: Switzerland</Country>
      <Highlights>Highlights: A symbol of status and success. Renowned for their mechanical precision, durability, and timeless designs. Known for professional models tailored for diving, aviation, and exploration.</Highlights>
      <PopularModels>Popular Models: Submariner, Daytona, Datejust.</PopularModels>
      <GoBackButton/>
    </AudemarsPiguetPage>
  )
}

export default AudemarsPiguet;