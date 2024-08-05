
const Button = ({label, iconURL,bgColor , borderColor,textColor, fullwidth}) => {
  return (
    <div className="w-full flex  flex-row">
        <button className={` flex flex-row bg-${bgColor} py-4 px-7 gap-2 rounded-full justify-evenly items-center text-${textColor} text-lg border-${borderColor}  border ${fullwidth && 'w-full'}`}>
            {label}
            {iconURL &&
              <img src={iconURL} alt="right icon" className="ml-10 h-5 w-5"/>
            }
        </button>  
    </div>
  )
}

export default Button
