import { useEffect, useState } from 'react'
import './App.css'
import { filteredInfo } from './CustomTypes'
import { query } from './Queries'
import house from './assets/house.png'
function App() {
  const [data, setData] = useState([])
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
  },[])

  // Francisco 4WNlCf9gWzJMMYMyMtPfm6
  // 5Z5ofAOLbRL9FJWVG6C1Eo Jerrycin
  // Alvison 21t4SuBA08L9J2d1WNy8Ep
  const partnerID = '5Z5ofAOLbRL9FJWVG6C1Eo'

  const filteredInfoArr: filteredInfo[] = data?.filter((partner) => {
    return partner['sys']['id'] === partnerID
  })

  const bgPrimaryStyle: React.CSSProperties = {
    color: filteredInfoArr[0]?.primaryColor,
    backgroundColor: filteredInfoArr[0]?.bgColor,
  }

    const stylesHeaderOne: React.CSSProperties = {
      width: '560px',
      lineHeight: '110%',
      color: filteredInfoArr[0]?.primaryColor,
    }

    const stylesParagraph: React.CSSProperties = {
      fontSize: '21px',
      lineHeight: '150%',
      width: '295px',
      color: filteredInfoArr[0]?.secondaryColor,
    }


// Custom Styling
  const photoProfileStyles = `h-24 w-24 rounded-full m-2 border-2 border-${filteredInfoArr[0]?.primaryColor}`
const paragraphStyles = `leading-5 text-xl text-${filteredInfoArr[0]?.secondaryColor}`

  return (
    filteredInfoArr.length > 0 && (
      <>
        <div
          style={bgPrimaryStyle}
          className="flex flex-row items-center justify-center"
        >
          <div className="basis-1/2 max-h-full">
            <div className="flex flex-col items-center justify-center">
              <div className="mx-8 w-[560px]">
                <h1 style={stylesHeaderOne} className="text-[64px] mx-auto">
                  {filteredInfoArr[0]?.slogan}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-center m-4 p-4">
                <div className="mx-8">
                  <img
                    className={photoProfileStyles}
                    src={filteredInfoArr[0]?.partnerPhoto?.url}
                  />
                  <p className={paragraphStyles}>{filteredInfoArr[0]?.name}</p>
                </div>
                <div className="">
                  <p className="tex-sm font-extralight" style={stylesParagraph}>
                    As a certified sale-leaseback provider, I can help you sell
                    your home <span className="font-bold">without moving</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <img src={house} className="" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center bg-[#1859FF]">
          <div className="basis-1/2 max-h-full">
            <div className="flex flex-col items-start justify-center h-96">
              <div className="mx-8">
                <p className="font-normal text-left text-white text-2xl">
                  Change your future without changing your address
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2 text-white text-4xl">FORM WILL GO HERE</div>
        </div>
      </>
    )
  )
}
export default App
