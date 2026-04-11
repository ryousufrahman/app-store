import React, { use } from 'react';
 const appDataPromise = fetch('/products.json').then(res=>res.json())

const App = () => {
    const appData = use(appDataPromise)
    

    return (
        <div>
            <p>{appData.length}</p>
        </div>
    );
};

export default App;