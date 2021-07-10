//Essential imports
import Image from 'next/image'
import Link from 'next/link'
import useWindowDimensions from '../../utils/hooks/get-window-dimensions'

//Images
import usFlag from '../../public/images/us.png'
import navLogo from '../../public/images/navLogo.png'
const NavBar = () => {
  return (
     <nav className="pb-0 sticky z-50 w-full h-22">
        <div className="px-4 py-4 bg-white h-full shadow-nav">
          <div className="flex h-full max-w-screen-2xl mx-auto">

            <div className="h-auto w-36">
              <Image
                src={navLogo}
                alt="HP Instant Ink"
                layout="responsive"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="flex-grow"></div>
            <div className="flex-grow-0 h-auto w-10 my-auto">
              <Image
                src={usFlag}
                alt="HP Instant Ink"
                layout="responsive"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <Link href="#">
              <a className="mx-6 my-auto center-text font-semibold" style={{
                      "color":"#048ac8",
                    }}>Sign In</a>
            </Link>
            <button
                    type="submit"
                    className="rounded-xl w-40 h-12 my-auto mr-2 font-semibold"
                    style={{
                      "backgroundColor":"#048ac8",
                    }}
            ><p className="text-white">Create Account</p></button>
          </div>
        </div>

    </nav>
  )
}

export default NavBar;