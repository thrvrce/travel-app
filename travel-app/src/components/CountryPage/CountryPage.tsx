import React from 'react';
import CountryVideo from './CountryVideo';
import MainInfo from './MainInfo';
import MapComponent from './MapComponent';
import Photos from './Photos';
import { Currencies, TimeWidget, WeatherWidget } from './vidgets';

const imgUrls = [
  'http://photoeverywhere.co.uk/west/usa/san_francisco/sunset_sf_skyline6005.jpg',
  'https://n1s1.elle.ru/ce/df/f6/cedff6cfbc22c90899cddf11f48ac830/940x741_0xc0a839a4_19250053081468488278.jpeg',
  'https://st.depositphotos.com/1007930/2454/i/600/depositphotos_24543229-stock-photo-hong-kong.jpg',
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/1356F/production/_106051297_gettyimages-1131483632.jpg',
  'https://www.iphones.ru/wp-content/uploads/2018/12/345C71E8-2FE2-4362-A8CB-BA600AB33F56.jpeg',
];

const CountryPage:React.FC = () => (
  <div className="country-page-wrapper">
    <div className="widgets-wrapper">
      <Currencies />
      <WeatherWidget />
      <TimeWidget />
    </div>
    <MainInfo />
    <Photos imgUrls={imgUrls} />
    <div className="map-vs-video-container">
      <CountryVideo videoUrl="oGWGiambBx8" />
      <MapComponent coordinates={[53.90899450883923, 27.549398216118476]} countryAbr="BLR" />
    </div>
  </div>
);

export default CountryPage;