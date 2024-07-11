import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from '@/constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from '@/hooks';
import { Link } from 'react-router-dom';
import * as React from 'react';
import {useState} from 'react';
import Map from 'react-map-gl';
import ControlPanel from './control-panel';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnlrciIsImEiOiJjbHhjcWxiaDYwZmhrMnFvYWtlbDRlNzFzIn0.u3zAq2Ye9gGAzmkqijKMyQ'; // Set your mapbox token here

const Home = () => {
  useDocumentTitle('STARSOF THELID | Home');
  useScrollTop();
  const [mapStyle, setMapStyle] = useState(null);
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
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        Have the Scroll Based Velocity (Variant Vault) as a vertical on the page. YOU ARE A GOONER ON YOUR KNEES AS I WHIP YOUR COCK AND BALLS WHILE SMIRKING
      <div className="map">
        <Map
          initialViewState={{
            latitude: 37.759,
            longitude: -122.447,
            zoom: 12
          }}
          mapStyle={mapStyle && mapStyle.toJS()}
          style={{width: 2000, height: 1000}}
          styleDiffing
          mapboxAccessToken={MAPBOX_TOKEN}
        />
      </div>
      <div className="map-control-panel map-label">
        <ControlPanel onChange={setMapStyle} />
      </div>

        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Move fast</strong>
              &nbsp;and break things&nbsp;
              <strong>like holes</strong>
            </h1>
            <br />
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
      </div>
    </main>
  );
};

export default Home;
