import Link from 'next/link'

const Refer = () => {
  return (
    <div>
      <div className="my-10"></div>
        <div className="flex h-full mx-auto max-w-screen-2xl mb-14 my-auto flex-col sm:flex-row">

          <div className="max-w-screen-2xl sm:w-10/12 z-0 flex-shrink-0" style={{
            backgroundImage: `url(./images/hero/referHero.webp)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            height:'550px',
            }}>
          </div>
          <div className="relative transform -translate-y-96 sm:-translate-x-60 sm:translate-y-0 z-10 flex-grow-0 flex-shrink-0 my-36 p-6 bg-white max-w-md">
            <h3 className="text-3xl mb-4 font-semibold">Refer-a-Friend Program</h3>
            <p className="mb-4">
              Invite friends to enroll in HP Instant Ink too by sharing your
              unique code. For every friend who signs up, we will give you both
              FREE MONTHS of service.
            </p>
            <Link href="" passHref>
              <button type="submit" className="rounded-xl text-base w-36 h-12 my-auto mr-2 bg-blue-700 opacity-80 hover:opacity-100">
              <p className="text-white">Learn More</p>
          </button>
        </Link>
          </div>

        </div>
    </div>
  );
}
export default Refer;