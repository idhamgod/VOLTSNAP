import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactModal from '../components/ContactModal';
import { servicesData } from '../data';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  if (!service) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline">Go back home</Link>
      </div>
    );
  }

  const openContactForm = (tierName) => {
    setSelectedTier(tierName || '');
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
      <Link
        to="/"
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 group transition-colors"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Services
      </Link>

      <div className="text-center mb-16">
        <div className={`w-16 h-16 rounded-2xl ${service.imageColor} mx-auto flex items-center justify-center mb-6`}>
          {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h1>
        <p className="text-xl text-slate-400">{service.tagline}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 group/tiers">
        {service.tiers.map((tier, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <div
              className={`
                relative p-8 rounded-3xl flex flex-col h-full border transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)]
                ${tier.isPopular
                  ? 'bg-[#0E0E10] border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10'
                  : 'bg-[#0E0E10]/50 border-white/5 hover:border-white/10'
                }
                /* Focus Animation */
                group-hover/tiers:opacity-40 group-hover/tiers:scale-95 group-hover/tiers:blur-[2px]
                hover:!opacity-100 hover:!scale-105 hover:!blur-none hover:!z-20 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
              `}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full border border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${tier.isPopular ? 'text-blue-400' : 'text-slate-500'}`}>
                  {tier.name}
                </h3>
                <div className="text-2xl font-bold text-white mb-2 italic font-mokoto-style">{tier.alias}</div>

                <div className="mb-4">
                  {tier.originalPrice && (
                    <span className="text-sm text-slate-500 line-through decoration-slate-500/50 block mb-1">
                      {tier.originalPrice}
                    </span>
                  )}
                  <div className={`font-bold ${tier.isPopular ? 'text-xl' : 'text-base'} ${tier.originalPrice ? 'text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-white'}`}>
                    {tier.price}
                  </div>
                </div>

                <p className="text-sm text-slate-400 h-10">{tier.bestFor}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.isPopular ? 'text-blue-500' : 'text-slate-600'}`} />
                    <span className="text-sm text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openContactForm(tier?.name)}
                className={`
    group relative w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden block text-center cursor-pointer z-50
    ${((typeof tier !== 'undefined' && tier?.isPopular) || (typeof service !== 'undefined' && service?.isPopular))
                    ? 'bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]'
                    : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black hover:border-white'
                  }
  `}>{/* ANIMASI SHINE */}
                {((typeof tier !== 'undefined' && tier?.isPopular) || (typeof service !== 'undefined' && service?.isPopular)) && (
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"
                  />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2 pointer-events-none">
                  Book Consultation
                  <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </ScrollReveal>
        ))
        }
      </div >
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={service.title}
        tierName={selectedTier}
      />
    </div >
  );
};

export default ServiceDetailPage;
