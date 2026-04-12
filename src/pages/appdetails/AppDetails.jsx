import React from 'react';
import { useLoaderData, useParams } from 'react-router';



const AppDetails = () => {
    const params =useParams()
    console.log(params);
    const allApp =useLoaderData();
    console.log(allApp);
    const {id} =params ;
    const clickedId = parseInt(id)
    console.log(clickedId);
    
    
    
       

    
    
    
    return (
        <div>
            <h2>app details</h2>
        
        </div>
    );
};

export default AppDetails;