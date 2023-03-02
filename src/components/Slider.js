import Carousel from 'react-bootstrap/Carousel';
import ljudi from './images/Slide1.png'
import platno from './images/SlideMovie.png'
import kokice from './images/SlideKokice.png'
import kava from './images/kava.png'
import './Slider.css'

const Slider=()=>{


    return(
        
              <Carousel>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={ljudi}
                    alt="First slide"
                    
                  />
                  <Carousel.Caption>
                    <div className='slideCaption'>
                      <h1>Uživajte s najbližima</h1>
                      <h5>uz najnovije filmove </h5>
                      <button type='button'><span></span><a href='/filmovi'>Pregled filmova</a></button>
                    </div>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={platno}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <div className='slideCaption'>
                      <h1>Samo za Vas</h1>
                      <h5>
                        rezervirajte dvoranu 
                      </h5>
                      <button type='button'><span></span><a href='/filmovi'>Rezervacija</a></button>
                    </div>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={kokice}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <div className='slideCaption'>
                      <h1>Novo u ponudi</h1>
                      <h5>rezervirajte hranu unaprijed</h5>
                      <button type='button'><span></span><a href='/'>Pogledaj ponudu</a></button>
                    </div>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
           
          
          
    )
}
export default Slider