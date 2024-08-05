import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
          <img src={offer} alt="" width={770} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col justify-center items-start">
      
      <h1 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max--w-lg'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          <span className="text-coral-red font-montserrat"> Special 
          </span> Offer
        </span>
      </h1>
      <p className='mt-4 lg:max-w-lg info-text mb-4'>
      Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
      </p >
      <p className="mt-6 lg:max-w-lg info-text">
      Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us in nothing short of exceptional. 
      </p>

      <div className="flex-1">
        <div className="mt-11 flex flex-wrap gap-8">
          <div>
            <Button label='Shop now' iconURL={arrowRight} bgColor="coral-red" borderColor="white" textColor="white-400" /></div>
          <div>
          <Button label='Learn more' bgColor="white" borderColor="slate-gray" textColor="slate-gray"/>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default SpecialOffer
