import { Container } from "./styles"

export function BigNews(){

  return(
      <>
        <Container>
          
            <div className="posti-image-container"><img className="post-image" src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" /></div>
            <div className="post-info-container"> 
              <p className="post-date">08 Mai 2023</p>
              <h3 className="post-title">Lorem, ipsum dolor.</h3>
              <p className="post-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis voluptates numquam iste magni nam, fuga sapiente dolorum ipsa quaerat nostrum quas repellat voluptatem. Quas iure maxime corrupti rerum quae!</p>
                <ul className="post-taglist">
                  <li className="tag">Lorem</li>
                  <li className="tag">ipsum</li>
                  <li className="tag">dolor</li>
                </ul>
            </div>
         
        </Container>
      </>
  )
}