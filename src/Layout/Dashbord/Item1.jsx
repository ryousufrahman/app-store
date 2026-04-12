import React, { useContext } from 'react';
import Dfooter from './Dfooter';
import { AppContext } from '../../MainContext';

const Item1 = () => {
    const hello = useContext(AppContext)
    return (
        <div>
            <h2 className='text-5xl '>ITEM ONE</h2>
            <h2>{hello}</h2>
              <Dfooter></Dfooter>
        </div>
    );
};

export default Item1;