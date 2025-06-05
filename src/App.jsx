import React, { useState } from 'react'
import PricingCard from './Components/PricingCard';

const plans = [
  {
    title: "Basic",
    price: { monthly: "₹199", yearly: "₹1999" },
    features: ["1 User", "Basic Support", "1 Project"]
  },
  {
    title: "Pro",
    price: { monthly: "₹499", yearly: "₹4999" },
    features: ["5 Users", "Priority Support", "Unlimited Projects"]
  },
  {
    title: "Premium",
    price: { monthly: "₹999", yearly: "₹9999" },
    features: ["Unlimited Users", "24/7 Support", "Advanced Analytics"]
  },
];


function App() {
  
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
       <h1 className='text-3xl font-bold text-center mb-6'>Our Pricing</h1>
       <div className="flex justify-center mb-8 space-x-6">
  <button
    onClick={() => setIsYearly(false)}
    className={`text-lg font-medium ${
      !isYearly ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
    } transition duration-200`}
  >
    Monthly
  </button>
  <button
    onClick={() => setIsYearly(true)}
    className={`text-lg font-medium ${
      isYearly ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
    } transition duration-200`}
  >
    Yearly
  </button>
</div>

       <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={isYearly ? plan.price.yearly : plan.price.monthly}
            features={plan.features}
          />
        ))}
       </div>
    </div>
  )
}

export default App
