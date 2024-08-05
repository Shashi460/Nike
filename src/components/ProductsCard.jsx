import { star } from "../assets/icons"


const Products = ({imgURL,name, price}) => {
  return (
    <div className="flex flex-1 flex-4 w-full max-sm:w-full flex-col">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."/>
        <div className="flex justify-start flex-col ">
          <div className="mt-8 flex justify-start flex-row gap-2.5">
          <img src={star} alt="rating" width={24} height={24}/>
          <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
        </div>
    </div>
  )
}

export default Products
