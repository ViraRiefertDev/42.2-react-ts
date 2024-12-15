import { RolexPage, Title, Country, Highlights, PopularModels } from "./styles";
import Button from "components/Button/Button";

function Rolex(){
  return(
    <RolexPage>
      <Title>Rolex</Title>
      <Country>Country: Switzerland</Country>
      <Highlights>Highlights: A symbol of status and success. Renowned for their mechanical precision, durability, and timeless designs. Known for professional models tailored for diving, aviation, and exploration.</Highlights>
      <PopularModels>Popular Models: Submariner, Daytona, Datejust.</PopularModels>
      <Button name="Go Back" onClick={()=>{}}/>
    </RolexPage>
  )
}

export default Rolex;