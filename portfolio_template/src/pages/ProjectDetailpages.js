import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetailpages({ userName }) {

    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`);
            const result = await data.json();

            if (result) {
                setProject(result);
                setLoading(false);
            }
    }

    if (userName && name) {
        fetchData();
    }
    }, [userName, name]);

    return (
            <div className='Projects-container'>
                <h2> Project: {project.name}</h2>
                {loading ? (
                    <span>Loading...</span>
                ): (
                    <div></div>
                )}
                </div>
            );
}
export default ProjectDetailpages;