import * as React from 'react';
import {useState, useRef, useMemo} from 'react';

import Map, {Source, Layer, Marker, Popup} from 'react-map-gl';
import { AlipaySquareFilled, ArrowRightOutlined, FacebookFilled } from '@ant-design/icons';
import {useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop} from '@/hooks';
import "mapbox-gl/dist/mapbox-gl.css"; //This line is SO IMPORTANT lol



import heatmapLayer from "../../styles/7 - map-layers/heatmapLayer.json";
import circleLayer from "../../styles/7 - map-layers/circleLayer.json";
import symbolLayer from "../../styles/7 - map-layers/symbolLayer.json";
import issLayer from "../../styles/7 - map-layers/issLayer.json";


import parkData from "../home/chicago-parks.json"
import treeData from "../home/trees.json"
import CITIES from '../home/cities.json';


import Pin from './pin';


import { Sheet } from 'react-modal-sheet';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

import { Planet } from 'react-planet';
import { color } from 'framer-motion';

import hidingWhite from '../home/popup-hidingWhite.css';

/* 
import { Link } from 'react-router-dom';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from '@/constants/routes';
 */

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnlrciIsImEiOiJjbHhjcWxiaDYwZmhrMnFvYWtlbDRlNzFzIn0.u3zAq2Ye9gGAzmkqijKMyQ'; // Set your mapbox token here



const Home = () => {
  useDocumentTitle('STARSOF THELID | Home');
  useScrollTop();
  const [mapStyle, setMapStyle] = useState(null);
  const [isOpen, setOpen] = useState(false); 
  const [data, setData] = useState(false); 

   
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );




/*  
  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);  */
  
  const mapRef = useRef();


  return (
      <div> 
        <>
          <Map
              ref={mapRef}
              initialViewState={{
              latitude: 37.759,
              longitude: -122.447,
              zoom: 12
            }}
            mapLib={import('mapbox-gl')}
            style={{width: "100vw", height: "100vh"}}
            mapStyle="mapbox://styles/rykr/cly7tbems00tv01qjan5d7zm9"

            // mapStyle={mapStyle && mapStyle.toJS()}
            styleDiffing
            mapboxAccessToken={MAPBOX_TOKEN}
            
          >
            <Source id="my-data" type="geojson" data={treeData}>
              <Layer {...heatmapLayer} />
            </Source>
          


            {/* This is for the */}
            {pins}

            {popupInfo && (
              <Popup
                anchor="center"
                longitude={Number(popupInfo.longitude)}
                latitude={Number(popupInfo.latitude)}
                onClose={() => setPopupInfo(null)}
                closeButton={false}
                closeOnClick= {false}
                closeOnMove= {true}
                offset={[-60,-55]}
              >
              <div>
                <Planet
                      centerContent={
                        <div
                          style={{
                            height: 100,
                            width: 100,
                            borderRadius: '50%',
                            backgroundColor: '#1da8a4',
                            opacity:.8,
                          }}
                        />
                      }
                      open
                      autoClose
                      mass={4}
                      tension={500}
                      friction={19}
                      dragablePlanet
                      dragRadiusPlanet={20}
                      bounce
                    >
                      <div
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: '50%',
                          backgroundColor: '#9257ad',
                        }}
                      />
                      <div
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: '50%',
                          backgroundColor: '#orange',
                        }}
                      />
                      <div
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: '50%',
                          backgroundColor: 'blue',
                        }}
                      />
                      <div
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: '50%',
                          backgroundColor: 'green',
                        }}
                      />
                    </Planet>
                  </div>
{/* 
                <div>
                  {popupInfo.city}, {popupInfo.state} |{' '}
                  <a
                    target="_new"
                    href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                  >
                    Wikipedia
                  </a>
                </div>
                <img width="100%" src={popupInfo.image} />
                 */}

              </Popup>
            )} 
          </Map>
        </>

        <>
        <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="primary"
                onPress={() => setOpen(true)}>
                Open Sheet
        </AwesomeButton>

          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
              <Sheet.Header />
              <Sheet.Content>{
                <>
                <FacebookFilled></FacebookFilled>
                </>
             }</Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
        </>


{/* 
          

        <div className="banner">
          <div className="banner-desc">
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Featured Events</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Recommended Events</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>

 */}

      </div>
  );
};

export default Home;
