import Link from 'next/link'

const Faq = () => {
  return (
    <div className="bg-gray-100 w-full h-full py-10 text-gray-700">
      <p className="text-3xl text-center font-bold mb-8 text-gray-900">FAQs</p>
      <div className="w-full md:w-3/5 max-w-screen-lg mx-auto bg-white tracking-wide text-lg">
            <div className="tab w-full overflow-hidden border-t ">
              <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"/>
              <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-multi-one">How does HP Instant Ink Work?</label>
              <div className="tab-content overflow-hidden leading-normal text-base">
                <p className="px-8 pb-6 mx-auto">HP Instant Ink are based on pages, not cartridges. Choose a plan based on the number of pages you would like to print
                  monthly. Your monthly fee allows you to use our subscription cartridges to print your plan pages and includes ink or
                  toner, delivery and recycling.</p>
                <p className="px-8 pb-6 mx-auto">HP Instant Ink are flexible. You can roll over unused pages month to month (the amount of pages you can accumulate varies by plan) or if you print more,
                  you&apos;ll automatically purchase sets of 10-50 pages for $1.00 (pages per set varies by plan). Your plan can be changed at any time to accommodate your printing needs.</p>
                <p className="px-8 pb-6 mx-auto">We send you HP Instant Ink subscription cartridges when you first sign up. Replacement cartridges are sent when your printer tells HP you need more ink or toner, not by the
                  month.</p>
              </div>
            </div>
            <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-multi-two">Where is HP Instant Ink availible?</label>
               <div className="tab-content overflow-hidden leading-normal text-base">
                  <p className="px-8 pb-6 mx-auto">HP Instant Ink is available for residents of the continental United States, Puerto Rico, Alaska, Hawaii, Canada,
                  most European countries, Australia, and New Zealand.</p>
                  <p className="px-8 pb-6 mx-auto">At this time, we are sorry we can&apos;t enroll customers residing in United States territories other than Puerto Rico,
                  or with an APO/FPO/DPO address.</p>
                  <p className="px-8 pb-6 mx-auto">Select the flag icon at the top of this <Link href="#" passHref><a className="text-blue-600 underline hover:opacity-80">hpinstantink.com</a></Link> page to see the complete list of supported countries.</p>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-multi-three">What do I need to enroll?</label>
               <div className="tab-content overflow-hidden text-base leading-normal">
                  <p className="px-8 pb-6 mx-auto">To sign up for HP Instant Ink and make sure the service works as intended, you will need:</p>
                  <ol className="list-decimal px-16 pb-6 mx-auto">
                    <li className="mb-4">An HP printer, eligible for the service. Check if your printer model is eligible during printer setup or by selecting
                      <span className="font-semibold"> Get Started</span> on <Link href="" passHref><a className="text-blue-600 underline hover:opacity-80"> hpinstantink.com</a></Link>

                    </li>
                    <li className="mb-4">To keep your printer powered on and continuously connected to the Internet using Wi-Fi</li>
                    <li className="mb-4">A valid email address and payment method (credit card, debit card, or PayPal)</li>
                    <li className="mb-3">An always up-to-date shipping address</li>
                  </ol>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t transform ">
               <input className="absolute opacity-0" id="tab-multi-four" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-multi-four">Is my printer eligible for HP Instant Ink?</label>
               <div className="tab-content overflow-hidden text-base leading-normal">
                  <p className="px-8 pb-6 mx-auto">Check if your printer model is eligible during printer setup or by selecting <span className="font-semibold"> Get Started</span> on <Link href="" passHref><a className="text-blue-600 underline hover:opacity-80"> hpinstantink.com</a></Link></p>
               </div>
            </div>
      </div>
      <div className="text-center my-10 ">
        <Link onClick="" href="" passHref>
          <a className="flex gap-2 justify-center">
            <a className="text-lg font-semibold">
            Show more
            </a>
            <div className="opacity-50 font-medium transform scale-y-50">&#5167;</div>
          </a>
        </Link>
      </div>

    </div>
  );
}

export default Faq;