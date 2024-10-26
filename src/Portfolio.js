
import React, { useState, useEffect } from 'react';  // ئێرە گۆڕانکاری کرا
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';


const Portfolio = () => {
  // Replace these with your actual Telegram bot token and chat ID
  const TELEGRAM_BOT_TOKEN = '7941329197:AAEUDVMrY9wLIApyMD8lOfWfujI7DqLbNGs';
  const TELEGRAM_CHAT_ID = '1344320953';

  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({
    title: "Hi, I'm Halwest Abdullah",
    subtitle: "Full Stack Developer | Odoo ERP System Supporter | Tech Enthusiast",
    skills: "Skills",
    contact: "Get In Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
    footer: "All rights reserved."
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: null
  });

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translations = {
          en: {
            title: "Hi, I'm Halwest Abdullah",
            subtitle: "Full Stack Developer | Odoo ERP System Supporter | Tech Enthusiast",
            skills: "Skills",
            contact: "Get In Touch",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Failed to send message. Please try again.",
            footer: "All rights reserved."
          },
          ar: {
            title: "مرحباً ، أنا هلوست عبدالله",
            subtitle: "مطور الواجهة الأمامية والخلفية | داعم نظام أودو | متحمس للتكنولوجيا",
            skills: "المهارات",
            contact: "تواصل معي",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            send: "إرسال الرسالة",
            sending: "جاري الإرسال...",
            success: "تم إرسال الرسالة بنجاح!",
            error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
            footer: "جميع الحقوق محفوظة"
          },
          ku: {
            title: "سڵاو، من هەڵوێست عەبدوڵڵام",
            subtitle: "گەشەپێدەری فوڵ ستاک | پشتیوانی سیستەمی ئۆدۆ | خولیای تەکنەلۆژیا",
            skills: "تواناکان",
            contact: "پەیوەندیم پێوە بکە",
            name: "ناو",
            email: "ئیمەیڵ",
            message: "پەیام",
            send: "ناردنی پەیام",
            sending: "دەنێردرێت...",
            success: "پەیام بە سەرکەوتوویی نێردرا!",
            error: "ناردنی پەیام سەرکەوتوو نەبوو. تکایە دووبارە هەوڵ بدەوە.",
            footer: "هەموو مافەکان پارێزراون"
          }
        };

        setTranslations(translations[language]);
      } catch (error) {
        console.error('Error with translations:', error);
      }
    };

    fetchTranslations();
  }, [language]);

  const skills = [
    { 
      name: "JavaScript", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F7DF1E">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    { 
      name: "React", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
          <path d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z"/>
          <path d="M12 9.32132C14.8289 4.56802 18.9624 2.25 21.0119 3.49455C23.0614 4.73909 22.7273 9.46466 19.8984 14.218C17.0695 18.9713 12.936 21.2893 10.8865 20.0447C8.83702 18.8002 9.17111 14.0746 12 9.32132Z"/>
          <path d="M12 9.32132C9.17111 4.56802 5.03764 2.25 2.98816 3.49455C0.938677 4.73909 1.27277 9.46466 4.10165 14.218C6.93053 18.9713 11.064 21.2893 13.1135 20.0447C15.163 18.8002 14.8289 14.0746 12 9.32132Z"/>
        </svg>
      )
    },
    { 
      name: "Node.js", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#339933">
          <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.023.185.015l1.874 1.12c.074.037.166.037.234 0l7.309-4.215c.074-.036.119-.11.119-.201v-8.428c0-.081-.045-.165-.119-.201l-7.309-4.217c-.074-.037-.166-.037-.234 0l-7.309 4.217c-.074.036-.119.131-.119.201v8.428c0 .081.045.165.119.201l2.001 1.157c1.082.548 1.762-.095 1.762-.735v-8.321c0-.119.095-.212.212-.212h.926c.119 0 .212.095.212.212v8.321c0 1.449-.788 2.287-2.164 2.287-.422 0-.752 0-1.688-.46l-1.926-1.099c-.478-.267-.772-.776-.772-1.321v-8.428c0-.535.294-1.044.772-1.321l7.309-4.217c.467-.267 1.077-.267 1.544 0l7.309 4.217c.478.267.772.776.772 1.321v8.428c0 .535-.294 1.044-.772 1.321l-7.309 4.215c-.234.128-.491.202-.772.202"/>
        </svg>
      )
    },
    { 
      name: "Python", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#366C9C" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z"/>
          <path fill="#FED646" d="M12.086 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.45s-3.24-.052-3.24 3.148v5.292S5.72 24 12.086 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.581.468-1.051 1.046-1.051.579 0 1.046.47 1.046 1.051 0 .582-.467 1.052-1.046 1.052z"/>
        </svg>
      )
    },
    { 
      name: "Flutter", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#02569B">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
        </svg>
      )
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    const messageText = `
🔔 New Portfolio Contact Message:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(messageText)}`,
        { method: 'GET' }
      );

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ sending: false, sent: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ sending: false, sent: false, error: null });
      }, 3000);

    } catch (error) {
      setStatus({
        sending: false,
        sent: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  const LanguageSelector = () => (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      {/* English Button */}
      <button 
        onClick={() => setLanguage('en')}
        className={`group relative px-3 py-1 rounded flex items-center gap-2 overflow-hidden transition-all ${
          language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:text-white'
        }`}
      >
        {/* Cool hover effect background */}
        <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 w-full h-full animate-sparkle" />
        </div>
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 640 480">
            <g fillRule="evenodd">
              <path fill="#012169" d="M0 0h640v480H0z"/>
              <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
              <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
              <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
              <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
            </g>
          </svg>
          <span className="relative z-10">EN</span>
        </div>
      </button>
  
      {/* Arabic Button */}
      <button 
        onClick={() => setLanguage('ar')}
        className={`group relative px-3 py-1 rounded flex items-center gap-2 overflow-hidden transition-all ${
          language === 'ar' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:text-white'
        }`}
      >
        {/* Cool hover effect background */}
        <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 w-full h-full animate-sparkle" />
        </div>
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 640 480">
            <path fill="#CE1126" d="M0 0h640v160H0z"/>
            <path fill="#FFFFFF" d="M0 160h640v160H0z"/>
            <path fill="#000000" d="M0 320h640v160H0z"/>
            <g transform="translate(320, 240)" fill="#007A3D">
              <text 
                fontSize="65"
                fontFamily="Noto Kufi Arabic, Arial"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontWeight="bold"
              >
                الله اكبر
              </text>
            </g>
          </svg>
          <span className="relative z-10">عربي</span>
        </div>
      </button>
  
      {/* Kurdish Button */}
      <button 
        onClick={() => setLanguage('ku')}
        className={`group relative px-3 py-1 rounded flex items-center gap-2 overflow-hidden transition-all ${
          language === 'ku' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:text-white'
        }`}
      >
        {/* Cool hover effect background */}
        <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 w-full h-full animate-sparkle" />
        </div>
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 640 480">
            <path fill="#ED1C24" d="M0 0h640v160H0z"/>
            <path fill="#FFFFFF" d="M0 160h640v160H0z"/>
            <path fill="#4CAF50" d="M0 320h640v160H0z"/>
            <g transform="translate(320 240)">
              <circle fill="#FFD700" r="45"/>
              {Array.from({ length: 21 }).map((_, i) => (
                <path
                  key={i}
                  fill="#FFD700"
                  d={`M ${45 * Math.cos((i * 2 * Math.PI) / 21)} ${45 * Math.sin((i * 2 * Math.PI) / 21)} L ${60 * Math.cos((i * 2 * Math.PI) / 21)} ${60 * Math.sin((i * 2 * Math.PI) / 21)}`}
                />
              ))}
            </g>
          </svg>
          <span className="relative z-10">کوردی</span>
        </div>
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-100 ${(language === 'ar' || language === 'ku') ? 'rtl' : 'ltr'}`}>
      <LanguageSelector />
      
      
      <section className="bg-white">
  <div className="max-w-6xl mx-auto px-4 py-20">
    <div className="text-center">
      {/* Avatar Section - Added Here */}
      <div className="mb-8">
        <img 
          src="/image.jpg" // Replace with your Bitmoji image path
          alt="Halwest Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mx-auto hover:transform hover:scale-110 transition-all duration-200"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {translations.title}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {translations.subtitle}
      </p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/Halwest446" className="text-gray-600 hover:text-gray-800">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/halwest-abdullah-7766512a1/" className="text-gray-600 hover:text-gray-800">
          <Linkedin size={24} />
        </a>
        <a href="mailto:halwestabdwla0@gmail.com" className="text-gray-600 hover:text-gray-800">
          <Mail size={24} />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{translations.skills}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{translations.contact}</h2>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">{translations.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{translations.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{translations.message}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              {status.error && (
                <div className="flex items-center text-red-500 gap-2">
                  <AlertCircle size={16} />
                  <span>{translations.error}</span>
                </div>
              )}

              {status.sent && (
                <div className="flex items-center text-green-500 gap-2">
                  <CheckCircle size={16} />
                  <span>{translations.success}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.sending}
                className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-white transition duration-200 ${
                  status.sending
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {status.sending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    {translations.sending}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {translations.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Halwest Abdullah. {translations.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;