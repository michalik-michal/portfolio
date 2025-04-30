import Head from 'next/head';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>O Nas - Rozwiązania AI dla Biznesu</title>
        <meta name="description" content="Tworzymy rozwiązania AI dopasowane do Twojego biznesu" />
      </Head>
      <Toaster position="top-center" />

      {/* Hero Section */}
      <header className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 rounded-bl-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-50 rounded-tr-[80px]"></div>
          <div className="absolute bottom-48 right-48 w-64 h-64 bg-purple-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute top-24 left-24 w-72 h-72 bg-pink-50 rounded-full opacity-50 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter text-gray-900">
              Tworzymy <span className="relative">
                rozwiązania AI
                <svg className="absolute bottom-1 left-0 w-full h-3 text-purple-100" viewBox="0 0 150 8" preserveAspectRatio="none">
                  <path d="M0,0 L150,0 C130,4 110,8 0,8" fill="currentColor"></path>
                </svg>
              </span>
              <br />
              <span className="text-gray-500">dopasowane do Twojego biznesu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mt-8">
              Wykorzystujemy potencjał sztucznej inteligencji, aby wspierać 
              rozwój Twojej firmy i znacząco zwiększać jej konkurencyjność.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a href="#team" className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 text-lg font-medium transition duration-300 hover:shadow-xl transform hover:-translate-y-1 rounded-full">
                Poznaj nasz zespół
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Co robimy?</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto mb-12 rounded-full"></div>
            </motion.div>
            
            {/* Voice Agents Featured Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 flex items-center">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-6">Inteligentni Asystenci Głosowi</h3>
                      <p className="text-lg text-purple-100 mb-8">
                        Tworzymy zaawansowanych asystentów głosowych napędzanych przez AI, którzy obsługują klientów, planują spotkania i automatyzują komunikację dla Twojego biznesu.
                      </p>
                      <ul className="space-y-4 text-purple-50">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Obsługa klienta 24/7
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Planowanie spotkań i rezerwacji
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Automatyzacja komunikacji z klientami
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-600 p-8 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-40 h-40 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 2.308a.75.75 0 00-.386-.884l-.8-.4a9.75 9.75 0 00-8.856 0l-.8.4a.75.75 0 00-.386.884l.244.59c.051.124.09.252.115.384.155.76.074 1.459.497 2.03a1.55 1.55 0 001.267.586h6.982a1.55 1.55 0 001.267-.586c.423-.571.342-1.27.497-2.03.026-.132.064-.26.115-.384l.244-.59zM12 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM7.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.5 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16.5 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 hover:border-purple-100 rounded-2xl hover:shadow-lg transition duration-300 bg-gradient-to-b from-white to-gray-50"
              >
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Innowacyjne Rozwiązania</h3>
                <p className="text-gray-600">
                  Budujemy zaawansowane systemy AI, które są dokładnie dopasowane do unikalnych potrzeb Twojego biznesu.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 hover:border-pink-100 rounded-2xl hover:shadow-lg transition duration-300 bg-gradient-to-b from-white to-gray-50"
              >
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Optymalizacja Procesów</h3>
                <p className="text-gray-600">
                  Automatyzujemy i usprawniamy procesy biznesowe, umożliwiając Twojej firmie działanie z większą wydajnością.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 hover:border-purple-100 rounded-2xl hover:shadow-lg transition duration-300 bg-gradient-to-b from-white to-gray-50"
              >
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Analiza Danych</h3>
                <p className="text-gray-600">
                  Dostarczamy cenne analizy i wnioski, które pomagają podejmować lepsze decyzje biznesowe i uzyskać przewagę rynkową.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50 rounded-t-[100px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Nasz zespół</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto mb-8 rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8 overflow-hidden rounded-full w-56 h-56 mx-auto border-8 border-white shadow-xl">
                <img 
                  src="/me.jpeg" 
                  alt="Michał Michalik" 
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Michał Michalik</h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-4">
                Michał łączy swoją pasję do technologii z bogatym doświadczeniem sportowym. Jako były członek Kadry Narodowej w narciarstwie alpejskim i wielokrotny mistrz kraju, przeniósł swoją determinację i dyscyplinę ze sportu do świata AI. Posiada wieloletnie doświadczenie w programowaniu oraz tworzeniu innowacyjnych rozwiązań wykorzystujących sztuczną inteligencję, stale śledząc i wdrażając najnowsze technologie.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-4 cursor-pointer">
                <Link href="https://www.linkedin.com/in/michal-michalik-59b743229/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer" aria-label="LinkedIn">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
              <p className="inline-block text-gray-600 hover:text-purple-600 cursor-pointer transition-colors border-b border-gray-300 hover:border-purple-600"
                onClick={() => {
                  navigator.clipboard.writeText('michalpiotr.michalik@gmail.com');
                  toast.success('Email skopiowany do schowka');
                }}
              >
                michalpiotr.michalik@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8 overflow-hidden rounded-full w-56 h-56 mx-auto border-8 border-white shadow-xl">
                <img 
                  src="/jan.jpeg" 
                  alt="Jan Wydro" 
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Jan Wydro</h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-4">
              Jan jest profesjonalistą związanym z funduszem private equity, posiadającym międzynarodowe doświadczenie w sektorze finansów. Na co dzień łączy intensywną pracę analityczną z pasją do sportu, a w wolnych chwilach z zainteresowaniem śledzi rozwój nowoczesnych technologii, w tym zastosowania sztucznej inteligencji w biznesie.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-4 cursor-pointer">
                <Link href="https://www.linkedin.com/in/jan-wydro-230436131/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 cursor-pointer text-white hover:shadow-lg transition transform hover:-translate-y-1" aria-label="LinkedIn">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
              <p className="inline-block text-gray-600 hover:text-pink-600 cursor-pointer transition-colors border-b border-gray-300 hover:border-pink-600"
                onClick={() => {
                  navigator.clipboard.writeText('wydrojan@gmail.com');
                  toast.success('Email skopiowany do schowka');
                }}
              >
                wydrojan@gmail.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© 2025 Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
