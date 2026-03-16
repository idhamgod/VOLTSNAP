import { X, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose, serviceName, tierName }) => {
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
          setErrorMsg("Oops! Terjadi kesalahan. Coba lagi nanti.");
        }
      }
    } catch (error) {
      setErrorMsg("Koneksi gagal. Periksa koneksi internetmu.");
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
      {/* Dark Overlay Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></motion.div>

      {/* The Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-[#0E0E10] border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl"
      >

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10"
        >
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
              <h3 className="text-3xl font-bold text-white mb-3">Request Sent!</h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                Thanks for reaching out! We will review your request and get back to you via email shortly.
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
              <h2 className="text-2xl font-bold text-white mb-1">Book Consultation</h2>
              <p className="text-slate-400 text-sm mb-6">
                Inquiring about: <span className="text-blue-400 font-bold">{serviceName}</span>
                {tierName && <span className="text-slate-500"> ({tierName} Plan)</span>}
              </p>

              {/* Tampilkan error jika ada */}
              {errorMsg && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100 text-sm">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Hidden input for Subject Line in your Email */}
                <input type="hidden" name="subject" value={`New Inquiry: ${serviceName} - ${tierName}`} />

                {/* HONEYPOT for Spam Bots (Keep hidden) */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg text-white outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg text-white h-32 outline-none resize-none transition-all"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="relative mt-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
                >
                  {submitting ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>SENDING...</span>
                    </motion.div>
                  ) : (
                    <span>SEND REQUEST</span>
                  )}

                  {/* Subtle shine effect on hover */}
                  {!submitting && (
                    <div className="absolute inset-0 -translate-x-full hover:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
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

