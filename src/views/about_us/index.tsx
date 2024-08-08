import { useDocumentTitle, useScrollTop } from '../../hooks';
import React from 'react';
import { useRef } from "react";
import { Container } from "react-bootstrap";
import storyboardImage_01_1x1 from '../../images/about-assets/about-us_background_01.png';
import storyboardImage_01_4x5 from '../../images/about-assets/about-us_background_03.png';
import storyboardImage_02_1x1 from '../../images/about-assets/about-us_background_05.png';
import storyboardImage_02_4x5 from '../../images/about-assets/about-us_background_07.png';
import storyboardImage_03_1x1 from '../../images/about-assets/about-us_background_08.png';
import storyboardImage_03_4x5 from '../../images/about-assets/about-us_background_09.png';
import storyboardImage_04_1x1 from '../../images/about-assets/about-us_background_10.png';
import storyboardImage_04_4x5 from '../../images/about-assets/about-us_background_11.png';
import storyboardImage_05_1x1 from '../../images/about-assets/about-us_background_12.png';
import storyboardImage_05_4x5 from '../../images/about-assets/about-us_background_13.png';
import storyboardImage_06_1x1 from '../../images/about-assets/about-us_background_14.png';
import storyboardImage_06_4x5 from '../../images/about-assets/about-us_background_15.png';
import storyboardImage_07_1x1 from '../../images/about-assets/about-us_background_16.png';
import storyboardImage_07_4x5 from '../../images/about-assets/about-us_background_18.png';
import storyboardImage_08_1x1 from '../../images/about-assets/about-us_background_19.png';
import storyboardImage_08_4x5 from '../../images/about-assets/about-us_background_20.png';
import storyboardImage_09_1x1 from '../../images/about-assets/about-us_background_21.png';
import storyboardImage_09_4x5 from '../../images/about-assets/about-us_background_22.png';


import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  MotionValue
} from "framer-motion";
import { wrap } from "@motionone/utils";
import ReactPlayer from 'react-player'



// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  var aspectRatio = Math.abs(vw/vh);
  var option = (aspectRatio>=1) ? 1 : (aspectRatio<=.8) ? 2 : (Math.abs(aspectRatio)-1) <= Math.abs((aspectRatio)-.8)? 1 : 2;

  const currentImage = (id === 1 && option === 1) ? storyboardImage_01_1x1 :
                        (id === 2 && option === 1) ? storyboardImage_02_1x1 :
                        (id === 3 && option === 1) ? storyboardImage_03_1x1 :
                        (id === 4 && option === 1) ? storyboardImage_04_1x1 :
                        (id === 5 && option === 1) ? storyboardImage_05_1x1 :
                        (id === 6 && option === 1) ? storyboardImage_06_1x1 :
                        (id === 7 && option === 1) ? storyboardImage_07_1x1 :
                        (id === 8 && option === 1) ? storyboardImage_08_1x1 :
                        (id === 9 && option === 1) ? storyboardImage_09_1x1 :
                        (id === 1 && option === 2) ? "https://placehold.co/400x700": //storyboardImage_01_4x5 :
                        (id === 2 && option === 2) ? "https://placehold.co/400x700": //storyboardImage_02_4x5 :
                        (id === 3 && option === 2) ? storyboardImage_03_4x5 :
                        (id === 4 && option === 2) ? storyboardImage_04_4x5 :
                        (id === 5 && option === 2) ? storyboardImage_05_4x5 :
                        (id === 6 && option === 2) ? storyboardImage_06_4x5 :
                        (id === 7 && option === 2) ? storyboardImage_07_4x5 :
                        (id === 8 && option === 2) ? storyboardImage_08_4x5 :
                        (id === 9 && option === 2) ? storyboardImage_09_4x5 :
  "https://placehold.co/600x400";
  //https://ryanve.com/lab/dimensions/



  return (
    <section>
    {/*       
        <img src={`/src/images/buildings/${id}.png`} alt="A London skyscraper" />
      </div> */}
      

      <div ref={ref}>
        

          <img srcSet={currentImage+" 2000w"}
          sizes="(max-width: 666px) 80vw"
          //src={`/src/images/buildings/${id}.png`}
          alt="aspectRatio"
          className="parent"></img>
          
        </div>
      {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
    </section>
  );
}



