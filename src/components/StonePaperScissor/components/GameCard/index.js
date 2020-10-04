import React from 'react';

import classes from './styles.module.css';

const GameCard = React.memo(({option, cardStyle}) => {

    return <div style={cardStyle} className={classes.card}>
        <div className={classes.cardImageWrapper}>
            <img src={option.image} alt={option.title} className={classes.cardImage} />
        </div>
        <div className={classes.cardTitle}>{option.title}</div>
    </div>
});

export default GameCard;