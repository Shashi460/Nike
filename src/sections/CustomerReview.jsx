import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReview = () => {
  return (
    <section className="max-container w-full">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="font-palanquin text-center text-5xl font-bold text-coral-red">
           Customers
        </span> Say?
      </h3>
      <p className="font-palanquin m-auto max-w-lg text-center info-text mt-4">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex-1 justify-evenly items-center max-lg:flex-wrap flex gap-16">
        {reviews.map((review) =>(
              <ReviewCard key={review.customerName}
              imageURL = {review.imgURL}
              customername ={review.customerName}
              feedback = {review.feedback}
              rating ={review.rating}
              />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview
