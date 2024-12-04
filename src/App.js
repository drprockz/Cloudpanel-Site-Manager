import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [websites, setWebsites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.backend.sitemanager.simpleinc.in/api/websites')
            .then(response => {
                setWebsites(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching websites:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Website Lists</h1>
            <table>
                <thead>
                    <tr>
                        <th>Domain</th>
                        <th>Root Directory</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {websites.map((site, index) => (
                        <tr key={index}>
                            <td>{site.domain}</td>
                            <td>{site.rootDirectory}</td>
                            <td>{site.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
