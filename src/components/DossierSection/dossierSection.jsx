import React from 'react';

import './dossier_section.css';


import DossierItem from '../../tools/DossierItem/dossierItem';


import scpemblem from '../../assets/Product Icons/scp_emblem.png';
import scpcursedmask from '../../assets/Product Icons/scp_cursedmask.gif';

const Dossier = () => {
    return (
        <section id="dossier">
            {/*Selection*/}
            <div className="container dossier__container">
                <div className="dossier__container-content">
                    {/*Title*/}
                    <div className="dossier__container-highlights">
                        Dossier
                    </div>

                    {/*Dossier Item Container*/}
                    <div className="dossier__container-itemcontainer">
                        <DossierItem
                            key={0}
                            icon={scpemblem}
                            description="A Beautiful emblem made from high quality plastic."
                            slot="A1"
                            price="$1.25"
                        />
                        <DossierItem
                            key={0}
                            icon={scpcursedmask}
                            description="A terrible cursed mask"
                            url="https://scpcb.fandom.com/wiki/SCP-035"
                            slot="A1"
                            price="$1.25"
                        />
                        <DossierItem
                            key={0}
                            icon={scpemblem}
                            description="A Beautiful emblem made from high quality plastic."
                            slot="A1"
                            price="$1.25"
                        />
                        <DossierItem
                            key={0}
                            icon={scpemblem}
                            description="A Beautiful emblem made from high quality plastic."
                            slot="A1"
                            price="$1.25"
                        />
                        <DossierItem
                            key={0}
                            icon={scpemblem}
                            description="A Beautiful emblem made from high quality plastic."
                            slot="A1"
                            price="$1.25"
                        />
                        <DossierItem
                            key={0}
                            icon={scpemblem}
                            description="A Beautiful emblem made from high quality plastic."
                            slot="A1"
                            price="$1.25"
                        />
                        <DossierItem
                            key={0}
                            icon={scpemblem}
                            description="A Beautiful emblem made from high quality plastic."
                            slot="A1"
                            price="$1.25"
                        />
                    </div>
                </div>
            </div>
        </section>    
    );
}

export default Dossier;