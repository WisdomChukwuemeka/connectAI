"use client"
import Link from "next/link"
import Image from "next/image"
import { Roboto } from "next/font/google"
import { useState, useEffect, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeContext } from "./context"

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
   const { theme, themeButton } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className="relative">
        <header>
          <nav className="flex justify-between items-center px-8 gap-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/stack/connect.png"
                alt="Logo"
                width={100}
                height={100}
                priority
                className="w-20 h-20 md:w-30 md:h-30 xl:w-50 xl:h-50"
              />
            </motion.div>

            {/* Navbar links */}
            <motion.ul
              className="gap-8 text hidden md:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button onClick={themeButton} className="text-base sm:text-2xl md:text-[1.2rem] xl:text-2xl">
              {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-alt-low-fill"></i>}
          </button>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/"}>Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/about"}>About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="li-hover">
                <Link href={"/contact"}>Contact</Link>
              </motion.li>
            </motion.ul>

            {/* Mobile menu button */}
            <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
              {isOpen ? (
                <i className="h1-text bi bi-list font-bold text-blue-300"></i>
              ) : (
                ""
              )}
            </div>
          </nav>
          <hr className="w-full h-2 border-gray-200 shadow-lg" />
        </header>

        {/* Mobile menu */}
        <section>
          <div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  key="mobile-menu"
                  className="min-h-screen absolute top-0 w-40 text-white left-0 h-screen bg-blue-900 shadow-lg p-4 text-center rounded-r-2xl z-10"
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  exit={{ x: -200 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="relative">
                    <motion.ul
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.2 },
                        },
                      }}
                    >
                      
                      {["Home", "About", "Contact"].map(
                        (item, idx) => (
                          <motion.li
                            key={idx}
                            className="nav-btn mb-4"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              show: { opacity: 1, x: 0 },
                            }}
                          >
                            <Link
                              href={
                                item === "Home"
                                  ? "/"
                                  : `/${item.toLowerCase()}`
                              }
                              onClick={toggleMenu}
                            >
                              {item}
                            </Link>
                          </motion.li>
                        )
                      )}
                      <button onClick={themeButton} className="text-base sm:text-2xl md:text-[1.2rem] xl:text-2xl">
              {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-alt-low-fill"></i>}
              </button>
                    </motion.ul>

                    {/* Close button */}
                    <div className="absolute top-2 right-0">
                      <div
                        className="cursor-pointer md:hidden"
                        onClick={toggleMenu}
                      >
                        {isOpen ? (
                          ""
                        ) : (
                          <i className="bi bi-x-lg text-white bg-black w-fit h-fit rounded-full p-1"></i>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  )
}
