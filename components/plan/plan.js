import Link from 'next/link'
import Image from 'next/image'

import ink1 from '../../public/images/ink/1.svg'
import ink2 from '../../public/images/ink/2.svg'
import ink3 from '../../public/images/ink/3.svg'
import ink4 from '../../public/images/ink/4.svg'
import ink5 from '../../public/images/ink/5.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Plan = () => {
  const tabs = [
  { name: 'Ink Plans', onclick: '#', current: true },
  { name: 'Toner Plans', onclick: '#', current: false },
]
  return (

    <div className="mx-auto mb-16">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-blue-500 text-blue-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-2xl flex-grow text-center'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="my-10 text-gray-700 text-center text-lg">
        <p>Choose the plan that’s right for you. Change or cancel your HP Instant Ink subscription anytime.</p>
        <p> No annual fee, contract, or commitment!</p>
        <br/>
        <Link href="#"><a className="text-blue-500 font-semibold tracking-wide text-base">Does my printer use ink or toner?</a></Link>
      </div>
      <br/>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-nowrap flex-none gap-8 w-full flex-col xl:flex-row items-center">
          <div className="flex flex-col  bg-white rounded-lg shadow-lg h-52 w-48">
            <div className="mx-auto mt-5">
              <Image
              src={ink1}
              alt=""
              layout="fixed"
            ></Image>
            </div>
            <div className="text-white text-center h-20 pt-2" style={{ backgroundColor:"rgb(229, 45, 229)"}}>
              <h5 className="text-2xl font-semibold">$0.99</h5>
              <p className="font-semibold">15 Pages/month</p>
            </div>
            <div className="m-auto">
              <button
                      type="submit"
                      className="rounded-xl w-32 h-12 my-auto font-semibold border-2 border-blue-500"
                      style={{
                        "backgroundColor":"white",
                      }}
              ><p className="text-blue-500">Get Started</p></button>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-lg h-52 w-48">
            <div className="mx-auto mt-4">
              <Image
              src={ink2}
              alt=""
              layout="fixed"
            ></Image>
            </div>
            <div className="text-white text-center h-20 pt-2" style={{ backgroundColor:"rgb(198, 4, 198)"}}>
              <h5 className="text-2xl font-semibold">$2.99</h5>
              <p className="font-semibold">50 Pages/month</p>
            </div>
            <div className="m-auto">
              <button
                      type="submit"
                      className="rounded-xl w-32 h-12 my-auto font-semibold border-2 border-blue-500"
                      style={{
                        "backgroundColor":"white",
                      }}
              ><p className="text-blue-500">Get Started</p></button>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-lg h-52 w-48 z-10">
            <div className="mx-auto mt-4">
              <Image
              src={ink3}
              alt=""
              layout="fixed"
            ></Image>
            </div>
            <div className="text-white text-center h-20 pt-2" style={{ backgroundColor:"rgb(175, 0, 175)"}}>
              <h5 className="text-2xl font-semibold">$4.99</h5>
              <p className="font-semibold">100 Pages/month</p>
            </div>
            <div className="m-auto">
              <button
                      type="submit"
                      className="rounded-xl w-32 h-12 my-auto font-semibold"
                      style={{
                        "backgroundColor":"#048ac8",
                      }}
              ><p className="text-white">Get Started</p></button>
            </div>
            <div className="absolute h-8 transform -translate-y-6 radMost text-white text-center pt-1 font-semibold" style={{ backgroundColor:"rgb(175, 0, 175)"}}>Most Popular</div>
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-lg h-52 w-48">
            <div className="mx-auto mt-3">
              <Image
              src={ink4}
              alt=""
              layout="fixed"
            ></Image>
            </div>
            <div className="text-white text-center h-20 pt-2" style={{ backgroundColor:"rgb(154, 0, 154)"}}>
              <h5 className="text-2xl font-semibold">$4.99</h5>
              <p className="font-semibold">100 Pages/month</p>
            </div>
            <div className="m-auto">
              <button
                      type="submit"
                      className="rounded-xl w-32 h-12 my-auto font-semibold border-2 border-blue-500"
                      style={{
                        "backgroundColor":"white",
                      }}
              ><p className="text-blue-500">Get Started</p></button>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-lg h-52 w-48">
            <div className="mx-auto mt-2">
              <Image
              src={ink5}
              alt=""
              layout="fixed"
            ></Image>
            </div>
            <div className="text-white text-center h-20 pt-2" style={{ backgroundColor:"rgb(129, 0, 129)"}}>
              <h5 className="text-2xl font-semibold">$4.99</h5>
              <p className="font-semibold">100 Pages/month</p>
            </div>
            <div className="m-auto">
              <button
                      type="submit"
                      className="rounded-xl w-32 h-12 my-auto font-semibold border-2 border-blue-500"
                      style={{
                        "backgroundColor":"white",
                      }}
              ><p className="text-blue-500">Get Started</p></button>
            </div>
          </div>

        </div>

      </div>
      <br/>
      <br/>
      <div className="text-center">
        <p className="text-lg font-semibold">
          Print more in a month? <span className="font-normal"> Get an additional set of 10-15 pages for just $1.</span>
        </p>

        <p className="text-lg font-semibold">
          Print less in a month? <span className="font-normal"> Rollover up to 3x the number of pages in your plan.</span>
        </p>
      </div>
    </div>

  );
}

export default Plan;