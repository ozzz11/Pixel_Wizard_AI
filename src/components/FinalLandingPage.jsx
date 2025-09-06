import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Download, 
  Zap, 
  Image, 
  Palette, 
  Star, 
  CheckCircle, 
  MessageCircle,
  Sparkles,
  Shield,
  Infinity,
  Cpu,
  MonitorSpeaker,
  Award,
  Users,
  Play,
  Layers,
  Clock,
  Globe2,
  Camera,
  Video,
  Smartphone,
  Youtube,
  Instagram,
  TrendingUp,
  AlertTriangle
} from 'lucide-react'

const FinalLandingPage = () => {
  const [currentLang, setCurrentLang] = useState('ru')

  const translations = {
    ru: {
      title: "Pixel Wizard AI",
      subtitle: "Безграничная генерация AI изображений на вашем рабочем столе",
      description: "Мощное десктопное приложение для создания уникальных изображений без лимитов, подписок и кредитов. Полная свобода творчества в ваших руках!",
      downloadBtn: "Скачать Pixel Wizard AI",
      joinTelegram: "Присоединиться к Telegram",
      features: "Мощные возможности",
      whyChoose: "Почему Pixel Wizard AI?",
      pricing: "Выберите ваш план",
      readyToStart: "Готовы начать творить?",
      readyDesc: "Присоединяйтесь к создателям контента, которые уже используют Pixel Wizard AI для безграничного творчества.",
      forWhom: "Кому это полезно?",
      monthlyPlan: "Месячная подписка",
      lifetimePlan: "Навсегда",
      monthly: "$18/месяц",
      lifetime: "$120 один раз",
      getMonthly: "Выбрать месячный план",
      getLifetime: "Купить навсегда",
      guarantee: "30-дневная гарантия возврата денег",
      warning: "ВАЖНО: Windows SmartScreen может показать предупреждение при установке. Это нормально для новых приложений - просто нажмите 'Подробнее' -> 'Выполнить в любом случае'",
      
      featuresData: [
        {
          title: "Безграничная генерация",
          description: "Никаких кредитов, лимитов или подписок. Создавайте столько изображений, сколько хотите!"
        },
        {
          title: "Профессиональные стили", 
          description: "20+ готовых стилей: Гиперреализм, Кинематограф, Аниме, Киберпанк и другие"
        },
        {
          title: "Массовая генерация",
          description: "Batch Processing: загрузите .txt файл с промптами и создайте сотни изображений автоматически"
        },
        {
          title: "Идеальные размеры",
          description: "16:9 для YouTube, 9:16 для Reels/Shorts, 1:1 для Instagram - всё в один клик"
        },
        {
          title: "Высокое качество",
          description: "Профессиональное качество изображений для любых проектов"
        },
        {
          title: "Многоязычность",
          description: "Интерфейс на русском, английском и турецком языках"
        }
      ],

      forWhomData: [
        {
          title: "YouTube-блогерам",
          description: "Уникальные обложки (thumbnails) и иллюстрации к видео",
          icon: Youtube
        },
        {
          title: "SMM-менеджерам",
          description: "Постоянный поток оригинальных визуалов для соцсетей",
          icon: Instagram
        },
        {
          title: "Авторам блогов",
          description: "Качественные изображения для обогащения статей",
          icon: TrendingUp
        },
        {
          title: "Маркетологам",
          description: "Быстрое тестирование креативов для рекламных кампаний",
          icon: Camera
        }
      ],

      benefits: [
        "Без ежемесячных подписок в lifetime версии",
        "Работает без интернета",
        "20+ профессиональных стилей",
        "Массовая генерация изображений",
        "Идеальные размеры для всех платформ",
        "Многоязычный интерфейс",
        "Постоянные обновления",
        "Полная конфиденциальность"
      ],

      stats: {
        users: "1000+",
        usersLabel: "Довольных пользователей",
        images: "50K+", 
        imagesLabel: "Созданных изображений",
        rating: "4.9/5",
        ratingLabel: "Рейтинг пользователей"
      }
    },
    
    en: {
      title: "Pixel Wizard AI",
      subtitle: "Unlimited AI Image Generation on Your Desktop",
      description: "Powerful desktop application for creating unique images without limits, subscriptions, or credits. Complete creative freedom in your hands!",
      downloadBtn: "Download Pixel Wizard AI",
      joinTelegram: "Join Telegram",
      features: "Powerful Features",
      whyChoose: "Why Pixel Wizard AI?",
      pricing: "Choose Your Plan",
      readyToStart: "Ready to Start Creating?",
      readyDesc: "Join content creators who are already using Pixel Wizard AI for unlimited creativity.",
      forWhom: "Who Is This For?",
      monthlyPlan: "Monthly Subscription",
      lifetimePlan: "Lifetime",
      monthly: "$18/month",
      lifetime: "$120 once",
      getMonthly: "Choose Monthly Plan",
      getLifetime: "Buy Lifetime",
      guarantee: "30-day money-back guarantee",
      warning: "IMPORTANT: Windows SmartScreen may show a warning during installation. This is normal for new applications - just click 'More info' -> 'Run anyway'",

      featuresData: [
        {
          title: "Unlimited Generation",
          description: "No credits, limits, or subscriptions. Create as many images as you want!"
        },
        {
          title: "Professional Styles",
          description: "20+ ready-made styles: Hyperrealism, Cinematic, Anime, Cyberpunk and more"
        },
        {
          title: "Batch Processing",
          description: "Upload a .txt file with prompts and create hundreds of images automatically"
        },
        {
          title: "Perfect Dimensions",
          description: "16:9 for YouTube, 9:16 for Reels/Shorts, 1:1 for Instagram - all in one click"
        },
        {
          title: "High Quality",
          description: "Professional quality images for any project"
        },
        {
          title: "Multi-language",
          description: "Interface in Russian, English and Turkish"
        }
      ],

      forWhomData: [
        {
          title: "YouTube Creators",
          description: "Unique thumbnails and video illustrations",
          icon: Youtube
        },
        {
          title: "SMM Managers",
          description: "Constant flow of original visuals for social media",
          icon: Instagram
        },
        {
          title: "Blog Authors",
          description: "Quality images to enrich articles",
          icon: TrendingUp
        },
        {
          title: "Marketers",
          description: "Quick testing of creatives for advertising campaigns",
          icon: Camera
        }
      ],

      benefits: [
        "No monthly subscriptions in lifetime version",
        "Works without internet",
        "20+ professional styles",
        "Batch image generation",
        "Perfect dimensions for all platforms",
        "Multi-language interface",
        "Regular updates",
        "Complete privacy"
      ],

      stats: {
        users: "1000+",
        usersLabel: "Happy Users",
        images: "50K+",
        imagesLabel: "Images Created",
        rating: "4.9/5",
        ratingLabel: "User Rating"
      }
    },

    tr: {
      title: "Pixel Wizard AI",
      subtitle: "Masaüstünüzde Sınırsız AI Görsel Üretimi", 
      description: "Sınır, abonelik veya kredi olmadan benzersiz görseller oluşturmak için güçlü masaüstü uygulaması. Tam yaratıcı özgürlük ellerinizde!",
      downloadBtn: "Pixel Wizard AI İndir",
      joinTelegram: "Telegram'a Katıl",
      features: "Güçlü Özellikler",
      whyChoose: "Neden Pixel Wizard AI?",
      pricing: "Planınızı Seçin",
      readyToStart: "Yaratmaya Hazır mısınız?",
      readyDesc: "Sınırsız yaratıcılık için Pixel Wizard AI kullanan içerik üreticilerine katılın.",
      forWhom: "Bu Kimin İçin?",
      monthlyPlan: "Aylık Abonelik",
      lifetimePlan: "Ömür Boyu",
      monthly: "$18/ay",
      lifetime: "$120 tek seferlik",
      getMonthly: "Aylık Planı Seç",
      getLifetime: "Ömür Boyu Satın Al",
      guarantee: "30 günlük para iade garantisi",
      warning: "ÖNEMLİ: Windows SmartScreen kurulum sırasında uyarı gösterebilir. Bu yeni uygulamalar için normaldir - sadece 'Daha fazla bilgi' -> 'Yine de çalıştır' tıklayın",

      featuresData: [
        {
          title: "Sınırsız Üretim",
          description: "Kredi, sınır veya abonelik yok. İstediğiniz kadar görsel oluşturun!"
        },
        {
          title: "Profesyonel Stiller",
          description: "20+ hazır stil: Hiperrealizm, Sinematik, Anime, Siber Punk ve daha fazlası"
        },
        {
          title: "Toplu İşleme",
          description: "Prompt'larla .txt dosyası yükleyin ve yüzlerce görseli otomatik oluşturun"
        },
        {
          title: "Mükemmel Boyutlar",
          description: "YouTube için 16:9, Reels/Shorts için 9:16, Instagram için 1:1 - tek tıkla"
        },
        {
          title: "Yüksek Kalite",
          description: "Her proje için profesyonel kalite görseller"
        },
        {
          title: "Çok Dilli",
          description: "Rusça, İngilizce ve Türkçe arayüz"
        }
      ],

      forWhomData: [
        {
          title: "YouTube Yaratıcıları",
          description: "Benzersiz küçük resimler ve video çizimleri",
          icon: Youtube
        },
        {
          title: "SMM Yöneticileri",
          description: "Sosyal medya için sürekli orijinal görseller",
          icon: Instagram
        },
        {
          title: "Blog Yazarları",
          description: "Makaleleri zenginleştirmek için kaliteli görseller",
          icon: TrendingUp
        },
        {
          title: "Pazarlamacılar",
          description: "Reklam kampanyaları için hızlı kreatif testleri",
          icon: Camera
        }
      ],

      benefits: [
        "Ömür boyu sürümde aylık abonelik yok",
        "İnternetsiz çalışır",
        "20+ profesyonel stil",
        "Toplu görsel üretimi",
        "Tüm platformlar için mükemmel boyutlar",
        "Çok dilli arayüz",
        "Düzenli güncellemeler",
        "Tam gizlilik"
      ],

      stats: {
        users: "1000+",
        usersLabel: "Mutlu Kullanıcı",
        images: "50K+",
        imagesLabel: "Oluşturulan Görsel",
        rating: "4.9/5",
        ratingLabel: "Kullanıcı Puanı"
      }
    }
  }

  const t = translations[currentLang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Language Selector */}
      <motion.div 
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {['ru', 'en', 'tr'].map((lang) => (
          <button
            key={lang}
            onClick={() => setCurrentLang(lang)}
            className={`px-3 py-1 rounded-lg font-semibold transition-all duration-300 ${
              currentLang === lang 
                ? 'bg-purple-600 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50"></div>
              <Sparkles className="w-16 h-16 text-purple-400 relative z-10" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            {t.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
            {t.subtitle}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
            {Object.entries(t.stats).filter((_, i) => i % 2 === 0).map(([key, value], index) => {
              const labelKey = key + 'Label'
              return (
                <div key={key} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{value}</div>
                  <div className="text-gray-400 text-sm">{t.stats[labelKey]}</div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              <Download className="w-6 h-6" />
              {t.downloadBtn}
            </motion.button>
            
            <motion.a
              href="https://t.me/pixel_wizard_ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              {t.joinTelegram}
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-gray-300 ml-2">{t.stats.rating} {t.stats.ratingLabel}</span>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t.features}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.featuresData.map((feature, index) => {
            const icons = [Infinity, Palette, Layers, MonitorSpeaker, Award, Globe2]
            const Icon = icons[index % icons.length]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-purple-400 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* For Whom Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t.forWhom}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.forWhomData.map((item, index) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t.pricing}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 relative"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{t.monthlyPlan}</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">{t.monthly}</div>
              
              <ul className="space-y-3 mb-8 text-left">
                {t.benefits.slice(0, 4).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                {t.getMonthly}
              </button>
            </div>
          </motion.div>

          {/* Lifetime Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-500 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ПОПУЛЯРНО
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{t.lifetimePlan}</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">{t.lifetime}</div>
              
              <ul className="space-y-3 mb-8 text-left">
                {t.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                {t.getLifetime}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">{t.guarantee}</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <p className="text-amber-200 text-sm leading-relaxed">
                {t.warning}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-slate-700/50 relative z-10">
        <div className="flex justify-center items-center gap-4 text-gray-400">
          <span>© 2024 Pixel Wizard AI</span>
          <span>•</span>
          <a 
            href="https://t.me/pixel_wizard_ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Telegram
          </a>
        </div>
      </footer>
    </div>
  )
}

export default FinalLandingPage
