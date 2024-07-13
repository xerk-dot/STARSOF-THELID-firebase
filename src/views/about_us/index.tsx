import { useDocumentTitle, useScrollTop } from '../../hooks';
import React from 'react';
import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import ReactPlayer from 'react-player'


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
    <div>


      <div className="parallax">

        <motion.div className="scroller" style={{ x }}>
          <span className="scrolling-font">{children} </span>
          <span className="scrolling-font">{children} </span>
          <span className="scrolling-font">{children} </span>
          <span className="scrolling-font">{children} </span>
          <span className="scrolling-font">{children} </span>
        </motion.div>
        
      </div>
    </div>

  );
}

const AboutUs = () => {
  useDocumentTitle('About Us | Starsof');
  useScrollTop();

  return (
    <div>
       <div className='player-wrapper'>
{/*         <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=LXb3EKWsInQ&t=161s'
            width='100vw'
            height='100vh'
        /> */}
      </div> 
      <section>
        <ParallaxText baseVelocity={-3}>RIPE HAIRY MALE ASS WHEN YOU SNIFF PITS AND</ParallaxText>
        <ParallaxText baseVelocity={2}>SUPERIOR MEN HUNTING YOU DOWN TIL YOU WORSHIP</ParallaxText>
        <ParallaxText baseVelocity={-1}>AS GOONER-IN-CHIEF I GO UP+DOWN ON PENIS 'CAUSE ITS EASY TO GOON-GET LIL' GOONER HOLE ONCE YOU GOON-GOT THEIR LIL' GOONER MINDS</ParallaxText>
        <div className="banner-desc">
        only to now be infected by a lame prudish identity-term-driven apparatus which has isolated/pacified millions of meek individuals. put more bluntly, too many people circle-jerk without being hands-on.

        what motivates STARSOF THELID? driven by a deep desire to empower individuals so they arent as afraid of their bodies. i am passionate for products that feature social networks which provide individuals with the agency to find others.

        what is this? a map-based social networking app for men who have sex with men

        intent? to (hopefully not) dismantle the nuclear family and (instead) ensure a more procedural world. my wildly libertarian project will empower men who have sex with men.

      too difficult to introduce into branding. 
        words we avoid given:
        - ambiguous/vague definition
        - not rooted in a relational/transactional dichotomy
        - too academic and/or lacking widespread usage
        - too idealistic/platonic and prone to potential dogmatism

        only used in critical analysis of phenomenal contexts, never self-applied.


        the word "gay" ------ "homo-", "same-sex", "iron strikes iron", "like attracts like", "men who have sex with men (MSM)", "inter-male"

        terms of undefinable large-scale experience: love, orgy, romance/romanticism, passion, "human experience", new, "out of the closet", empathy, comfort
        terms of levels of commitment: dating, hookup, monogamy, ethical non-monogamy, polyamory, inclusive, single      
        terms of vast sociopolitical identity: gender, sexuality, -fluid, demi-, LGBTQIA (notable exceptions are Trans + Intersex, but solely if expressed via the description of the physical manifestation and biological correlates.)
        


        </div>
      </section>
{/*  */}    </div>
  );
};

export default AboutUs;
