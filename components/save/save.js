import Image from 'next/image'

//Images
import saveH from '../../public/images/hero/save.webp'

const Save = () => {
  return (
    <div className="max-w-screen-2xl my-36 mx-auto text-gray-700">
          <div className="absolute z-10 bg-white my-16 ml-10 max-w-lg h-60 2xl:my-10 xl:my-4 xl:left-auto lg:my-20 lg:h-52">
            <div className=" lg:py-2 px-8 ">
              <h3 className="text-3xl">When we save, you save</h3>
              <br/>
              <p className="text-lg">
                HP Instant Ink uses high-volume cartridges, pricing based on pages
                printed, and direct-to-customer shipping delivered only when you run
                low. This means fewer cartridges travel shorter distances and require
                less packages, allowing us to pass savings on to you.
              </p>
            </div>
          </div>

        <div className="hidden xl:block">
          <Image
          src={saveH}
          alt="HP Instant Ink"
          layout="responsive"
        />
        </div>
        <div className="block xl:hidden">
          <div className="w-full max-w-screen-2xl block xl:hidden" style={{
            backgroundImage: `url(./images/hero/save.webp)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'400px',
            }}>
          </div>
        </div>
      </div>
  );
}

export default Save;