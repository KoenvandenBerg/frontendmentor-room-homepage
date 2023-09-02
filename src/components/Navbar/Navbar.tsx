import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const navItems = ['home', 'shop', 'about', 'contact'];

const breakpoint = 1200;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > breakpoint) {
        setMenuOpen(false);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    });

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth > breakpoint) {
          setMenuOpen(false);
        }
      });

      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setMenuOpen(false);
        }
      });
    };
  }, []);

  useEffect(() => {
    const currentMenuBgRef = menuBgRef.current;

    window.addEventListener('mousedown', (e) => {
      if (
        menuOpen &&
        currentMenuBgRef != null &&
        e.target == currentMenuBgRef
      ) {
        setMenuOpen(false);
      }
    });

    return window.removeEventListener('mousedown', (e) => {
      if (
        menuOpen &&
        currentMenuBgRef != null &&
        e.target == currentMenuBgRef
      ) {
        setMenuOpen(false);
      }
    });
  }, [menuOpen]);

  return (
    <>
      <nav className="hidden desktop:flex absolute pt-[3rem] px-[4rem] z-10 gap-[3.5rem] items-center text-white font-[600]">
        <svg width="93" height="21" xmlns="http://www.w3.org/2000/svg">
          <path
            className="scale-150"
            d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item} className="relative w-full">
              <a
                href="#"
                className="hover:before:opacity-100 before:opacity-0 before:w-[50%] before:h-[2px] before:bg-white before:absolute before:bottom-[-0.25rem] before:left-[25%] before:transition-opacity before:duration-[0.3s]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="desktop:hidden w-full absolute px-6 pt-12 z-10 flex justify-center items-center">
        <button
          onClick={() => toggleMenu()}
          className="desktop:hidden absolute left-6 bottom-1 z-30"
        >
          {menuOpen ? (
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                fill="#000"
                fillRule="evenodd"
                opacity="0.5"
                className="z-20"
              />
            </svg>
          ) : (
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
                fill="#FFF"
                fillRule="evenodd"
                className="z-20"
              />
            </svg>
          )}
        </button>
        {menuOpen
          ? createPortal(
              <>
                <motion.div
                  ref={menuBgRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'tween', duration: 0.5 }}
                  className="w-full h-screen fixed left-0 top-0 bg-black opacity-50"
                ></motion.div>
                <motion.nav
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ type: 'tween', duration: 0.5 }}
                  className="absolute left-0 top-0 h-[7rem] w-full bg-white flex justify-center items-center"
                >
                  <ul className="flex gap-8 text-black">
                    {navItems.map((item) => (
                      <li key={item} className="relative w-full z-10">
                        <a
                          href="#"
                          onClick={() => toggleMenu()}
                          className="font-[500] hover:before:opacity-100 before:opacity-0 before:w-[50%] before:h-[2px] before:bg-black before:absolute before:bottom-[-0.25rem] before:left-[25%] before:transition-opacity before:duration-[0.3s]"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.nav>
              </>,
              document.body
            )
          : null}

        <svg width="93" height="21" xmlns="http://www.w3.org/2000/svg">
          <path
            className={`${menuOpen ? 'hidden' : 'block'} scale-150`}
            d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
      </nav>
    </>
  );
}
