import React from 'react';
import {useInView} from 'react-intersection-observer';

import PokSprites from "./PokSprites";
import PolName from "./PolName";
import PokTypes from "./PokTypes";

const CardPokemon = ({sprites, id, name, types}) => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        // <div ref={ref} className="col- pokemon">
        <div ref={ref} className={inView ? "col- pokemon" : "col- pokemon__sceleton"}>
            {
                inView
                    ?
                    <div>
                        <PokSprites sprites={sprites}/>
                        <PolName id={id} name={name}/>
                        <PokTypes types={types}/>
                    </div>
                    :

                    <div/>
            }
        </div>

    );
};

export default CardPokemon;

// return (
// <div ref={ref} className="col- pokemon">
// {
//             inView
//                 ?
//                 <>
//                     <PokSprites sprites={sprites}/>
//                     <PolName id={id} name={name}/>
//                     <PokTypes types={types}/>
//                 </>
//                 :
//                 <div className='pokemon__sceleton' />
//         }
//     </div>
// );