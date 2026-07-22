
//https://retoolapi.dev/GH2Ivb/dataMovil

import {useState, useEffect} from 'react'

const useCustomData = () => {
  const [workerData, setData] = useState([]);
  const [loading, setLoading] = useState(true);


   const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://retoolapi.dev/GH2Ivb/dataMovil');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

  useEffect(() => {
 
    fetchData();
  }, []);

  return { workerData, loading };
}   

export default useCustomData;