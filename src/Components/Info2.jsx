import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Info2.css';

function Info2() {
    const cardData = [
        { imgSrc: "Commons-logo-en.svg_.png", title: "Commons", description: "Free media collection" },
        { imgSrc: "voyage.png", title: "Wikivoyage", description: "Free travel guide" },
        { imgSrc: "wiktionary_178396.webp", title: "Wiktionary", description: "Free dictionary" },
        { imgSrc: "wikibooks.png", title: "Wikibooks", description: "Free textbooks" },
        { imgSrc: "1000px-Wikinews-logo.svg.png", title: "Wikinews", description: "Free news source" },
        { imgSrc: "wikidata.png", title: "Wikidata", description: "Free knowledge base" },
        { imgSrc: "Wikiversity-logo-tiles_2x.png", title: "Wikiversity", description: "Free learning resources" },
        { imgSrc: "Wikiquote_logo_logotype.png", title: "Wikiquote", description: "Free quote compendium" },
        { imgSrc: "1200px-MediaWiki-2020-logo.svg.png", title: "MediaWiki", description: "Free & open wiki software" },
        { imgSrc: "wikisource.webp", title: "Wikisource", description: "Free content library" },
        { imgSrc: "Wikispecies-logo.svg.png", title: "Wikispecies", description: "Free species directory" },
        { imgSrc: "Wikifunctions-logo-en.svg.png", title: "Wikifunctions", description: "Free function library" },
        { imgSrc: "metawiki.png", title: "Meta-Wiki", description: "Community coordination & documentation" },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return ( 
        <div className="container">
            <div className="inforight">
                {cardData.map((card, index) => {
                    const { ref, inView } = useInView({
                        threshold: 0.1, // Adjust this value to control when the card is considered in view
                    });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            className="cardbox"
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <img src={card.imgSrc} alt={`${card.title} logo`} />
                            <a href="#">{card.title}</a>
                            <p>{card.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Info2;
