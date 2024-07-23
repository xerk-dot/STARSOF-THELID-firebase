import { useDocumentTitle, useScrollTop } from '../../hooks';
import React from 'react';
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

  return (
    <div>
        <div className="caroselling-it">
            <div className="div-container-wrapper">
                <div className="div-container">
                    <div className="main-content">
                        <div className="div">
                            <div className="div-2">
                                <img className="h" alt="H" src="h-1.png" />
                                <div className="div-3">
                                    <p className="usiamo-il-design-per">
                                        <span className="text-wrapper">Usiamo il design per mettere al </span>
                                        <span className="span">centro le persone e le loro scelte</span>
                                        <span className="text-wrapper">.</span>
                                    </p>
                                    <p className="realizziamo-siti-web">
                                        <span className="text-wrapper">Realizziamo </span>
                                        <span className="span">siti web, brand identity e contenuti creativi</span>
                                        <span className="text-wrapper">
                                            {" "}
                                            che prendono per mano i tuoi clienti
                                            <br /> e li portano{" "}
                                        </span>
                                        <span className="span">verso di te</span>
                                        <span className="text-wrapper">.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="div-4">
                                <div className="div-5">
                                    <div className="span-2" />
                                    <p className="p">scorri e scopri di più</p>
                                </div>
                                <img className="svg" alt="Svg" src="svg.svg" />
                            </div>
                        </div>
                        <div className="div-6">
                            <div className="div-wrapper">
                                <p className="noi-noi-noi">
                                    <span className="text-wrapper-2">(noi) (noi) </span>
                                    <span className="text-wrapper-3">(noi)</span>
                                </p>
                            </div>
                            <div className="span-3" />
                            <div className="div-7">
                                <p className="text-wrapper-4">
                                    le grandi cose, come le piccole,
                                    <br /> tutto ci appassiona.
                                </p>
                                <div className="div-8">
                                    <div className="p-2">
                                        <p className="text-wrapper-5">ogni giorno nutriamo l’ambizione di</p>
                                        <div className="strong">
                                            <div className="text-wrapper-6">semplificare la complessità.</div>
                                        </div>
                                    </div>
                                    <p className="non-amiamo-i">
                                        non amiamo i compromessi, le risposte standard per qualsiasi problema, ma solo
                                        <br /> la soluzione studiata e giusta per te.
                                    </p>
                                    <p className="text-wrapper-7">crediamo nelle idee che sappiano abbracciare una visione strategica.</p>
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group">
                                            <p className="ti-diremo-che-faremo">
                                                ti diremo che faremo delle cose,
                                                <br /> e poi le faremo
                                            </p>
                                            <div className="strong-2">
                                                <div className="text-wrapper-8">davvero.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-9">
                            <div className="servizi-servizi-wrapper">
                                <p className="servizi-servizi">
                                    <span className="text-wrapper-2">servizi servizi </span>
                                    <span className="text-wrapper-3">servizi</span>
                                </p>
                            </div>
                            <div className="div-10">
                                <div className="a">
                                    <div className="text-wrapper-9">brand design</div>
                                    <div className="a-after" />
                                </div>
                                <div className="ul">
                                    <div className="text-wrapper-10">consulenza generale</div>
                                    <div className="text-wrapper-11">brand strategy</div>
                                    <div className="text-wrapper-11">brand &amp; rebranding</div>
                                    <div className="text-wrapper-11">logo design</div>
                                    <div className="text-wrapper-11">visual identity</div>
                                    <div className="text-wrapper-11">packaging design</div>
                                    <div className="text-wrapper-12">corporate identity</div>
                                </div>
                            </div>
                            <div className="div-11">
                                <div className="a-2">
                                    <div className="text-wrapper-9">web design</div>
                                    <div className="a-after-2" />
                                </div>
                                <div className="ul-2">
                                    <div className="text-wrapper-13">UX/UI design</div>
                                    <div className="text-wrapper-12">art direction</div>
                                    <div className="text-wrapper-11">siti web</div>
                                    <div className="text-wrapper-12">development</div>
                                    <div className="text-wrapper-12">microinteractions</div>
                                    <div className="text-wrapper-12">ecommerce</div>
                                    <div className="text-wrapper-12">content design</div>
                                    <div className="text-wrapper-11">manutenzione e sicurezza</div>
                                    <div className="text-wrapper-11">hosting e privacy consultant</div>
                                    <div className="text-wrapper-11">video e photo shooting</div>
                                    <div className="text-wrapper-12">audit SEO</div>
                                    <div className="text-wrapper-11">SEO strategy &amp; positioning</div>
                                    <p className="text-wrapper-11">check-up per il tuo sito web</p>
                                </div>
                            </div>
                            <div className="div-12">
                                <div className="a-3">
                                    <div className="text-wrapper-14">copywriting</div>
                                    <div className="a-after-3" />
                                </div>
                                <div className="ul-3">
                                    <p className="text-wrapper-13">testi SEO e piani editoriali</p>
                                    <div className="text-wrapper-12">revisioni</div>
                                    <div className="text-wrapper-11">landing pages</div>
                                    <div className="text-wrapper-11">brochure e company profile</div>
                                    <div className="text-wrapper-11">creatività e slogan</div>
                                    <p className="text-wrapper-11">testi per siti web &amp; ecommerce</p>
                                    <div className="text-wrapper-11">naming &amp; payoff</div>
                                    <div className="text-wrapper-12">microcopy</div>
                                    <div className="text-wrapper-11">testi company profile</div>
                                    <div className="text-wrapper-12">traduzioni</div>
                                </div>
                            </div>
                        </div>
                        <div className="overlap-wrapper">
                            <div className="overlap">
                                <div className="div-13" />
                                <div className="div-14">
                                    <div className="h-2">
                                        <div className="overlap-group-2">
                                            <p className="text-wrapper-15">Tindr, Grindr, Sniffies, all of these suck.</p>
                                            <div className="strong-3">
                                                <div className="text-wrapper-16">dalla magia.</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-wrapper-17">Arthur C. Clarke</div>
                                </div>
                            </div>
                            <section>
                        <ParallaxText baseVelocity={-3}>RIPE HAIRY MALE ASS WHEN YOU SNIFF PITS AND</ParallaxText>
                        <ParallaxText baseVelocity={2}>SUPERIOR MEN HUNTING YOU DOWN TIL YOU WORSHIP</ParallaxText>
                        <ParallaxText baseVelocity={-1}>AS GOONER-IN-CHIEF I GO UP+DOWN ON PENIS 'CAUSE ITS EASY TO GOON-GET LIL' GOONER HOLE ONCE YOU GOON-GOT THEIR LIL' GOONER MINDS</ParallaxText>

                        </section>
                        </div>


                        <div className="div-15">
                            <div className="div-16">
                                <div className="div-wrapper">
                                    <p className="div-17">
                                        <span className="text-wrapper-2">(come) (come) </span>
                                        <span className="text-wrapper-3">(come)</span>
                                    </p>
                                </div>
                                <div className="span-4" />
                                <div className="div-18">
                                    <div className="text-wrapper-18">progettiamo per il futuro.</div>
                                    <div className="p-3">
                                        <div className="overlap-group-3">
                                            <p className="text-wrapper-19">
                                                Nei momenti caotici il linguaggio e la comunicazione possono fare piccole grandi cose, tipo
                                                lasciare
                                            </p>
                                            <div className="strong-4">
                                                <div className="text-wrapper-20">5 messaggi</div>
                                            </div>
                                            <div className="text-wrapper-21">nella capsula del tempo.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-19">
                                <div className="div-20">
                                    <div className="div-21">
                                        <div className="div-22">
                                            <div className="text-wrapper-22">01</div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-wrapper-23">Progetta contenuti come se lavorassi per la</p>
                                            <div className="strong-5">
                                                <div className="text-wrapper-24">Fisher Price.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-23">
                                        <div className="div-24">
                                            <div className="text-wrapper-25">02</div>
                                        </div>
                                        <div className="p-5">
                                            <div className="overlap-group-4">
                                                <div className="text-wrapper-26">Rispetta le</div>
                                                <div className="strong-6">
                                                    <div className="text-wrapper-27">emozioni</div>
                                                </div>
                                                <p className="text-wrapper-28">di chi legge e fruisce del tuo contenuto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-25">
                                        <div className="div-26">
                                            <div className="text-wrapper-29">03</div>
                                        </div>
                                        <div className="p-6">
                                            <div className="overlap-group-5">
                                                <div className="text-wrapper-30">Usa una</div>
                                                <div className="strong-7">
                                                    <div className="text-wrapper-31">voce umana</div>
                                                </div>
                                                <p className="text-wrapper-32">, non un tone of voice.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-27">
                                        <div className="div-28">
                                            <div className="text-wrapper-33">04</div>
                                        </div>
                                        <div className="p-7">
                                            <div className="text-wrapper-34">Trasmetti vicinanza,</div>
                                            <div className="strong-8">
                                                <div className="text-wrapper-35">etica e valori.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-29">
                                        <div className="div-30">
                                            <div className="text-wrapper-36">05</div>
                                        </div>
                                        <div className="p-8">
                                            <p className="text-wrapper-37">Guida le azioni delle persone, risolvi i loro problemi e</p>
                                            <div className="strong-9">
                                                <div className="text-wrapper-38">cambia in meglio</div>
                                            </div>
                                            <div className="text-wrapper-39">la loro vita.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-31">
                            <div className="clienti-clienti-wrapper">
                                <p className="clienti-clienti">
                                    <span className="text-wrapper-2">clienti clienti </span>
                                    <span className="text-wrapper-3">clienti</span>
                                </p>
                            </div>
                            <div className="div-32">
                                <div className="div-33">
                                    <div className="div-34">
                                        <div className="div-35">
                                            <div className="text-wrapper-40">APT Dolomiti Paganella</div>
                                            <div className="text-wrapper-41">copywriting</div>
                                            <div className="span-5">
                                                <div className="text-wrapper-42">+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-34">
                                        <div className="div-35">
                                            <div className="text-wrapper-40">Gardalisa</div>
                                            <p className="BRAND-COPYWRITING">
                                                brand, copywriting, posizionamento seo, social media, traduzioni, web design
                                            </p>
                                            <div className="span-5">
                                                <div className="text-wrapper-42">+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-34">
                                        <div className="div-35">
                                            <div className="text-wrapper-40">Mobiliar interiorarchitecture</div>
                                            <p className="COPYWRITING-SOCIAL">copywriting, social media, traduzioni, web design</p>
                                            <div className="span-5">
                                                <div className="text-wrapper-42">+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-34">
                                        <div className="div-35">
                                            <div className="text-wrapper-43">Cascina Casalina</div>
                                            <div className="text-wrapper-41">brand, copywriting</div>
                                            <div className="span-5">
                                                <div className="text-wrapper-42">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="a-4">
                                    <div className="text-wrapper-44">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="div-36">
                            <div className="div-wrapper">
                                <p className="div-17">
                                    <span className="text-wrapper-2">(human) (human) </span>
                                    <span className="text-wrapper-3">(human)</span>
                                </p>
                            </div>
                            <div className="span-6" />
                            <div className="div-37">
                                <div className="h-3">
                                    <div className="overlap-group-6">
                                        <div className="text-wrapper-45">abbiamo bisogno di</div>
                                        <div className="strong-10">
                                            <div className="text-wrapper-46">parole che</div>
                                        </div>
                                        <div className="strong-11">
                                            <div className="text-wrapper-47">dicono cose.</div>
                                        </div>
                                        <p className="text-wrapper-48">e poi di cose che si trasformano in realtà.</p>
                                    </div>
                                </div>
                                <div className="div-38">
                                    <p className="il-designer-non-deve">
                                        il designer non deve mai dimenticare che i modelli mentali delle persone cambiano:
                                        <br /> restituire un contenuto alla portata di tutti vuol dire comprendere intimamente le
                                        motivazioni dei processi mentali dietro uno stato d’animo e le modalità di fruizione delle
                                        informazioni.
                                    </p>
                                    <p className="text-wrapper-49">ed è un processo costante.</p>
                                </div>
                            </div>
                        </div>
                        <div className="div-39">
                            <div className="home-quote-desktop-wrapper">
                                <img className="home-quote-desktop" alt="Home quote desktop" src="home-quote-desktop-jpg.png" />
                            </div>
                            <div className="div-40">
                                <div className="p-9">
                                    <div className="overlap-group-7">
                                        <p className="text-wrapper-50">L’unico modo per scoprire i limiti del possibile è</p>
                                        <div className="strong-12">
                                            <div className="text-wrapper-51">avventurarsi</div>
                                        </div>
                                        <div className="strong-13">
                                            <div className="text-wrapper-52">un po’ oltre</div>
                                        </div>
                                        <div className="text-wrapper-53">, verso l’impossibile.</div>
                                    </div>
                                </div>
                                <div className="text-wrapper-54">Arthur C. Clarke</div>
                            </div>
                        </div>
                        <div className="div-41">
                            <div className="div-wrapper">
                                <p className="div-17">
                                    <span className="text-wrapper-2">(chi siamo) (chi siamo) </span>
                                    <span className="text-wrapper-3">(chi siamo)</span>
                                </p>
                            </div>
                            <div className="span-7" />
                            <div className="div-42">
                                <p className="text-wrapper-4">
                                    no, non siamo giovani e dinamici,
                                    <br /> anche se rischiamo come
                                    <br /> se avessimo 23 anni.
                                </p>
                                <div className="div-43">
                                    <p className="text-wrapper-55">usiamo tecniche creative di gruppo per sviluppare idee efficaci.</p>
                                    <div className="p-10">
                                        <div className="overlap-group-8">
                                            <p className="text-wrapper-56">
                                                significa che la capacità del team di elaborare un procedimento tra il problema e la soluzione è
                                                moltiplicata per tutti gli elementi del gruppo che partecipano con le loro competenze e
                                                conoscenze: una sorta di cervello collettivo che
                                            </p>
                                            <div className="strong-14">
                                                <div className="text-wrapper-57">amplifica le idee</div>
                                            </div>
                                            <p className="text-wrapper-58">per rendere più fertile il processo creativo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-44">
                            <div className="premi-premi-premi-wrapper">
                                <p className="premi-premi-premi">
                                    <span className="text-wrapper-2">premi premi </span>
                                    <span className="text-wrapper-3">premi</span>
                                </p>
                            </div>
                            <div className="div-45">
                                <div className="div-46">
                                    <img className="awwards-logotype" alt="Awwards logotype" src="awwards-logotype-2018-svg-png.png" />
                                    <p className="element-honorable-mentions">
                                        3 honorable mentions
                                        <br /> 3 mobile excellence
                                    </p>
                                </div>
                                <div className="div-47">
                                    <img className="m-png" alt="M png" src="m-png.png" />
                                    <p className="text-wrapper-59">5 Site of the Day</p>
                                </div>
                                <div className="div-48">
                                    <img className="idulommvgf-png" alt="Idulommvgf png" src="idulommvgf-png.png" />
                                    <p className="element-special-judge">
                                        4 Special Judge Kudos Award
                                        <br /> 6 Best Innovation
                                        <br /> 6 best Ul design
                                        <br /> 6 best UX design
                                        <br /> 2 Site of the dav
                                    </p>
                                </div>
                                <div className="div-49">
                                    <img className="bestcss-png" alt="Bestcss png" src="bestcss-png.png" />
                                    <p className="text-wrapper-60">2 Site of the Day</p>
                                </div>
                                <div className="div-50">
                                    <img className="csslight-png" alt="Csslight png" src="csslight-png.png" />
                                    <p className="text-wrapper-61">2 Featured of the Day</p>
                                </div>
                            </div>
                        </div>
                        <div className="div-51">
                            <div className="div-52">
                                <div className="lettere-lettere-wrapper">
                                    <p className="lettere-lettere">
                                        <span className="text-wrapper-2">lettere lettere </span>
                                        <span className="text-wrapper-3">lettere</span>
                                    </p>
                                </div>
                                <p className="text-wrapper-62">
                                    lettere perché sono fotografie pensate, lettere perché fanno succedere cose incredibili, lettere
                                    perché puoi prenderci alla lettera
                                </p>
                            </div>
                            <div className="div-vctheme-posts">
                                <div className="div-53">
                                    <div className="article">
                                        <div className="img-wrapper">
                                            <img className="img" alt="Lion statue" src="lion-statue-1536x1025-jpg.png" />
                                        </div>
                                        <div className="div-54">
                                            <p className="text-wrapper-63">Siate creativi, siate originali, distinguetevi. Come?</p>
                                            <p className="text-wrapper-64">
                                                Siamo alla ricerca di qualcosa di interessante e le persone originali e creative ci aiutano a
                                                trovare queste cose. Come imparare queste preziose qualità?
                                            </p>
                                            <div className="text-wrapper-65">+</div>
                                        </div>
                                    </div>
                                    <div className="article-2">
                                        <div className="img-wrapper">
                                            <img
                                                className="img"
                                                alt="Engin akyurt"
                                                src="engin-akyurt-aiaonl9end0-unsplash-1536x1024-jpg.png"
                                            />
                                        </div>
                                        <div className="div-54">
                                            <p className="text-wrapper-66">L’editing: l’importanza della revisione di un testo</p>
                                            <p className="text-wrapper-67">
                                                Con la revisione testi garantiamo che ogni carattere, ogni frase e ogni paragrafo trasmetta il
                                                messaggio giusto in modo accurato e potente.
                                            </p>
                                            <div className="text-wrapper-65">+</div>
                                        </div>
                                    </div>
                                    <div className="article-3">
                                        <div className="img-wrapper">
                                            <img className="img" alt="Angel" src="angel-ge2a0e942f-1920-1536x1024-jpg.png" />
                                        </div>
                                        <div className="div-54">
                                            <p className="text-wrapper-68">
                                                Creare il marchio: come il payoff e il naming vanno di pari passo
                                            </p>
                                            <p className="il-payoff-la-frase">
                                                Il payoff è la frase che cattura l&#39;essenza del naming e ciò che rappresenta. È ciò che
                                                volete che i vostri clienti ricordino e associno alla vostra azienda.
                                            </p>
                                            <div className="text-wrapper-65">+</div>
                                        </div>
                                    </div>
                                    <div className="article-4">
                                        <div className="img-wrapper">
                                            <img className="img" alt="Angel of the waters" src="angel-of-the-waters-statue-jpg.png" />
                                        </div>
                                        <div className="div-54">
                                            <p className="text-wrapper-69">
                                                Logo di successo: guida alla creazione di un’immagine efficace del marchio
                                            </p>
                                            <p className="ci-sono-molti">
                                                Ci sono molti aspetti da considerare quando si progetta un logo di successo. Di seguito una
                                                guida che aiuta a creare un&#39;immagine efficace del marchio.
                                            </p>
                                            <div className="text-wrapper-65">+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="a-5">
                                    <div className="text-wrapper-70">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main-footer">
                        <div className="div-55">
                            <div className="div-56">
                                <div className="text-wrapper-71">contatti</div>
                                <div className="ul-4">
                                    <div className="a-6">
                                        <div className="text-wrapper-9">facebook</div>
                                        <div className="a-after-4" />
                                    </div>
                                    <div className="a-7">
                                        <div className="text-wrapper-9">instagram</div>
                                        <div className="a-after-5" />
                                    </div>
                                    <div className="a-8">
                                        <div className="text-wrapper-14">linkedin</div>
                                        <div className="a-after-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-wrapper">
                                <div className="contact-form">
                                    <div className="div-57">
                                        <div className="select">
                                            <div className="overlap-group-9">
                                                <img className="image" alt="Image" src="image.svg" />
                                                <div className="div-58">
                                                    <p className="text-wrapper-72">Vorrei conoscervi per parlare di</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="select-2">
                                            <div className="overlap-group-9">
                                                <img className="image" alt="Image" src="image-2.svg" />
                                                <div className="div-59">
                                                    <div className="text-wrapper-73">Budget</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="select-3">
                                            <div className="overlap-group-9">
                                                <img className="image" alt="Image" src="image-3.svg" />
                                                <div className="div-60">
                                                    <div className="text-wrapper-73">Come ci hai conosciuto?</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input">
                                            <div className="div-placeholder">
                                                <div className="text-wrapper-74">Nome e Cognome</div>
                                            </div>
                                        </div>
                                        <div className="div-placeholder-wrapper">
                                            <div className="div-placeholder-2">
                                                <div className="text-wrapper-74">Azienda (opzionale)</div>
                                            </div>
                                        </div>
                                        <div className="input-2">
                                            <input className="div-placeholder-3" placeholder="Scrivi la tua email" type="email" />
                                        </div>
                                    </div>
                                    <div className="textarea" />
                                    <div className="div-61">
                                        <div className="p-11">
                                            <div className="label">
                                                <div className="span-8" />
                                                <p className="spuntando-questa">
                                                    <span className="text-wrapper-75">Spuntando questa casella ci autorizzi al </span>
                                                    <span className="text-wrapper-76">trattamento dei tuoi dati personali</span>
                                                    <span className="text-wrapper-75">, ne avremo cura.</span>
                                                </p>
                                            </div>
                                            <div className="label-2">
                                                <div className="span-8" />
                                                <div className="text-wrapper-77">Voglio iscrivermi alla newsletter!</div>
                                            </div>
                                        </div>
                                        <div className="invia-wrapper">
                                            <div className="invia">invia</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-62">
                                <p className="text-wrapper-78">
                                    Caroselling | Copyright 2022 | P.IVA 02472870209 | Mantua, Italy and everywhere
                                </p>
                                <div className="ul-5">
                                    <div className="a-9">
                                        <div className="text-wrapper-79">Privacy Policy</div>
                                    </div>
                                    <div className="li">
                                        <div className="text-wrapper-80">|</div>
                                        <div className="a-10">
                                            <div className="text-wrapper-81">Cookie Policy</div>
                                        </div>
                                    </div>
                                    <div className="li">
                                        <div className="text-wrapper-80">|</div>
                                        <div className="a-11">
                                            <div className="text-wrapper-82">Aggiorna preferenze cookie</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>






       <div className='player-wrapper'>
{/*         <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=LXb3EKWsInQ&t=161s'
            width='100vw'
            height='100vh'
        /> */}
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <section>
        
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
    </div>
  );
};

export default AboutUs;
