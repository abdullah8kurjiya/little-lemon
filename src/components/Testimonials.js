import customer1Image from '../assets/customer1.jpeg';
import customer2Image from '../assets/customer2.jpeg';
import customer3Image from '../assets/customer3.jpeg';
import customer4Image from '../assets/customer4.jpeg';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Jackson',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Antony ',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Ali ',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Ahmed',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid mb">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
