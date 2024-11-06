import { useState } from 'react';
import { accordionData } from '../data';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // Handle Accordion Click
    const HandleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <>
            <div className="wrapper">
                <h1>Accordion App</h1>
                <div className="header">
                    {
                        accordionData.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="title" onClick={() => HandleToggle(index)}>
                                    <h2>{item.title}</h2>
                                    <p className='icon'>{activeIndex === index ? "-" : "+"}</p>
                                </div>
                                {
                                    activeIndex === index && (
                                        <div className="content">
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Accordion;
