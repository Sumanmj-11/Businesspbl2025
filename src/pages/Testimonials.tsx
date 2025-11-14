import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'ProServe transformed our digital presence completely. Their team delivered exceptional results on time and within budget. The attention to detail and commitment to our success was outstanding.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'Director of Operations, Global Solutions',
      content: 'Working with ProServe has been a game-changer for our business. Their expertise and professionalism are unmatched. They truly understand our needs and consistently exceed expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager, BrightFuture Co',
      content: 'The results speak for themselves. Our online engagement increased by 300% within three months. The team at ProServe is knowledgeable, responsive, and dedicated to success.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Thompson',
      role: 'Founder, Innovate Labs',
      content: 'ProServe provided exactly what we needed when we needed it. Their strategic approach and technical expertise helped us launch ahead of schedule. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lisa Anderson',
      role: 'VP of Technology, DataCorp',
      content: 'Exceptional service from start to finish. The ProServe team became an extension of our own, understanding our goals and delivering solutions that exceeded our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'James Mitchell',
      role: 'Owner, Mitchell & Associates',
      content: 'I have worked with many service providers over the years, and ProServe stands out as the best. Their professionalism, quality of work, and customer service are truly exceptional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-blue-100">
            See what our clients say about working with us
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Quote className="text-blue-600 mb-4" size={32} />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference professional service makes
          </p>
        </div>
      </section>
    </div>
  );
}
