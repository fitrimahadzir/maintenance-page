/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export default function App() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/wallpaper.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Glows with Lime Accent */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bbdb00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full text-center space-y-8 relative z-10"
      >
        {/* GIF Container */}
        <div className="relative group">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white p-2 border border-slate-100"
          >
            <img
              src="https://cdn.dribbble.com/userupload/3898109/file/original-1e15ac48305378a87fc4997b2ad4c0ee.gif"
              alt="Maintenance Animation"
              className="w-full h-auto rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#bbdb00]/20 rounded-full blur-xl opacity-50" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-200 rounded-full blur-xl opacity-50" />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            we'll be back soon
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-500 text-lg"
          >
            We're currently performing some scheduled maintenance to improve your experience.
          </motion.p>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://link.fitrimahadzir.my"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#bbdb00] text-slate-900 rounded-full font-bold transition-all hover:bg-[#a8c600] hover:scale-105 active:scale-95 shadow-lg shadow-slate-200 border-2 border-[#bbdb00]"
          >
            View My Link in Bio
            <ExternalLink size={18} />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-slate-400 text-sm pt-8"
        >
          &copy; {new Date().getFullYear()} Fitri Mahadzir. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}
