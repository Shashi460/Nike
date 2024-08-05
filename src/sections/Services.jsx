import { services } from "../constants";
import  ServiceCard  from "../components/ServiceCard";

const Services = () => {
  return (
    <section className='max-container'>
      <div className=" flex  flex-wrap justify-start gap-9 ">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
      </div>
    </section>
  );
};

export default Services;