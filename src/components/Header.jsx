import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import img5 from "../assets/images/5.jpg"
function Header() {
    return (
        <div className="container">
            <Carousel>
            <Carousel.Item>
                <img src={img1} alt="img1" className='w-100 custom-carousel' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="img2" className='w-100 custom-carousel' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} alt="img3" className='w-100 custom-carousel' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img4} alt="img4" className='w-100 custom-carousel' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img5} alt="img5" className='w-100 custom-carousel' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Header;