interface ParallaxProps {
  children: string;
  baseVelocity: number;
}



function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -60, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <>
    
      <div className="parallax">

        <motion.div className="parallax-scroller" style={{ x }}>
          <span className="parallax-scrolling-font">{children} </span>
          <span className="parallax-scrolling-font">{children} </span>
          <span className="parallax-scrolling-font">{children} </span>
          <span className="parallax-scrolling-font">{children} </span>
          <span className="parallax-scrolling-font">{children} </span>
        </motion.div>
        
      </div>
    </>

  );
}

const AboutUs = () => {
  useDocumentTitle('About Us | Starsof');
  useScrollTop();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (

<>


        <>
          {[1,2,3,4,5,6,7,8,9].map((image) => (<Image id={image} />))}
          <motion.div className="progress" style={{ scaleX }} />



        </>


{/* 
        <div>
           
            <section>

                <ParallaxText baseVelocity={-3}>RIPE HAIRY MALE ASS WHEN YOU SNIFF PITS AND</ParallaxText>
                <ParallaxText baseVelocity={2}>SUPERIOR MEN HUNTING YOU DOWN TIL YOU WORSHIP</ParallaxText>
                <ParallaxText baseVelocity={-1}>AS GOONER-IN-CHIEF I GO UP+DOWN ON PENIS 'CAUSE ITS EASY TO GOON-GET LIL' GOONER HOLE ONCE YOU GOON-GOT THEIR LIL' GOONER MINDS</ParallaxText>

            </section>
        </div>

 */}
        



{/* 
       <div className='player-wrapper'>
         <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=LXb3EKWsInQ&t=161s'
            width='100vw'
            height='100vh'            
        /> 
      </div>

 */}


{/* 
      <section>
        
        <div className="banner-desc">
          <h1>A map-based web-app to END pornography</h1>



          only to now be infected by a lame prudish identity-term-driven apparatus which has isolated/pacified millions of meek individuals. put more bluntly, too many people circle-jerk without being hands-on.

          what motivates STARSOF THELID? driven by a deep desire to empower individuals so they arent as afraid of their bodies. i am passionate for products that feature social networks which provide individuals with the agency to find others.

          what is this? a map-based social networking app for men who have sex with men

          intent? to (hopefully not) dismantle the nuclear family and (instead) ensure a more procedural world. my wildly libertarian project will empower men who have sex with men.

          too difficult to introduce into branding. 
          words we <i> avoid </i>given:
          - ambiguous/vague definition
          - not rooted in a relational/transactional dichotomy
          - too academic and/or lacking widespread usage
          - too idealistic/platonic and prone to potential dogmatism

          only used in critical analysis of phenomenal contexts, never self-applied.


          the word "gay" ------ "homo-", "same-sex", "iron strikes iron", "like attracts like", "men who have sex with men (MSM)", "inter-male"

          <ul>
            <li>
            terms of undefinable large-scale experience: love, orgy, romance/romanticism, passion, "human experience", new, "out of the closet", empathy, comfort
            </li>
            <li>
            terms of levels of commitment: dating, hookup, monogamy, ethical non-monogamy, polyamory, inclusive, single      
            </li>
            <li>
            terms of vast sociopolitical identity: gender, sexuality, -fluid, demi-, LGBTQIA (notable exceptions are Trans + Intersex, but solely if expressed via the description of the physical manifestation and biological correlates.
            </li>
          </ul>
          


        </div>
      </section>
 */}


      </>
  );
};

export default AboutUs;
