import * as React from 'react';
import {useState, useRef} from 'react';

import Map, {Source, Layer, Popup} from 'react-map-gl';
import { AlipaySquareFilled, ArrowRightOutlined, FacebookFilled } from '@ant-design/icons';
import {useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop} from '../../hooks';
import "mapbox-gl/dist/mapbox-gl.css"; //This line is SO IMPORTANT lol

import {show, hide} from '../home/marker-visibility';
import { Planet } from 'react-planet';
import { color } from 'framer-motion';

import heatmapLayer from "../../styles/7 - map-layers/heatmapLayer.json";
import circleLayer from "../../styles/7 - map-layers/circleLayer.json";
import symbolLayer from "../../styles/7 - map-layers/symbolLayer.json";
import issLayer from "../../styles/7 - map-layers/issLayer.json";


import parkData from "../../training-data/chicago-parks.json"
import treeData from "../../training-data/trees.json"

import { Sheet } from 'react-modal-sheet';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

import hidingWhite from '../home/popup-hidingWhite.css'; //this is used when a marker is clicked on, so dont delete this import!
import {Pins} from '../../components/map-marker/map-marker';

/* 
import { Link } from 'react-router-dom';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from '@/constants/routes';
 */

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN; // Set your mapbox token here



const Home = () => {
  useDocumentTitle('STARSOF THELID | Home');
  useScrollTop();
  const [mapStyle, setMapStyle] = useState(null);
  const [isOpen, setOpen] = useState(false); 
  const [data, setData] = useState(false); 

   
  const [popupInfo, setPopupInfo] = useState(null);





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
              <Layer {...circleLayer} />

            </Source>
          


            {/* This is for the */}
            <Pins/>

            {popupInfo && (
              <Popup
                anchor="center"
                longitude={Number(popupInfo.longitude)}
                latitude={Number(popupInfo.latitude)}
                onClose={() => setPopupInfo(null)}
                closeButton={false}
                closeOnClick= {false}
                closeOnMove= {true}
                offset={-50}
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
                          backgroundColor: 'darksalmon',
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
         


          <Sheet 
            isOpen={isOpen} 
            onClose={() => setOpen(false)}
            //these last two lines determine how far up the modal goes
            snapPoints={[875]}
            initialSnap={0}
          >
                <Sheet.Container className="modal-background">
                  <Sheet.Header className="" />
                  <Sheet.Content className="">{
                    <>
                    <Sheet.Scroller>
                      <FacebookFilled></FacebookFilled>
                    
                    </Sheet.Scroller>
                    
                    </>
                }</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
          </Sheet>


          </Map>
       </>

          <nav>
            <div className="navigation-bottom">

            <AwesomeButton
                      cssModule={AwesomeButtonStyles}
                      type="primary"
                      onPress={() => setOpen(true)}>
                      <div className="black-text">Events </div>
        </AwesomeButton>
                <AwesomeButton
                      cssModule={AwesomeButtonStyles}
                      type="primary"
                      //onPress={() => setOpen(true)}>
                      onPress={() => hide()}
                      >
                      <div className="black-text">Hide </div>
        </AwesomeButton>
        <AwesomeButton
                      cssModule={AwesomeButtonStyles}
                      type="primary"
                      onPress={() => show()}
                      >
                      <div className="black-text">Show </div>
        </AwesomeButton>
        

            </div>
          </nav>

       


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
