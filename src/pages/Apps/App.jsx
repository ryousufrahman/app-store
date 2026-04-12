import React, { use } from 'react';
import DisplayApp from './DisplayApp/DisplayApp';
 const appDataPromise = fetch('/products.json').then(res=>res.json())

const App = () => {
    const appData = use(appDataPromise)
    

    return (
    <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-4 gap-5'>
            {
                appData.map((singleApp , index) => <DisplayApp key={index} singleApp={singleApp}></DisplayApp>)
            }
        </div>
    </div>
    );
};

export default App;