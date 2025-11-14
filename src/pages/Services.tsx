import { Code, Palette, TrendingUp, Shield, Zap, Headphones } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Custom Solutions', 'API Integration', 'Maintenance & Support'],
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Creative design solutions that capture your brand identity and engage your target audience.',
      features: ['Brand Identity', 'UI/UX Design', 'Graphic Design', 'Marketing Materials'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to increase your online visibility and drive conversions.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics & Reporting'],
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Comprehensive security assessments and implementations to protect your digital assets.',
      features: ['Security Audits', 'Risk Assessment', 'Compliance', 'Training'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance your systems speed and efficiency for better user experience and cost savings.',
      features: ['Speed Analysis', 'Code Optimization', 'Infrastructure', 'Monitoring'],
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Reliable ongoing support to keep your systems running smoothly and efficiently.',
      features: ['24/7 Availability', 'Issue Resolution', 'Updates', 'Training'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're happy to discuss your unique requirements and create a tailored package
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
