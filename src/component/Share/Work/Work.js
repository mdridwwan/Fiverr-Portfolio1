import React from 'react';
import './Work.css';
import WorkCard from '../WorkCard/WorkCard';
import workCardData from '../WorkCardData/WorkCardData';

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Pr<span style={{ color: "rgb(255 51 112)", fontWeight: "900" }}>oj</span>ects</h1>
            <div className="project-container">
               {workCardData.map((value, index) =>{
                return(
                    <WorkCard 
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    />
                    );
               })}
            </div>
        </div>
    );
};

export default Work;