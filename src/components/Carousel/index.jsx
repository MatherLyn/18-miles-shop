import React, { Component } from 'react';
import { Carousel } from 'element-react';
import pic2 from './images/pic3.jpeg';
import pic3 from './images/pic2.jpg';
import pic1 from './images/pic1.jpg';

class ICarousel extends Component {
  pic = [pic1, pic2, pic3];
  render() {
    return (
      <Carousel height="200px">
        {
          [1, 2, 3].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={this.pic[index]} alt="" />
                {/* <img src={`http://kanolin.cn/market18/app/public/pic/pic.png`} alt="" /> */}
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    );
  }
}

export default ICarousel;