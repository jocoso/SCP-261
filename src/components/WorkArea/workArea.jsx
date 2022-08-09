import React from 'react';

import './work_area.css';

// Local
import DossierSection from '../DossierSection/dossierSection'
import SCPSection from '../SCPSection/scpSection'

const WorkArea = () => {
    return (
        <section id="work-area">
            <div className="workarea-content">
                <SCPSection />
                <DossierSection />
            </div>
        </section>
    )
}

export default WorkArea;