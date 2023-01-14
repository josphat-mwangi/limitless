import { useEffect, useState } from "react";
import styles from  '../styles/partners.module.scss';
import { _items } from '../utilities/dataStore';
const slideWidth = 30;



const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        data: _items[idx],
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);
   

    return (
        <li className={styles.carousel__slide_item} style={item.styles}>
            <div className={styles.carousel__slide_item_img_link}>
                <img src={item.data.image} alt={item.data.title} />
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Partner = () => {
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const bigLength = items.length;
    let slideInterval;
    let intervalTime = 5000;
    const autoscroll = true;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    const auto = () => {
        slideInterval = setInterval(nextClick, intervalTime)
    }

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
        if (autoscroll) auto()
        return () => clearInterval(slideInterval);
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) 
    }, [items]);

    return (
        <div className={styles.carousel__wrap}>
            <div className={styles.carousel__inner}>
            
                <div className={styles.carousel__container}>
                    <ul className={styles.carousel__slide_list}>
                        {items.map((pos, i) => (
                            <CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <div className={styles.carousel__dots}>
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? `${styles["dot"]} ${styles["active"]}` : `${styles["dot"]}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partner;