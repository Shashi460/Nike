import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants/index'
import Button from './Button'

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 absolute  w-full  max-container justify-center '>
        <nav className="flex justify-between items-center w-full  ">
            <a href="/">
                <img src={headerLogo} alt="Logo"  width={130}height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
                {navLinks.map((item) => (
                   <li key={item.label} className='transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'>
                    <a href={item.href} className="font-montserrat leading-normal
                    text-sm text-slate-gray ">
                        {item.label}
                    </a>
                   </li>
                ))}
            </ul>
            <div>
                <Button label='Sign In / Sign Up' bgColor="coral-red" textColor="white-400"/>
            </div>
            <div className="hidden max-lg:block cursor-pointer" >
                <img src={hamburger} height={25} width={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
 