import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData } from '../data';

const ServiceDetailPage = ({ onOpenContact }) => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-12 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <div className={`w-20 h-20 rounded-2xl ${service.imageColor} mx-auto flex items-center justify-center mb-8`}>
            {React.cloneElement(service.icon, { className: "w-10 h-10 text-white" })}
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">{service.title}</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">{service.tagline}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description + Features */}
          <div>
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-500/30 transition-colors">
                        <Check className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <span className="text-slate-300 text-base">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal delay={200}>
              <div className="bg-[#0E1012] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Interested in {service.title}?</h3>
                    <p className="text-slate-400 text-base leading-relaxed">
                      Every project is unique. Tell us about yours and we'll create a custom plan and quote tailored to your needs.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 text-sm text-slate-400">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>Custom quote based on your scope</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span>No commitment required</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenContact?.(service.title)}
                    className="group relative w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <Zap className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Get a Custom Quote</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-white mb-8">Other Services</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {servicesData.filter(s => s.id !== serviceId).map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 100}>
              <Link
                to={`/services/${s.id}`}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-[#0E1012] border border-white/5 hover:border-white/15 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${s.imageColor} flex items-center justify-center shrink-0`}>
                  {React.cloneElement(s.icon, { className: "w-7 h-7 text-white" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.tagline}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
