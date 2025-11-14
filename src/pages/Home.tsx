import { CheckCircle, Users, Award, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals dedicated to your success',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Top-tier solutions tailored to your specific needs',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick and efficient delivery without compromising quality',
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Services for Your Business Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We deliver exceptional solutions that drive results and exceed expectations. Partner with us to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Services
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProServe?
            </h2>
            <p className="text-xl text-gray-600">
              We combine expertise, dedication, and innovation to deliver outstanding results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business thrive
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
