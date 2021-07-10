import Image from 'next/image'
import Link from 'next/link'

//Images
import step1 from '../../public/images/steps/1.svg'
import step2 from '../../public/images/steps/2.svg'
import step3 from '../../public/images/steps/3.svg'

const HowWorks = () => {
  return (
      <div className="text-gray-700 max-w-screen-2xl">
        <div className="my-5 flex gap-40 justify-center">
          <Link href="" passHref className="flex">
            <button className="btn chat"><span className="absolute font-semibold">Virtual Agent</span></button>
          </Link>
          <Link href="" passHref>
            <button className="relative -top-1 font-semibold">1-888-447-0148</button>
          </Link>
        </div>
        <br/>
        <br/>
        <div>
          <h3 className="tracking-wide text-3xl text-center font-serif">How it works</h3>
          <br/>
          <br/>
          <div className="flex gap-10 justify-center text-center w-7/12 mx-auto">
            <div>
              <Image
                src={step1}
                alt="Step 1"
              >
              </Image>
              <div>
                <h5 className="font-semibold">Select a printing plan</h5>
                <p>
                  Print a little or a lot—there’s an option for everyone.
                  Your subscription includes ink or toner, hassle-free delivery,
                  and prepaid recycling.
                </p>
              </div>
            </div>
            <div>
            </div>
            <div>
              <Image
                src={step2}
                alt="Step 2"
              >
              </Image>
              <div>
                <h5 className="font-semibold">We ship you ink or toner at no extra cost</h5>
                <p>
                  When ink or toner levels are low, we automatically ship a new
                  cartridge. Cartridges are shipped before you need them, so you
                  never run out.
                </p>
              </div>
            </div>
            <dot>
            </dot>
            <div>
              <Image
                src={step3}
                alt="Step 3"
              >
              </Image>
              <div>
                <h5 className="font-semibold">Enjoy total flexibility</h5>
                <p>
                  You can cancel or change your plan anytime. If you don&apos;t use all
                  of your pages, they automatically rollover to the next month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}

export default HowWorks;