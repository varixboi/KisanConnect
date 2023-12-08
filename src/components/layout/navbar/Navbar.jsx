import Link from 'next/link';
import { Suspense } from 'react';


const { SITE_NAME } = process.env;

export default async function Navbar() {


  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        OW
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
                <li>
                  <Link
                    href="/menu"
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                   OKA
                  </Link>
                </li>
            </ul>

        </div>
        {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div> */}
      </div>
    </nav>
  );
}
