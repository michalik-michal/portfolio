import Head from 'next/head';
import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

export default function DietetykaPage() {
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    alert('Dziękujemy! Skontaktujemy się wkrótce.');
    setContactEmail('');
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast.success(`Email skopiowany do schowka`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <Head>
        <title>AI dla Dietetyków - Innowacyjne Rozwiązania</title>
        <meta name="description" content="Innowacyjne rozwiązania AI dla branży dietetycznej" />
      </Head>
      <Toaster position="top-center" />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-green-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Rewolucja w Dietetyce<br/>
              <span className="text-green-200">z Sztuczną Inteligencją</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 text-green-50 max-w-2xl"
            >
              Zwiększ efektywność swojej praktyki i satysfakcję klientów dzięki innowacyjnym rozwiązaniom AI dostosowanym dla dietetyków
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#contact" className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-medium text-lg shadow-lg transition transform hover:-translate-y-1 inline-block">Umów bezpłatną rozmowę</a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f0fdf4" fillOpacity="1" d="M0,128L48,133.3C96,139,192,149,288,176C384,203,480,245,576,234.7C672,224,768,160,864,144C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      {/* Solutions Section */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Nasze Rozwiązania</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Wykorzystaj moc sztucznej inteligencji, aby zrewolucjonizować swoją praktykę dietetyczną</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* AI Chat Bot */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 hover:shadow-2xl transition group"
          >
            <div className="mb-6 flex justify-center">
              <img src="/aiChatbot.png" alt="AI Chat Bot" className="h-48 w-auto object-contain rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">AI Chat Bot 24/7</h3>
            <p className="text-gray-600 mb-6 text-center">Dostępny całodobowo asystent, który odpowiada na pytania klientów, zbiera dane o nawykach żywieniowych i pomaga w podejmowaniu decyzji.</p>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Automatyczne raportowanie wyników</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Integracja z Telegram/WhatsApp</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personalizacja pod Twoją markę</span>
              </li>
            </ul>
          </motion.div>

          {/* Blog Content Generator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 hover:shadow-2xl transition group"
          >
            <div className="mb-6 flex justify-center">
              <img src="/generatorBlogow.png" alt="Generator Treści Blogowych" className="h-48 w-auto object-contain rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Generator Treści Blogowych</h3>
            <p className="text-gray-600 mb-6 text-center">System tworzący profesjonalne artykuły na temat zdrowego odżywiania, diet i suplementacji na podstawie Twoich wytycznych.</p>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SEO-optymalizowane treści</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Materiały edukacyjne dla klientów</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Regularne aktualizacje treści</span>
              </li>
            </ul>
          </motion.div>

          {/* Recipe Assistant */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 hover:shadow-2xl transition group"
          >
            <div className="mb-6 flex justify-center">
              <img src="/asystenPrzepisow.png" alt="Asystent Przepisów" className="h-48 w-auto object-contain rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Asystent Przepisów</h3>
            <p className="text-gray-600 mb-6 text-center">Inteligentny system generujący spersonalizowane przepisy dostosowane do potrzeb i preferencji każdego klienta.</p>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Uwzględnianie alergii i restrykcji</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Modyfikacja istniejących przepisów</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Dostosowanie do celów zdrowotnych</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white" style={{ transform: 'skewY(-3deg)', transformOrigin: 'top left' }}></div>
        <div className="container mx-auto px-6 pt-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Korzyści dla Twojej Praktyki</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Rozwiązania, które realnie wpłyną na Twój biznes i zadowolenie klientów</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Oszczędność Czasu</h3>
              <p className="text-gray-600 text-center">Automatyzacja rutynowych zadań pozwala skupić się na bezpośredniej pracy z klientami.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Większy Zasięg</h3>
              <p className="text-gray-600 text-center">Docieraj do większej liczby klientów i oferuj usługi bez ograniczeń czasowych.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Wzrost Przychodów</h3>
              <p className="text-gray-600 text-center">Zwiększ efektywność działania swojej praktyki i możliwości obsługi większej liczby klientów.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905 0 .905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Satysfakcja Klientów</h3>
              <p className="text-gray-600 text-center">Zapewnij swoim klientom wsparcie nawet poza godzinami pracy i szybszy dostęp do informacji.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-green-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30.2c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zM20 8c-7 0-12.6 5.7-12.6 12.6S13 33.2 20 33.2s12.6-5.7 12.6-12.6S27 8 20 8z" fill="white"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="flex justify-center mb-6 space-x-6">
                <div className="text-center">
                  <img 
                    src="/me.jpeg" 
                    alt="Michał Michalik" 
                    className="h-28 w-28 rounded-full object-cover border-4 border-green-500 shadow-lg mx-auto"
                  />
                  <p className="mt-2 font-medium text-gray-800">Michał</p>
                </div>
                <div className="text-center">
                  <img 
                    src="/jan.jpeg" 
                    alt="Jan" 
                    className="h-28 w-28 rounded-full object-cover border-4 border-green-500 shadow-lg mx-auto"
                  />
                  <p className="mt-2 font-medium text-gray-800">Jan</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Skontaktuj się z nami</h2>              
              <div className="flex flex-col space-y-4">
                <div 
                  className="flex items-center justify-center cursor-pointer hover:text-green-600 transition-colors"
                  onClick={() => handleCopyEmail('michalpiotr.michalik@gmail.com')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xl font-medium text-gray-800">michalpiotr.michalik@gmail.com</p>
                </div>
                <div 
                  className="flex items-center justify-center cursor-pointer hover:text-green-600 transition-colors"
                  onClick={() => handleCopyEmail('wydrojan@gmail.com')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xl font-medium text-gray-800">wydrojan@gmail.com</p>
                </div>
              </div>
              
              <div className="mt-2 text-sm text-gray-500">
                Kliknij email, aby go skopiować
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© Michał Michalik. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
