import { AlipaySquareFilled, ArrowRightOutlined, FacebookFilled } from '@ant-design/icons';
import {useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop} from '@/hooks';
import * as React from 'react';
import {useState, useRef, useCallback, useEffect} from 'react';
import Map, {Source, Layer} from 'react-map-gl';
import { Sheet } from 'react-modal-sheet';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import "mapbox-gl/dist/mapbox-gl.css"; //This line is SO IMPORTANT lol


import heatmapLayer from "../../styles/7 - map-layers/heatmapLayer.json";
import circleLayer from "../../styles/7 - map-layers/circleLayer.json";
import symbolLayer from "../../styles/7 - map-layers/symbolLayer.json";
import issLayer from "../../styles/7 - map-layers/issLayer.json";


import parkData from "../home/chicago-parks.json"
import treeData from "../home/trees.json"

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
  const [isOpen, setOpen] = useState(false); 



  return (
      <div> 
        <>
          <Map
            initialViewState={{
              latitude: 37.759,
              longitude: -122.447,
              zoom: 12
            }}
            mapLib={import('mapbox-gl')}
            style={{width: "100vw", height: "100vh"}}
            mapStyle="mapbox://styles/mapbox/dark-v11"

            // mapStyle={mapStyle && mapStyle.toJS()}
            styleDiffing
            mapboxAccessToken={MAPBOX_TOKEN}
            
          >
            <Source id="my-data" type="geojson" data={treeData}>
              <Layer {...heatmapLayer} />
            </Source>
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
