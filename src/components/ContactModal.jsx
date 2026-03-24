import { X, Check, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose, serviceName }) => {
  const formId = "xpqyjjpd";

  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setSucceeded(true);
      } else {
        const result = await response.json();
        if (Object.hasOwn(result, 'errors')) {
          setErrorMsg(result.errors.map(error => error.message).join(", "));
        } else {
          setErrorMsg("Oops! Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setErrorMsg("Connection failed. Please check your internet.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    if (succeeded) {
      setTimeout(() => setSucceeded(false), 500);
    }
    setErrorMsg(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-[#0E0E10] border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl"
      >
        {/* Close */}
        <button onClick={handleClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10">
          <X className="w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          {succeeded ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-3">We Got It! ⚡</h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                Thanks for reaching out! We'll review your project and get back to you within 24 hours.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="mt-8 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                Done
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h2 className="text-2xl font-bold text-white mb-1">Tell Us What You Need</h2>
              <p className="text-slate-400 text-sm mb-6">
                {serviceName
                  ? <>Inquiring about: <span className="text-purple-400 font-bold">{serviceName}</span></>
                  : "Describe your project and we'll get back to you with a custom plan."
                }
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100 text-sm">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Hidden fields */}
                <input type="hidden" name="subject" value={`New Inquiry${serviceName ? `: ${serviceName}` : ''}`} />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 p-3 rounded-lg text-white outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 p-3 rounded-lg text-white outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={serviceName || ''}
                    className="w-full bg-black/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 p-3 rounded-lg text-white outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0E0E10]">Not sure yet</option>
                    <option value="Video Editing" className="bg-[#0E0E10]">Video Editing</option>
                    <option value="Logo Design" className="bg-[#0E0E10]">Logo Design</option>
                    <option value="Web Design" className="bg-[#0E0E10]">Web Design</option>
                    <option value="Full Brand Package" className="bg-[#0E0E10]">Full Brand Package</option>
                  </select>
                </div>



                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-black/50 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 p-3 rounded-lg text-white h-28 outline-none resize-none transition-all"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="relative mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
                >
                  {submitting ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>SENDING...</span>
                    </motion.div>
                  ) : (
                    <span className="flex items-center gap-2">SEND REQUEST <Send className="w-4 h-4" /></span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactModal;
