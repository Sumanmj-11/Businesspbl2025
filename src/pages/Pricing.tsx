import { Check } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      price: '499',
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 3 service requests',
        'Email support',
        'Basic reporting',
        '48-hour response time',
        'Standard quality assurance',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '999',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 service requests',
        'Priority email & phone support',
        'Advanced analytics',
        '24-hour response time',
        'Enhanced quality assurance',
        'Dedicated account manager',
        'Monthly strategy sessions',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited service requests',
        '24/7 priority support',
        'Custom integrations',
        'Real-time response',
        'Premium quality assurance',
        'Dedicated team',
        'Weekly strategy sessions',
        'Custom SLA',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-blue-100">
            Transparent pricing that scales with your business
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-2xl scale-105'
                    : 'bg-white shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {plan.price !== 'Custom' && '$'}
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mb-6 ${
                    plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        size={20}
                        className={`mr-2 flex-shrink-0 ${
                          plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is there a contract or can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Our Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans include custom terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
