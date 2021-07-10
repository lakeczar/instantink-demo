import Link from 'next/link'

const HeroSection = () => {
  return (
  <div className="grid grid-cols-2 place-content-center max-w-screen-2xl mx-auto" style={{ height: '700px'}}>
    <div className="absolute w-full max-w-screen-2xl hidden lg:block" style={{
      backgroundImage: `url(./images/hero/rebrandedHero.jpeg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'left',
      height:'700px',
      }}>
    </div>
    <div className="absolute w-full lg:hidden" style={{
      backgroundImage: `url(./images/hero/rebrandedHeroMobile.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      width: '100%',
      minHeight: '650px',
      }}>
    </div>
    <div className="relative w-11/12 h-full mx-auto mb-14 lg:my-auto col-span-2 lg:ml-8 lg:max-w-md  lg:col-span-1  lg:w-auto">
      <h1 className="text-7xl font-sans text-gray-700 text-center lg:text-left">
        HP Instant Ink
      </h1>
      <p className="text-4xl font-serif font-medium text-gray-700 text-center lg:text-left">Never run out and save up to 50%</p>
      <br/>
      <div className="font-serif text-2xl text-gray-700 text-center lg:text-left">
        <p>Your printing service includes:</p>
        <ul className="list-outside list-none hero">
          <li className="hero">
            Original HP ink or toner
          </li>
          <li className="hero">
            Hassle-free delivery and recycling
          </li>
          <li className="hero">
            Flexible plan options, starting at $0.99 per month
          </li>
        </ul>
        <div className="my-4"/>
        <Link href="" passHref>
          <button type="submit" className="rounded-xl text-base w-36 h-12 my-auto mr-2"
            style={{
              "backgroundColor":"#048ac8",
            }}>
              <p className="text-white">Sign Up Now</p>
          </button>
        </Link>
        <p className="text-base my-4">Change or cancel anytime with no fee</p>
      </div>
    </div>
  </div>);
};

export default HeroSection;