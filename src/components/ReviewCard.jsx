import { star } from "../assets/icons"

const ReviewCard = ({imageURL,customername, feedback,rating}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-1">
        <img src={imageURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="  text-center info-text text-sm px-20">
            {feedback} 
        </p>
        <div className="flex gap-2">
            <img src={star}  width={24} height={24} className="object-contain m-0"/> 
            <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
        </div>
        <h3 className="font-bold font-palanquin text-3xl">{customername}</h3>
    </div>
  )
}

export default ReviewCard
