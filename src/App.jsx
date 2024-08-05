import {Hero,
  CustomerReview,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality} from '../src/sections/index';

import Nav from './components/Nav'

const App = () => {
  return (
    <main className="relative ">
    <Nav/>
    <section className="xl:padding-l
    wideLpadding-r padding-b ">
      <Hero/>
    </section>
    <section className="padding ">
      <PopularProducts/>
    </section>
    <section className="padding ">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10 ">
      <Services/>
    </section>
    <section className="padding ">
      <SpecialOffer/>

    </section>
    <section className="padding bg-pale-blue ">
    <CustomerReview/>

    </section>
    <section className="padding-x sm:py-32py-16 w-full m-10">
     <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 text-white bg-black mt-6">
      <Footer/>
    </section>
  </main>
  )
}
export default App
