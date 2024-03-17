import React, { useState } from "react";

const Project = (
    {title, description, details, img, github_url}
) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const main_side = (
        <div className="main-side">
            <header>{title}</header>
            <p>{description}</p>
        </div>
    )

    const second_side = (
        <div className="second-side">
            second side
        </div>
    )

    return (
        <div
        className="project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? second_side : main_side}
        </div>
    )
}

export default Project;