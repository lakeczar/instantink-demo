import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar/navbar'
import HeroSection from '../components/hero/hero'
import HowWorks from '../components/works/works'
import Save from '../components/save/save'
import Plan from '../components/plan/plan'

export default function Home() {
  return (
    <>
      <Head>
        <title>HP Instant Ink – Ink and Toner Monthly Subscription | HP Demo Site</title>
        <meta name="description" content="HP&nbsp;Instant&nbsp;Ink are ink and toner monthly subscriptions where you can get ink or toner, plus hassle-free delivery and cartridge recycling, all starting at $0.99/month." data-react-helmet="true"></meta>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="target_country" content="us"/>
        <link href="//assets.instantink.com/landing_page_app/assets/images/favicon.2220ecd0595d22ab05b26170775c4ee3.ico" rel="shortcut icon" type="image/x-icon"/>
        <link href="//assets.instantink.com/landing_page_app/assets/images/favicon.2220ecd0595d22ab05b26170775c4ee3.ico" rel="icon" type="image/x-icon"></link>
      </Head>
      <NavBar/>
      <HeroSection/>
      <HowWorks/>
      <Save/>
      <Plan/>
    </>
  )
}
