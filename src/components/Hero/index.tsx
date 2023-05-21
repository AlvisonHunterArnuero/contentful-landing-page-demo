import GitHub from "../Icons/Github"
import LinkedIn from '../Icons/LinkedIn'

export type filteredInfoProps = {
  name?: string
  email?: string
  phone?: string
  slogan?: string
  primaryColor?: string
  bgColor?: string
  secondaryColor?: string
  summary?: string
  linkedin?: string
  github?: string
  title?: string
  sys?: { id: string }
  partnerPhoto?: { url: string }
}

export type HeroProps = {
  filteredInformation: filteredInfoProps[]
}

const Hero: React.FC<HeroProps> = ({
  filteredInformation,
}) => {
    const bgPrimaryStyle: React.CSSProperties = {
      color: filteredInformation[0]?.primaryColor,
      backgroundColor: filteredInformation[0]?.bgColor,
    }

    const stylesHeaderOne: React.CSSProperties = {
      color: filteredInformation[0]?.primaryColor,
    }

    const stylesParagraph: React.CSSProperties = {
      color: filteredInformation[0]?.secondaryColor,
    }

  return (
    <main
      style={bgPrimaryStyle}
      className="flex flex-col items-center justify-center px-12 py-24 lg:flex-row"
    >
      <div className="basis-full py-6 md:basis-1/4">
        <img
          src={filteredInformation[0]?.partnerPhoto?.url}
          alt={filteredInformation[0]?.name}
          sizes="(max-width: 800px) 100vw, 620px"
          loading="eager"
          className={`mx-auto rounded-full border-2${filteredInformation[0]?.primaryColor}`}
        />
        <p className="mt-8 text-lg uppercase text-sky-300">
          {filteredInformation[0]?.name}
        </p>
        <small className="text-base">{filteredInformation[0]?.title}</small>
      </div>

      <div className="basis-full px-4 md:basis-3/4">
        <div className="basis-11/12">
          <h1
            style={stylesHeaderOne}
            className="my-6 text-5xl font-bold lg:text-6xl lg:tracking-tight xl:text-7xl xl:tracking-tighter"
          >
            {filteredInformation[0]?.slogan}
          </h1>
          <p
            style={stylesParagraph}
            className="mx-auto mt-4 max-w-4xl text-justify text-lg md:columns-2"
          >
            {filteredInformation[0]?.summary}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 text-yellow-400 sm:flex-row">
            <a
              href={filteredInformation[0]?.linkedin}
              target="_blank"
              className="flex gap-1"
              rel="noopener"
            >
              <LinkedIn />
            </a>
            <a
              rel="noopener"
              href={filteredInformation[0]?.github}
              className="flex items-center justify-center gap-1"
              target="_blank"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
