import { useEffect, useState } from "react"

function Home() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    // console.log("Search value:", search);
    console.log("Data value:", data);


    useEffect(() => {
        const getData = async () => {
            try {
                // Use CORS proxy for development purposes
                const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.nseindia.com/api/etf'));
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log("Fetched data:", data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        getData();
    }, []); // Empty dependency array means this runs once on mount


    // Handle input changes
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Handle button click
    /* const handleButtonClick = () => {
        console.log("Search initiated with value:", search);
        setData(search);
    }; */
    /* const handleButtonClick = () => {
        console.log("Search initiated with value:", search);
        setData(prevData => [...prevData, search]); // Append new search term to array
        setSearch(''); // Optionally clear input after adding
    }; */

    const handleButtonClick = () => {
        // Create an object with a unique id and the search value
        const newEntry = {
            id: Date.now(), // Use timestamp as a simple unique ID
            value: search
        };
        // Add the new object to the array
        // setData(prevData => [...prevData, newEntry]);
        data.push(newEntry); 
        // Clear input (optional)
        setSearch('');
    };

    const deleteData = (itemToDelete) => {
        setData(prevData => prevData.filter(item => item !== itemToDelete));
    };

    return (
        <>
            <input type="text" value={search} placeholder="Search Product" onChange={handleSearchChange} />
            <input type="button" value="Submit" onClick={handleButtonClick} />


            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple example of a React component.</p>
                {/* <p>Search Value: {data}</p> */}
                {
                    data.map((item) => {
                        return (
                            <div key={Math.random()}>
                                <h1>{item?.value} <span onClick={() => deleteData(item)} style={{ cursor: 'pointer', color: 'red' }}>DEL</span></h1>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home