import Link from 'next/link'

const Footer = () => {
  return (
    <div className="border-2 text-center">
      <div className="flex my-2 justify-center font-semibold">
        <Link href="" passHref><a className="text-blue-500 hover:underline">HP.com</a></Link>
        <div className="border-r-2 mx-3"></div>
        <Link href="" passHref><a className="text-blue-500 hover:underline">Privacy Statement</a></Link>
        <div className="border-r-2 mx-3"></div>
        <Link href="" passHref><a className="text-blue-500 hover:underline">HP Connected Terms of Use</a></Link>
      </div>
      <p className="text-gray-700 opacity-80 text-sm tracking-wide mb-4">
        © 2021 HP Development Company, L.P. DEMO BY LAKECZAR
      </p>
    </div>
  );
}

export default Footer;