import React from 'react';

import './dossier_item.css';

const DossierItem = ({ key, icon, description, slot, price, url = null }) => {

    return (
        <div key={key} className="dossier-item">
            <img src={icon} alt={key} />
            <p>
                {description}
                <br/>
                {url ? <a href={url} target='_blank' rel='noreferrer' >Link</a> : null }
            </p>
            <p>{slot}</p>
            <p>{price}</p>
        </div>
    );

}

export default DossierItem;