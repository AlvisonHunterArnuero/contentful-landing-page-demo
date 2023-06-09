import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import { filteredInfo } from './CustomTypes'
import { query } from './Queries'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Deals from './components/Deals'
import Footer from './components/Footer'
import { Header } from './components/Header'
import Hero from './components/Hero'
function App() {
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${
          import.meta.env.VITE_CONTENTFUL_SPACE_KEY
        }/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Authenticate the request
            Authorization: `Bearer ${
              import.meta.env.VITE_CONTENTFUL_BEARER_TOKEN_KEY
            }`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        },
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors)
        }
        setData(data.partnerInfoCollection.items)
        console.log('data', data)
      })
  }, [])

  const partnerID = id !== null ? id : '17dwgHL9EADVXqZaE7fSyG'

  const filteredInfoArr: filteredInfo[] = data?.filter((partner) => {
    return partner['sys']['id'] === partnerID
  })

  return filteredInfoArr.length > 0 ? (
    <div className="container mx-auto">
      <Hero filteredInformation={filteredInfoArr} />
      <Header />
      <Deals />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  ) : (
    <></>
  )
}
export default App
