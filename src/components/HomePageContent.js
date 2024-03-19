import React, { useContext } from 'react';
import Context from './Context';

const HomePageContent = () => {

    const { theme } = useContext(Context);

    const boxColorCss = (index) => {
        return {
            borderColor: theme[index].color,
            backgroundColor: theme[index - 2].color,
            color: theme[index - 4].color,
        };
    }

    return (
        <div className='boxing' style={boxColorCss(4)}>
            <p> Bonjour et bienvenue sur le Blog personnel de Maxime Kolodziejczyk, je souhaite devenir développeur web. Ce Blog développé en ReactJs sera ma future vitrine que j'utiliserais pour mon identité numérique, présenter mes projets personnels.</p > <p>En bref, ici vous pouvez en découvrir sur mon identité numérique autour du développement.</p>
        </div>
    );
};

export default HomePageContent;