import { Container } from "./styles";
import { BigNews } from "../BigNews";
import { ShortNews } from "../ShortNews";


export function LastNews(){

return(
  <>
    <Container>
      <div className="bignews-container">
        <BigNews/>
      </div>
      <div className="shortnews-container">
        <ShortNews/>
        <ShortNews/>
        <ShortNews/>
      </div>
    </Container>
  </>
)

}