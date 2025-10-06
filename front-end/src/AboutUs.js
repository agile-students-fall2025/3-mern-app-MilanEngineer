import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

/**
 * A React component that shows the about us page 
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = () => {
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
        setData(response.data)  
      } catch (err) {
        // display err message 
        setError('Failed to fetch About Us data: ' + err.message)
      } finally {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      }
    }

    fetchAboutUs()
  }, [])
  if (!loaded) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!data) return <p>No data available</p>

  return (
    <>
      <h1>About {data.name}</h1>
      {data.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <img
        src={data.image}
        alt={`Portrait of Author`}
        style={{ maxWidth: '300px', height: 'auto' }} //added css inline only for image
      />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
