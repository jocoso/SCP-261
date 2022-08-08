import React from 'react';

// import local
import './scpPage.css';

// Assets
import MachineImg from '../../assets/SCP-294.png';

const SCPPage = () => {
    return (
            <section id="scp-page">
            {/*Selections*/}
            <div className="container scp__container">
                <div className="scp__container-content">
                    <div className="scp__container-highlights">
                        <p>
                            You found a vending machine in the middle
                            of an empty room. Input a combination of
                            a letter and a number to get something from it.
                        </p>
                    </div>

                    <img
                        src={MachineImg}
                        alt="SCP 294"
                        width="250"
                    />

                    <div className="scp__container-highlights">
                        <select name="Letters" id="letter">
                                <option value="A"> A </option>
                                <option value="B"> B </option> 
                                <option value="C"> C </option>
                                <option value="D"> D </option>
                            </select>
                        <select name="digits" id="digit">
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                            </select>
                        <button>Submit</button>
                    </div>
                    </div>
             </div>
                
            </section>
        );
}

export default SCPPage;