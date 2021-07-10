import Image from 'next/image'

//Images
import globe from '../../public/images/planet.svg'

const Green = () => {
  return (
    <div className="grid grid-cols-1 place-content-center max-w-screen-2xl mx-auto">
      <div className="z-10 max-w-screen-md mx-auto my-10 text-white text-center">
        <Image src={globe} alt="globe"></Image>
        <h4 className="text-3xl font-semibold mb-8">
          Help us drive the circular economy
        </h4>
        <p className="text-lg mb-8">
          HP uses recycled content to make 100% of Original HP toner cartridges and
          80% of Original HP ink cartridges. With HP Instant Ink, ink cartridges
          require less packaging and fewer shipments, reducing energy usage by 69% and
          water usage by 70%.
        </p>
        <button
          type="submit"
          className="rounded-xl w-32 h-12 my-auto font-semibold "
          style={{
            "backgroundColor":"white",
          }}>
            <p className="text-blue-600 opacity-90 hover:opacity-100">Learn More</p>
          </button>
      </div>

      <div className="absolute w-full max-w-screen-2xl" style={{
        backgroundImage: `url(./images/hero/recycleHero.jpeg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        height:'400px',
        }}>
      </div>
    </div>

  );
}

export default Green;