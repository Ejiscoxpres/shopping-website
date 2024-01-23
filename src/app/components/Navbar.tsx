import Link from "next/link"

const Navbar = () => {
  return (
    <div  className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">

         <Link className="navbar__link relative" href="#">
            HOME
         </Link>
         <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            {`COMPUTER`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`LAPTOPS`}
          </Link>
          <Link className="navbar__link relative" href="#">
            TABLET
          </Link>
          <Link className="navbar__link relative" href="#">
            SMARTPHONE
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar