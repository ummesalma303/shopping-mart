// import React from 'react';
import PropTypes from 'prop-types';


// [
//     {
//         "id": "005",
//         "name": "Ergonomic Office Chair",
//         "description": "Comfortable and adjustable office chair with lumbar support and breathable mesh back.",
//         "price": 20,
//         "category": "Furniture",
//         "isFeatured": true,
//         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcofB3ENTQC3W-cuO8SMeToPO3zY4ZICxbyWYGLtDCRuQygUa4uuzMW8xX0kG3oDC0tI&usqp=CAU"
//     }
// ]
const About = ({ about }) => {
    console.log(about);
    return (
        <div>
            
            <h2 className='text-3xl font-semibold my-6'>Total Archive:{about.length}</h2>  
            {
                about.map(p => (
                    <div className='border-2 border-red-300 my-6 p-6 rounded-xl' key={p.id}>
                        <h2 className='font-semibold text-2xl mb-2'> Name:{p.name}</h2>
                        <p>Description: { p.description}</p>
                        
                    </div>
                ))
            }
        </div>
    );
};

About.propTypes = {
    about: PropTypes.array.isRequired
};

export default About;