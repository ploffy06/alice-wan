import React from 'react';
import './Showcase.css';
import Project from './Project';

const Showcase = () => {
    return (
        <div className='showcase'>
            <Project
                title="Rosalind Problems"
                // img="Rosalind_Logo.jpg"
                description="Here my solutions to the Rosalind Problems"
                github_url='https://github.com/ploffy06/rosalind'
            />
            <Project
                title="Next Problem"
                details="Here my solutions to the Rosalind Problems"
                github_url='https://github.com/ploffy06/rosalind'
            />
            <Project
                title="Next Problem"
                details="Here my solutions to the Rosalind Problems"
                github_url='https://github.com/ploffy06/rosalind'
            />
            <Project
                title="Next Problem"
                details="Here my solutions to the Rosalind Problems"
                github_url='https://github.com/ploffy06/rosalind'
            />
            <Project
                title="Next Problem"
                details="Here my solutions to the Rosalind Problems"
                github_url='https://github.com/ploffy06/rosalind'
            />
            <Project
                title="Next Problem"
                details="Here my solutions to the Rosalind Problems"
                github_url='https://github.com/ploffy06/rosalind'
            />
        </div>
    )
}

export default Showcase;