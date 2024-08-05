import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section  className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 className="font text-4xl font-bold leading-[68px] max-sm:max-w-md text-center">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray rounded-full m-'>
          <input type="text" placeholder="subscribe@nike.com" className="input"/>
          <div className='flex max-sm:justify-end items-center max-sm:w-full' >
            <Button label='Sign up' bgColor="coral-red" textColor="white" fullwidth />
          </div>
        </div>
    </section>
  )
} 

export default Subscribe
