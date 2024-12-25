import React, { useEffect, useState } from 'react';

const ClientRemarks = () => {
  const testimonials = [
    {
      quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      quote: "Working with this Marketing Agency has been an exceptional experience. Their dedication to understanding our needs and delivering results that exceeded our expectations has been truly remarkable.",
      name: "Sarah Parker",
      title: "CEO of CreativeMind Studio",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      quote: "The team went above and beyond to ensure our website was top-notch. From innovative strategies to impeccable execution, they have become an invaluable partner in our success.",
      name: "John Doe",
      title: "Founder of BrightPath Ventures",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      quote: "Their attention to detail and creative approach has truly elevated our brand. We've seen remarkable growth since collaborating with their team!",
      name: "Emma Williams",
      title: "Marketing Manager at Innovate Solutions",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      quote: "Outstanding service, fast delivery, and incredible results. Highly recommend to anyone looking to revamp their website!",
      name: "James Brown",
      title: "CEO at TechLeap",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change the quote every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [testimonials.length]);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Client <span className="text-blue-800 font-extrabold">Satisfaction</span>
        </h2>
      </div>

      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform ease-linear duration-1000"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
            >
              <div className="bg-blue-900 p-6 rounded-lg shadow-lg h-full flex flex-col justify-center items-center text-white">
                {/* Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />

                {/* Quote */}
                <p className="text-lg italic text-gray-300 font-bold mb-4 text-center">
                  "{testimonial.quote}"
                </p>

                {/* Name and Title */}
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .slide-container {
            display: flex;
            transition: transform 1s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default ClientRemarks;
