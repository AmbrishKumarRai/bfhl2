import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [jsonData, setJsonData] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5173/bfhl', JSON.parse(jsonData));
            setResponse(res.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h1>21BCE10172</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={jsonData}
                    onChange={(e) => setJsonData(e.target.value)}
                    placeholder='Enter JSON here'
                    rows="10"
                    cols="50"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;

