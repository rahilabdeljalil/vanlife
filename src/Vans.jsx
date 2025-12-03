import { useState, useEffect } from 'react';
export default function Vans() {
  
    const [vans, setVans] = useState([]);
useEffect(() => {
    fetch("/api/vans")
        .then((res) => {
            console.log("Fetch response:", res); // see if you get a response
            return res.json();
        })
        .then((data) => {
            console.log("Fetched data:", data); // see the actual data
            setVans(data.vans);
        })
        .catch((err) => console.error("Fetch failed:", err)); // see errors
}, []);


    return (
        <div className="vans-container">
           
        </div>
    );
}