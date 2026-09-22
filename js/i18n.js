/**
 * 2ez4ru1z Portfolio - Internationalization (i18n) Engine
 * Supported languages: RU (Russian), UA (Ukrainian), EN (English)
 */

window.PortfolioI18n = (function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_lang';
  const DEFAULT_LANG = 'ru';
  const SUPPORTED_LANGS = ['ru', 'ua', 'en'];

  const translations = {
    // -------------------------------------------------------------
    // RUSSIAN (RU)
    // -------------------------------------------------------------
    ru: {
      pageTitle: '2ez4ru1z — Fullstack & Frontend Engineer | Portfolio',
      metaDesc: 'Разработка высоконагруженных веб-сервисов, e-commerce платформ, Telegram-ботов и интерактивных интерфейсов с высокой конверсией и безупречной скоростью.',

      navProjects: 'Проекты',
      navSkills: 'Стек',
      navContact: 'Контакты',
      navCta: 'Telegram',

      heroStatus: 'Открыт для новых проектов и амбициозных задач',
      heroTitlePrefix: 'Fullstack &',
      heroTitleGradient: 'Frontend Engineer',
      heroDesc: 'Проектирую и создаю высокопроизводительные веб-приложения, e-commerce сервисы и Telegram-экосистемы. Фокусируюсь на чистой архитектуре, конверсии и премиальном UX с быстрой загрузкой.',
      heroBtnProjects: 'Смотреть проекты',
      heroBtnTelegram: 'Написать в Telegram',

      bentoSystemProfile: '// СИСТЕМНЫЙ ПРОФИЛЬ',
      bentoTitle: 'Инженерная экспертиза',
      bentoDesc: 'Комплексный цикл: от проектирования структуры базы данных и платежных шлюзов до адаптивного интерфейса и поисковой оптимизации.',
      statYears: 'Лет опыта',
      statUptime: 'Production Uptime',
      statLcp: 'LCP Скорость',
      statStack: 'App Router 16',

      sectionProjectsTag: '// ИЗБРАННЫЕ КЕЙСЫ',
      sectionProjectsTitle: 'Проекты, созданные для результата',
      sectionProjectsSubtitle: 'Реальные работающие решения с продуманной архитектурой и вниманием к деталям.',

      flagshipBadge: 'Флагманский проект • 2026',
      flagshipRole: 'Lead Fullstack Developer & Architect • foodbalance.com.ua',
      flagshipDesc: 'Полнофункциональный веб-сервис доставки сбалансированного питания в Запорожье. Включает многодневные абонементы, интерактивный конструктор рациона с расчетом КБЖУ, автоматизированный чекаут со смешанной оплатой и синхронизацию с кухней.',
      flagshipFeature1: '<strong>Умный чекаут:</strong> списание дней абонемента + динамическая доплата за дополнительные рационы и спорт-меню.',
      flagshipFeature2: '<strong>Monobank Plata API:</strong> безопасная онлайн-оплата, мгновенная обработка вебхуков, защита от дублирования транзакций.',
      flagshipFeature3: '<strong>Google Sheets & Telegram:</strong> автоматическая передача заказов в таблицы кухни и бот-уведомления менеджерам в реальном времени.',
      flagshipBtnSite: 'Открыть сайт',
      flagshipBtnDetails: 'Детали кейса',

      mockupStatusLabel: 'Статус сервиса',
      mockupStatusLive: 'Production Live',
      mockupAutomationLabel: 'Автоматизация процессов',
      mockupAutomationVal: '100% Zero-Touch',
      mockupDiagramTitle: '// СТЕК СИНХРОНИЗАЦИИ ДАННЫХ',

      p2Category: '// GAMEDEV & WEBRTC P2P',
      p2Desc: 'Пошаговая тактическая 2D-стратегия с бесконечным циклом уровней, визуализацией зон хода/атаки, умным Utility AI и мультиплеером по ссылке через WebRTC DataChannels без стороннего бэкенда.',
      btnPlayOnline: 'Играть онлайн',
      btnViewCase: 'Смотреть кейс',

      p3Category: '// GAMEDEV & CANVAS 2D',
      p3Desc: 'Динамичная ретровейв 2D-гонка на чистом HTML5 Canvas и Web Audio API. Неоновая шоссейная физика, ускорение, комбо-множители очков, адаптивный сенсорный D-pad для смартфонов и сохранение рекордов.',
      btnPlayBrowser: 'Играть в браузере',

      p4Category: '// AUDIO & VIDEO ENGINE',
      p4Desc: 'Многофункциональный медиа-комбайн: плеер локального видео/аудио, динамический частотный спектр-визуализатор на Web Audio API, глобальные радиостанции реального времени (Synthwave, Lo-Fi, Club) и кастомные элементы управления.',
      btnLaunchPlayer: 'Запустить плеер',

      p5Category: '// INTERACTIVE BOOKING & E-COMMERCE',
      p5Desc: 'Интерактивный сервис онлайн-бронирования билетов в премиальный кинотеатр: динамическая SVG-схема зала (Standard / VIP ложи), расписание сеансов, заказ напитков/попкорна в чекауте и виртуальный билет с QR-кодом.',
      btnBookTicket: 'Забронировать билет',

      p6Category: '// E-COMMERCE & RETAIL',
      p6Desc: 'Многофункциональный интернет-магазин по продаже премиального кофе, аксессуаров и сувениров. Каталог с живой фильтрацией, корзина и структурированная база данных.',
      p6FooterNote: 'Дипломный проект',

      p7Category: '// БИЗНЕС-АВТОМАТИЗАЦИЯ',
      p7Desc: 'Разработка надежных ботов для мессенджеров: прием и маршрутизация заказов, прием платежей, интеграция с CRM-системами и мгновенные пуш-оповещения персонала.',
      p7FooterNote: 'Интеграции & CRM',

      p8Category: '// FRONTEND & SPEED',
      p8Title: 'High-Performance Web & Interactive UI',
      p8Desc: 'Разработка представительских сайтов и посадочных страниц с безупречным dark mode, плавными 60fps микровзаимодействиями, поддержкой prefers-reduced-motion и скоростью загрузки 95+ по Google PageSpeed.',
      btnLearnMore: 'Узнать подробнее',

      sectionSkillsTag: '// ТЕХНОЛОГИЧЕСКИЙ СТЕК',
      sectionSkillsTitle: 'Инструменты и экспертиза',
      sectionSkillsSubtitle: 'Использую только современные и проверенные решения, дающие стабильность и масштабируемость.',

      skill1Title: 'Клиентский уровень',
      skill1Desc: 'Создание отзывчивых, доступных и визуально выразительных интерфейсов.',
      skill2Title: 'Сервер и интеграции',
      skill2Desc: 'Надежные API, работа с базами данных, вебхуками и финансовыми шлюзами.',
      skill3Title: 'Инженерия и качество',
      skill3Desc: 'Фокус на скорости, защищенности, поддержке чистого кода и SEO.',

      ctaStatus: 'Готов к диалогу',
      ctaTitle: 'Давайте обсудим ваш проект',
      ctaDesc: 'Нужен современный веб-сервис, интернет-магазин, надежный Telegram-бот или редизайн интерфейса? Напишите мне в Telegram — отвечу быстро и по существу.',
      ctaTelegram: 'Написать в Telegram (@ru1zy)',
      ctaCopy: 'Скопировать контакт',
      ctaCopied: '✓ Скопировано в буфер: @ru1zy',
      ctaGithub: 'GitHub',

      footerRights: 'Все права защищены.',
      footerTagline: '— Fullstack & Frontend Engineering',

      modalCloseAria: 'Закрыть модальное окно',
      modalRepoGithub: 'Репозиторий на GitHub'
    },

    // -------------------------------------------------------------
    // UKRAINIAN (UA)
    // -------------------------------------------------------------
    ua: {
      pageTitle: '2ez4ru1z — Fullstack & Frontend Engineer | Портфоліо',
      metaDesc: 'Розробка високонавантажених веб-сервісів, e-commerce платформ, Telegram-ботів та інтерактивних інтерфейсів із високою конверсією та бездоганною швидкістю.',

      navProjects: 'Проєкти',
      navSkills: 'Стек',
      navContact: 'Контакти',
      navCta: 'Telegram',

      heroStatus: 'Відкритий для нових проєктів та амбітних задач',
      heroTitlePrefix: 'Fullstack &',
      heroTitleGradient: 'Frontend Engineer',
      heroDesc: 'Проєктую та розробляю високопродуктивні веб-додатки, e-commerce платформи та Telegram-екосистеми. Фокусуюся на чистій архітектурі, конверсії та преміальному UX із миттєвим завантаженням.',
      heroBtnProjects: 'Дивитися проєкти',
      heroBtnTelegram: 'Написати в Telegram',

      bentoSystemProfile: '// СИСТЕМНИЙ ПРОФІЛЬ',
      bentoTitle: 'Інженерна експертиза',
      bentoDesc: 'Комплексний цикл: від проєктування структури бази даних та платіжних шлюзів до адаптивного інтерфейсу та пошукової оптимізації.',
      statYears: 'Років досвіду',
      statUptime: 'Production Uptime',
      statLcp: 'Швидкість LCP',
      statStack: 'App Router 16',

      sectionProjectsTag: '// ОБРАНІ КЕЙСИ',
      sectionProjectsTitle: 'Проєкти, створені для результату',
      sectionProjectsSubtitle: 'Реальні працюючі рішення з продуманою архітектурою та бездоганною увагою до деталей.',

      flagshipBadge: 'Флагманський проєкт • 2026',
      flagshipRole: 'Lead Fullstack Developer & Architect • foodbalance.com.ua',
      flagshipDesc: 'Повнофункціональний веб-сервіс доставки збалансованого харчування у Запоріжжі. Включає багатоденні абонементи, інтерактивний конструктор раціону з розрахунком КБЖУ, автоматизований чекаут зі змішаною оплатою та синхронізацію з кухнею.',
      flagshipFeature1: '<strong>Розумний чекаут:</strong> списання днів абонемента + динамічна доплата за додаткові раціони та спорт-меню.',
      flagshipFeature2: '<strong>Monobank Plata API:</strong> безпечна онлайн-оплата, миттєва обробка вебхуків, захист від дублювання транзакцій.',
      flagshipFeature3: '<strong>Google Sheets & Telegram:</strong> автоматична передача замовлень у таблиці кухні та бот-сповіщення менеджерам у реальному часі.',
      flagshipBtnSite: 'Відкрити сайт',
      flagshipBtnDetails: 'Деталі кейсу',

      mockupStatusLabel: 'Статус сервісу',
      mockupStatusLive: 'Production Live',
      mockupAutomationLabel: 'Автоматизація процесів',
      mockupAutomationVal: '100% Zero-Touch',
      mockupDiagramTitle: '// СТЕК СИНХРОНІЗАЦІЇ ДАНИХ',

      p2Category: '// GAMEDEV & WEBRTC P2P',
      p2Desc: 'Покрокова тактична 2D-стратегія з нескінченним циклом рівнів, візуалізацією зон ходу/атаки, розумним Utility AI та мультиплеєром за посиланням через WebRTC DataChannels без стороннього бекенду.',
      btnPlayOnline: 'Грати онлайн',
      btnViewCase: 'Дивитися кейс',

      p3Category: '// GAMEDEV & CANVAS 2D',
      p3Desc: 'Динамічна ретровейв 2D-гонка на чистому HTML5 Canvas та Web Audio API. Неонова шосейна фізика, прискорення, комбо-множники очок, адаптивний сенсорний D-pad для смартфонів та збереження рекордів.',
      btnPlayBrowser: 'Грати в браузері',

      p4Category: '// AUDIO & VIDEO ENGINE',
      p4Desc: 'Багатофункціональний медіа-комбайн: плеєр локального відео/аудіо, динамічний частотний спектр-візуалізатор на Web Audio API, глобальні радіостанції реального часу (Synthwave, Lo-Fi, Club) та кастомні елементи керування.',
      btnLaunchPlayer: 'Запустити плеєр',

      p5Category: '// INTERACTIVE BOOKING & E-COMMERCE',
      p5Desc: 'Інтерактивний сервіс онлайн-бронювання квитків у преміальний кінотеатр: динамічна SVG-схема зали (Standard / VIP ложі), розклад сеансів, замовлення напоїв/попкорну в чекауті та віртуальний квиток із QR-кодом.',
      btnBookTicket: 'Забронювати квиток',

      p6Category: '// E-COMMERCE & RETAIL',
      p6Desc: 'Багатофункціональний інтернет-магазин із продажу преміальної кави, аксесуарів та сувенірів. Каталог із живими фільтрами, кошик і структурована база даних.',
      p6FooterNote: 'Дипломний проєкт',

      p7Category: '// БІЗНЕС-АВТОМАТИЗАЦІЯ',
      p7Desc: 'Розробка надійних ботів для месенджерів: прийом та маршрутизація замовлень, прийом платежів, інтеграція з CRM-системами та миттєві пуш-сповіщення персоналу.',
      p7FooterNote: 'Інтеграції & CRM',

      p8Category: '// FRONTEND & SPEED',
      p8Title: 'High-Performance Web & Interactive UI',
      p8Desc: 'Розробка представницьких сайтів і посадкових сторінок із бездоганним dark mode, плавними 60fps мікровзаємодіями, підтримкою prefers-reduced-motion та швидкістю завантаження 95+ за Google PageSpeed.',
      btnLearnMore: 'Дізнатися більше',

      sectionSkillsTag: '// ТЕХНОЛОГІЧНИЙ СТЕК',
      sectionSkillsTitle: 'Інструменти та експертиза',
      sectionSkillsSubtitle: 'Використовую тільки сучасні та перевірені рішення, що гарантують стабільність і масштабованість.',

      skill1Title: 'Клієнтський рівень',
      skill1Desc: 'Створення чуйних, доступних та візуально виразних інтерфейсів.',
      skill2Title: 'Сервер та інтеграції',
      skill2Desc: 'Надійні API, робота з базами даних, вебхуками та фінансовими шлюзами.',
      skill3Title: 'Інженерія та якість',
      skill3Desc: 'Фокус на швидкості, захищеності, підтримці чистого коду та SEO.',

      ctaStatus: 'Готовий до діалогу',
      ctaTitle: 'Обговорімо ваш проєкт',
      ctaDesc: 'Потрібен сучасний веб-сервіс, інтернет-магазин, надійний Telegram-бот або редизайн інтерфейсу? Напишіть мені в Telegram — відповім швидко та по суті.',
      ctaTelegram: 'Написати в Telegram (@ru1zy)',
      ctaCopy: 'Скопіювати контакт',
      ctaCopied: '✓ Скопійовано в буфер: @ru1zy',
      ctaGithub: 'GitHub',

      footerRights: 'Всі права захищені.',
      footerTagline: '— Fullstack & Frontend Engineering',

      modalCloseAria: 'Закрити модальне вікно',
      modalRepoGithub: 'Репозиторій на GitHub'
    },

    // -------------------------------------------------------------
    // ENGLISH (EN)
    // -------------------------------------------------------------
    en: {
      pageTitle: '2ez4ru1z — Fullstack & Frontend Engineer | Portfolio',
      metaDesc: 'Building high-performance web applications, e-commerce platforms, Telegram bots, and high-converting interactive user interfaces with blazing fast speed.',

      navProjects: 'Projects',
      navSkills: 'Stack',
      navContact: 'Contact',
      navCta: 'Telegram',

      heroStatus: 'Available for new projects & ambitious challenges',
      heroTitlePrefix: 'Fullstack &',
      heroTitleGradient: 'Frontend Engineer',
      heroDesc: 'Architecting and building high-performance web applications, e-commerce platforms, and Telegram ecosystems. Focused on clean architecture, high conversion rates, and premium, fast-loading UX.',
      heroBtnProjects: 'View Projects',
      heroBtnTelegram: 'Contact via Telegram',

      bentoSystemProfile: '// SYSTEM PROFILE',
      bentoTitle: 'Engineering Expertise',
      bentoDesc: 'End-to-end delivery: from database architecture and payment gateways to responsive interfaces and SEO performance.',
      statYears: 'Years Experience',
      statUptime: 'Production Uptime',
      statLcp: 'LCP Speed',
      statStack: 'App Router 16',

      sectionProjectsTag: '// FEATURED WORKS',
      sectionProjectsTitle: 'Projects Built for Impact',
      sectionProjectsSubtitle: 'Real-world production solutions with robust architecture and relentless attention to detail.',

      flagshipBadge: 'Flagship Project • 2026',
      flagshipRole: 'Lead Fullstack Developer & Architect • foodbalance.com.ua',
      flagshipDesc: 'A comprehensive balanced meal delivery web service in Zaporizhzhia. Features multi-day meal passes, interactive macro/calorie meal builder, automated checkout with split payments, and real-time kitchen dispatch.',
      flagshipFeature1: '<strong>Smart Checkout:</strong> meal-pass day deduction + dynamic top-up calculation for extra portions and sport menus.',
      flagshipFeature2: '<strong>Monobank Plata API:</strong> secure online acquiring, instant webhook processing, idempotent transaction safety.',
      flagshipFeature3: '<strong>Google Sheets & Telegram:</strong> real-time order dispatch to kitchen operational spreadsheets and manager alert bots.',
      flagshipBtnSite: 'Visit Website',
      flagshipBtnDetails: 'Case Study',

      mockupStatusLabel: 'Service Status',
      mockupStatusLive: 'Production Live',
      mockupAutomationLabel: 'Process Automation',
      mockupAutomationVal: '100% Zero-Touch',
      mockupDiagramTitle: '// DATA PIPELINE ARCHITECTURE',

      p2Category: '// GAMEDEV & WEBRTC P2P',
      p2Desc: 'Turn-based tactical 2D strategy featuring endless procedural wave cycles, movement/attack range visualization, smart Utility AI, and zero-server peer-to-peer multiplayer via WebRTC DataChannels.',
      btnPlayOnline: 'Play Online',
      btnViewCase: 'Case Study',

      p3Category: '// GAMEDEV & CANVAS 2D',
      p3Desc: 'High-speed synthwave 2D highway racer on pure HTML5 Canvas and Web Audio API. Neon physics, boost lanes, near-miss score multipliers, responsive touch D-pad, and persistent local highscores.',
      btnPlayBrowser: 'Play in Browser',

      p4Category: '// AUDIO & VIDEO ENGINE',
      p4Desc: 'Versatile media hub: high-definition local video/audio player, dynamic real-time FFT frequency visualizer powered by Web Audio API, worldwide streaming radio (Synthwave, Lo-Fi, Club), and bespoke controls.',
      btnLaunchPlayer: 'Launch Player',

      p5Category: '// INTERACTIVE BOOKING & E-COMMERCE',
      p5Desc: 'Interactive premium cinema booking platform: dynamic SVG auditorium layout (Standard & VIP suites), showtime scheduling, integrated snack checkout, and virtual QR ticket pass generation.',
      btnBookTicket: 'Book Seats',

      p6Category: '// E-COMMERCE & RETAIL',
      p6Desc: 'Full-featured online store for specialty coffee, brewing gear, and merchandise. Instant filtering catalog, responsive shopping cart, and structured database schema.',
      p6FooterNote: 'Graduation Thesis',

      p7Category: '// BUSINESS AUTOMATION',
      p7Desc: 'Enterprise bot engineering: automated order routing, in-chat billing, CRM integrations, and immediate operational push notifications for business teams.',
      p7FooterNote: 'Integrations & CRM',

      p8Category: '// FRONTEND & SPEED',
      p8Title: 'High-Performance Web & Interactive UI',
      p8Desc: 'Flagship landing pages and web apps with flawless dark mode, silky 60fps micro-interactions, full prefers-reduced-motion support, and Google PageSpeed scores of 95+.',
      btnLearnMore: 'Learn More',

      sectionSkillsTag: '// TECH STACK',
      sectionSkillsTitle: 'Tools & Engineering Stack',
      sectionSkillsSubtitle: 'Employing strictly modern, battle-tested technologies that ensure rock-solid stability and effortless scalability.',

      skill1Title: 'Client Layer',
      skill1Desc: 'Crafting responsive, accessible, and visually captivating digital experiences.',
      skill2Title: 'Backend & APIs',
      skill2Desc: 'Resilient APIs, relational database design, cryptographically signed webhooks, and payment rails.',
      skill3Title: 'Architecture & Quality',
      skill3Desc: 'Unyielding commitment to speed, security, clean maintainable code, and SEO dominance.',

      ctaStatus: 'Open for Discussion',
      ctaTitle: "Let's Build Something Great",
      ctaDesc: 'Looking for a state-of-the-art web service, e-commerce platform, robust Telegram bot, or complete interface overhaul? Message me on Telegram — straightforward and to the point.',
      ctaTelegram: 'Message on Telegram (@ru1zy)',
      ctaCopy: 'Copy Contact Handle',
      ctaCopied: '✓ Copied to clipboard: @ru1zy',
      ctaGithub: 'GitHub',

      footerRights: 'All rights reserved.',
      footerTagline: '— Fullstack & Frontend Engineering',

      modalCloseAria: 'Close modal dialog',
      modalRepoGithub: 'Repository on GitHub'
    }
  };

  // -------------------------------------------------------------
  // DETAILED CASE STUDIES (MODALS) PER LANGUAGE
  // -------------------------------------------------------------
  const modalStudies = {
    ru: {
      foodbalance: {
        badge: 'Флагманский проект • 2026',
        title: 'FoodBalance — Сервис доставки здорового питания и абонементов',
        subtitle: 'Next.js 16 (App Router) • TypeScript • Monobank Plata API • Telegram Webhooks • Google Sheets API',
        url: 'https://foodbalance.com.ua',
        urlLabel: 'Перейти на foodbalance.com.ua',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 О проекте и бизнес-задаче</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                FoodBalance — полноценный сервис доставки рационов правильного питания в г. Запорожье. Требовалось разработать высококонверсионную веб-платформу с гибким выбором рационов, системой многодневных абонементов, автоматическим биллингом и интеграцией в операционную деятельность кухни без рутинного ручного труда.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Ключевые инженерные решения</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Умный чекаут со смешанной оплатой:</strong> Реализована логика учета доступных дней абонемента с автоматическим расчетом доплаты за дополнительные дни или спортивные рационы.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Интеграция с Monobank Plata:</strong> Безопасный эквайринг, обработка криптографических вебхуков со статусами платежей, защита от дублирования заказов.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Двусторонняя синхронизация с Google Sheets:</strong> Заказы мгновенно записываются в операционные таблицы кухни по датам и маршрутам доставки.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Telegram Bot нотификации:</strong> Мгновенные интерактивные оповещения менеджеров о каждом новом или оплаченном заказе с полным составом корзины.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Интерактивный конструктор рациона:</strong> Динамический подсчет калорий, белков, жиров и углеводов (КБЖУ) в зависимости от выбранной цели пользователя.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологий</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, Monobank API, Telegram Bot Webhook, Zustand, Google Drive & Sheets API.</div>
            </div>
          </div>
        `
      },
      'fantasy-game': {
        badge: 'Game Dev • WebRTC P2P • PWA',
        title: 'Fantasy Tactics 2D — Браузерная пошаговая стратегия',
        subtitle: 'JavaScript ES6 • Webpack 5 • PeerJS (WebRTC) • Workbox PWA • Utility AI',
        url: 'https://ru1zy.github.io/game-fantasy-pwa/',
        urlLabel: 'Играть в браузере (GitHub Pages)',
        secondaryUrl: 'https://github.com/Ru1zy/game-fantasy-pwa',
        secondaryLabel: 'Репозиторий на GitHub',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 О проекте и реализации</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Кроссплатформенная 2D пошаговая стратегия в фэнтези-сеттинге с механикой Progressive Web App. Проект включает бесконечные волны выживания, визуализацию боевых радиусов, умный ИИ, а также P2P-мультиплеер по ссылке через WebRTC без стороннего сервера.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Инженерные особенности</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Мультиплеер по ссылке через WebRTC (P2P):</strong> Прямое соединение игроков браузер-к-браузеру через DataChannels (PeerJS). Игрок генерирует ссылку, отправляет другу, оба жмут «Готов» — и игра начинается с нулевой задержкой. Также доступен режим Hotseat на одном экране.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Бесконечный цикл уровней и High Score:</strong> Снято ограничение в 4 уровня, реализована циклическая смена биомов (степь, пустыня, ледники, горы), подсчет очков и сохранение рекорда в localStorage.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Визуализация зон хода и атаки:</strong> Динамическая подсветка доступных клеток перемещения и радиуса поражения при выборе юнита, а также предиктивный расчет урона.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Умный тактический ИИ (Utility AI):</strong> Компьютер приоритизирует добивание раненых бойцов (focus fire), опасных магов/лучников и осуществляет кайтинг стрелками на безопасное расстояние.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>PWA Offline First:</strong> Установка как нативное приложение на десктоп и смартфоны, кеширование ассетов через Service Worker.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологий</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, Webpack 5, PeerJS (WebRTC DataChannels), Workbox PWA, CSS Grid, Web Audio API.</div>
            </div>
          </div>
        `
      },
      ecar: {
        badge: 'Game Dev • HTML5 Canvas • Retro Synthwave',
        title: 'e-caR: Neon Highway Arcade',
        subtitle: 'HTML5 Canvas • Web Audio API • Touch D-pad • LocalStorage Highscore',
        url: 'https://ru1zy.github.io/ecar/',
        urlLabel: 'Играть в e-caR Arcade',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 О проекте и концепции</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Высокодинамичная 2D-аркада в эстетике Neon Synthwave / Cyberpunk. Игрок управляет спорткаром на скоростном многополосном шоссе, уворачивается от встречного трафика, ловит турбо-бусты и ставит рекорды на 60 FPS.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Технические и геймплейные решения</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Pure HTML5 Canvas Engine:</strong> Плавный 60fps рендеринг дорожной разметки с параллакс-перспективой, неоновыми шлейфами фар и системой частиц взрывов.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Полная поддержка мобильных устройств:</strong> Виртуальный полупрозрачный сенсорный D-pad с виброоткликом (Vibration API) и touch-action: none.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Синтезированный звук на Web Audio API:</strong> Динамический шум турбо-двигателя с питч-модуляцией частоты от скорости, звуки заноса и аварии без задержек буферизации.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Динамическая сложность и High Score:</strong> Прогрессивная скорость трафика, множитель очков за близкие обгоны (Near Miss) и сохранение лучшего результата в LocalStorage.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #f472b6; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологий</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">HTML5 Canvas, JavaScript ES6+, Web Audio API, Vibration API, Touch Events, CSS Glassmorphism.</div>
            </div>
          </div>
        `
      },
      playver: {
        badge: 'Audio & Video • Media Engine',
        title: 'PlayVer — Cyberpunk Multimedia Station',
        subtitle: 'Web Audio API • Canvas Visualizer • Live Radio Streams • Custom HTML5 Player',
        url: 'https://ru1zy.github.io/playver/',
        urlLabel: 'Запустить PlayVer Studio',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 О проекте</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Современная кроссплатформенная медиастанция, объединяющая видеоплеер высокого разрешения, аудиоплеер с динамической анимацией звуковых волн и онлайн-радиоприемник мировых станций.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Инженерные особенности</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Web Audio API AnalyserNode:</strong> Снятие частотных характеристик (FFT) в реальном времени и отрисовка неонового 3D/спектрального эквалайзера на Canvas.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Глобальное Live-радио:</strong> Надежные HTTPS-потоки радиовещания (Synthwave, Chillstep, Lo-Fi, Club) с отображением метаданных и битрейта.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Кастомные видео-контролы:</strong> Управление скоростью воспроизведения, Picture-in-Picture режим, кастомный прогресс-бар с превью и горячие клавиши.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Dark Cyberpunk & Glass UI:</strong> Премиальный дизайн с матовым размытием, неоновыми акцентами и полной адаптивностью под телефоны и планшеты.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #22d3ee; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологий</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, Web Audio API, Canvas 2D, HTML5 Media, Webpack 5, Responsive CSS3.</div>
            </div>
          </div>
        `
      },
      cinema: {
        badge: 'Interactive UI • Cinema Reservation',
        title: 'Cin.Emma — IMAX Cinema Seat Booking Platform',
        subtitle: 'Dynamic SVG Hall • Seat Reservation • Snack Add-ons • Virtual QR Pass',
        url: 'https://ru1zy.github.io/cinema/',
        urlLabel: 'Открыть демо Cin.Emma',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 О проекте</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Премиальный сервис бронирования билетов в кинотеатр нового поколения: детальная интерактивная векторная схема зала с градацией комфорта мест, выбором форматов показа (IMAX Laser / Dolby Atmos) и мгновенным чекаутом.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Возможности интерфейса</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Векторная схема зала (SVG + DOM):</strong> Интерактивный выбор мест в партере и на VIP-диванах, динамический подсчет стоимости с учетом тарифов и скидок.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Выбор сеансов и форматов:</strong> Быстрое переключение времени показа, даты и зала с обновлением занятости мест.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Корзина снеков и напитков:</strong> Возможность добавить попкорн, начос и напитки прямо к заказу с мгновенным пересчетом чека.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Генерация электронного билета с QR-кодом:</strong> Полноценный посадочный талон для сохранения на устройство и демонстрации на контроле.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #fbbf24; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологий</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, SVG DOM, Modern CSS Glassmorphism, QR Generator, LocalStorage.</div>
            </div>
          </div>
        `
      },
      jacovert: {
        badge: 'E-commerce • Дипломный проект',
        title: 'Jacovert Inc. — Платформа продажи кофе и сувениров',
        subtitle: 'PHP • JavaScript • MySQL • Адаптивный UI • Каталог и корзина',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Запросить демо в Telegram',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Описание проекта</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Многостраничный интернет-магазин с каталогом товаров, сортировкой по категориям, интерактивной корзиной и оформлением заказа. Разработан в качестве дипломного проекта с акцентом на архитектуру базы данных и высокую скорость работы.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Реализованный функционал</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Каталог с живой фильтрацией по стоимости, сортам кофе и сопутствующим товарам.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Модуль корзины с подсчетом скидок и промежуточных итогов.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Адаптивная верстка, отлично отображающаяся на любых устройствах.</span>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      'telegram-bots': {
        badge: 'Автоматизация & Интеграции',
        title: 'Telegram Bot & Business Automation Ecosystems',
        subtitle: 'Node.js • Telegraf • Webhooks • CRM & Payment Integrations',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Обсудить разработку бота',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Бизнес-автоматизация в мессенджерах</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Создание надежных ботов для Telegram: от систем приема заявок и выставления счетов до полноценных Mini Apps (TMA) и воронки продаж.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Возможности</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Мгновенная доставка уведомлений о заказах и платежах сотрудникам компании.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Интеграция с платежными системами (Monobank, LiqPay, Stripe) прямо внутри Telegram.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Синхронизация с базами данных (PostgreSQL, MongoDB) и таблицами Google Sheets.</span>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      'interactive-web': {
        badge: 'Frontend & UI/UX',
        title: 'Интерактивные лендинги и веб-интерфейсы',
        subtitle: 'Modern CSS • Micro-interactions • GSAP • Performance 95+',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Заказать разработку интерфейса',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Скорость, эстетика и конверсия</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Разработка интерфейсов с плавной 60fps анимацией, адаптивностью под все разрешения экранов и строгим соблюдением стандартов доступности (a11y) и Core Web Vitals.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Фокус внимания</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Отсутствие визуального мусора, выверенная сетка и типографика.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Плавные переходы и микровзаимодействия, повышающие вовлечение пользователя.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Оптимизация ассетов и кода для моментального первого экрана (LCP &lt; 1.2s).</span>
                </li>
              </ul>
            </div>
          </div>
        `
      }
    },

    ua: {
      foodbalance: {
        badge: 'Флагманський проєкт • 2026',
        title: 'FoodBalance — Сервіс доставки здорового харчування та абонементів',
        subtitle: 'Next.js 16 (App Router) • TypeScript • Monobank Plata API • Telegram Webhooks • Google Sheets API',
        url: 'https://foodbalance.com.ua',
        urlLabel: 'Перейти на foodbalance.com.ua',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Про проєкт та бізнес-завдання</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                FoodBalance — повноцінний сервіс доставки раціонів правильного харчування в м. Запоріжжя. Було необхідно створити висококонверсійну веб-платформу з гнучким вибором раціонів, системою багатоденних абонементів, автоматичним білінгом та повною інтеграцією в операційну діяльність кухні без ручної рутини.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Ключові інженерні рішення</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Розумний чекаут зі змішаною оплатою:</strong> Реалізовано облік доступних днів абонемента з автоматичним розрахунком доплати за додаткові дні або спортивні раціони.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Інтеграція з Monobank Plata:</strong> Безпечний еквайринг, обробка криптографічних вебхуків із статусами платежів, захист від дублювання замовлень.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Двостороння синхронізація з Google Sheets:</strong> Замовлення миттєво записуються в оперативні таблиці кухні за датами та маршрутами доставки.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Telegram Bot сповіщення:</strong> Миттєві інтерактивні сповіщення менеджерів про кожне нове або оплачене замовлення з повним складом кошика.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Інтерактивний конструктор раціону:</strong> Динамічний підрахунок калорій, білків, жирів та вуглеводів (КБЖУ) залежно від обраної мети користувача.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологій</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, Monobank API, Telegram Bot Webhook, Zustand, Google Drive & Sheets API.</div>
            </div>
          </div>
        `
      },
      'fantasy-game': {
        badge: 'Game Dev • WebRTC P2P • PWA',
        title: 'Fantasy Tactics 2D — Браузерна покрокова стратегія',
        subtitle: 'JavaScript ES6 • Webpack 5 • PeerJS (WebRTC) • Workbox PWA • Utility AI',
        url: 'https://ru1zy.github.io/game-fantasy-pwa/',
        urlLabel: 'Грати в браузері (GitHub Pages)',
        secondaryUrl: 'https://github.com/Ru1zy/game-fantasy-pwa',
        secondaryLabel: 'Репозиторій на GitHub',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Про проєкт та реалізацію</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Кросплатформна 2D покрокова стратегія у фентезі-сеттингу з механікою Progressive Web App. Проєкт включає нескінченні хвилі виживання, візуалізацію бойових радіусів, розумний ШІ та P2P-мультиплеєр за посиланням через WebRTC без стороннього сервера.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Інженерні особливості</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Мультиплеєр за посиланням через WebRTC (P2P):</strong> Пряме з'єднання браузер-до-браузера через DataChannels (PeerJS). Гравець генерує посилання, відправляє другу, обидва тиснуть «Готовий» — і гра починається з нульовою затримкою. Також є режим Hotseat на одному екрані.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Нескінченний цикл рівнів та High Score:</strong> Знято обмеження в 4 рівні, реалізовано циклічну зміну біомів (степ, пустеля, льодовики, гори), підрахунок очок і збереження рекорду в localStorage.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Візуалізація зон ходу та атаки:</strong> Динамічне підсвічування доступних клітинок пересування і радіусу ураження при виборі юніта, а також предиктивний розрахунок шкоди.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Розумний тактичний ШІ (Utility AI):</strong> Комп'ютер пріоритетно добиває поранених бійців (focus fire), небезпечних магів/лучників і здійснює кайтинг стрільцями на безпечну відстань.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>PWA Offline First:</strong> Встановлення як нативний додаток на ПК та смартфони, кешування ресурсів через Service Worker.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологій</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, Webpack 5, PeerJS (WebRTC DataChannels), Workbox PWA, CSS Grid, Web Audio API.</div>
            </div>
          </div>
        `
      },
      ecar: {
        badge: 'Game Dev • HTML5 Canvas • Retro Synthwave',
        title: 'e-caR: Neon Highway Arcade',
        subtitle: 'HTML5 Canvas • Web Audio API • Touch D-pad • LocalStorage Highscore',
        url: 'https://ru1zy.github.io/ecar/',
        urlLabel: 'Грати в e-caR Arcade',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Про проєкт та концепцію</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Високодинамічна 2D-аркада в естетиці Neon Synthwave / Cyberpunk. Гравець керує спорткаром на швидкісному багатосмуговому шосе, уникає зустрічного трафіку, ловить турбо-бусти та встановлює рекорди на стабільних 60 FPS.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Технічні та геймплейні рішення</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Pure HTML5 Canvas Engine:</strong> Плавний 60fps рендеринг дорожньої розмітки з паралакс-перспективою, неоновими шлейфами фар та системою часток вибухів.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Повна підтримка мобільних пристроїв:</strong> Віртуальний напівпрозорий сенсорний D-pad із вібровідгуком (Vibration API) та touch-action: none.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Синтезований звук на Web Audio API:</strong> Динамічний шум турбо-двигуна з пітч-модуляцією частоти від швидкості, звуки заносу й аварії без затримок буферизації.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Динамічна складність та High Score:</strong> Прогресивна швидкість трафіку, множник очок за небезпечні обгони (Near Miss) та збереження кращого результату в LocalStorage.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #f472b6; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологій</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">HTML5 Canvas, JavaScript ES6+, Web Audio API, Vibration API, Touch Events, CSS Glassmorphism.</div>
            </div>
          </div>
        `
      },
      playver: {
        badge: 'Audio & Video • Media Engine',
        title: 'PlayVer — Cyberpunk Multimedia Station',
        subtitle: 'Web Audio API • Canvas Visualizer • Live Radio Streams • Custom HTML5 Player',
        url: 'https://ru1zy.github.io/playver/',
        urlLabel: 'Запустити PlayVer Studio',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Про проєкт</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Сучасна кросплатформна медіастанція, що поєднує відеоплеєр високої чіткості, аудіоплеєр із динамічною візуалізацією звукових хвиль та онлайн-радіоприймач світових станцій.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Інженерні особливості</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Web Audio API AnalyserNode:</strong> Зняття частотних характеристик (FFT) у реальному часі та відмальовка неонового 3D/спектрального еквалайзера на Canvas.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Глобальне Live-радіо:</strong> Надійні HTTPS-потоки радіомовлення (Synthwave, Chillstep, Lo-Fi, Club) з відображенням метаданих та бітрейту.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Кастомні відео-контроли:</strong> Керування швидкістю відтворення, Picture-in-Picture режим, кастомний прогрес-бар із прев'ю та гарячі клавіші.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Dark Cyberpunk & Glass UI:</strong> Преміальний дизайн із матовим розмиттям, неоновими акцентами та повною адаптивністю під телефони та планшети.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #22d3ee; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологій</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, Web Audio API, Canvas 2D, HTML5 Media, Webpack 5, Responsive CSS3.</div>
            </div>
          </div>
        `
      },
      cinema: {
        badge: 'Interactive UI • Cinema Reservation',
        title: 'Cin.Emma — IMAX Cinema Seat Booking Platform',
        subtitle: 'Dynamic SVG Hall • Seat Reservation • Snack Add-ons • Virtual QR Pass',
        url: 'https://ru1zy.github.io/cinema/',
        urlLabel: 'Відкрити демо Cin.Emma',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Про проєкт</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Преміальний сервіс бронювання квитків у кінотеатр нового покоління: детальна інтерактивна векторна схема зали з градацією комфорту місць, вибором форматів показу (IMAX Laser / Dolby Atmos) та миттєвим чекаутом.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Можливості інтерфейсу</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Векторна схема зали (SVG + DOM):</strong> Інтерактивний вибір місць у партері та на VIP-диванах, динамічний підрахунок вартості з урахуванням тарифів і знижок.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Вибір сеансів і форматів:</strong> Швидке перемикання часу показу, дати та зали з оновленням зайнятості місць.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Кошик снеків і напоїв:</strong> Можливість додати попкорн, начос і напої прямо до замовлення з миттєвим перерахунком чека.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Генерація електронного квитка з QR-кодом:</strong> Повноцінний посадковий талон для збереження на пристрій і пред'явлення на контролі.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #fbbf24; text-transform: uppercase; margin-bottom: 0.35rem;">Стек технологій</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, SVG DOM, Modern CSS Glassmorphism, QR Generator, LocalStorage.</div>
            </div>
          </div>
        `
      },
      jacovert: {
        badge: 'E-commerce • Дипломний проєкт',
        title: 'Jacovert Inc. — Платформа продажу кави та сувенірів',
        subtitle: 'PHP • JavaScript • MySQL • Адаптивний UI • Каталог та кошик',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Запитати демо в Telegram',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Опис проєкту</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Багатосторінковий інтернет-магазин із каталогом товарів, сортуванням за категоріями, інтерактивним кошиком та оформленням замовлення. Розроблений як дипломний проєкт з акцентом на архітектуру бази даних та високу швидкість роботи.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Реалізований функціонал</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Каталог із живим фільтруванням за ціною, сортами кави та супутніми товарами.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Модуль кошика з розрахунком знижок та проміжних підсумків.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Адаптивна верстка, що відмінно виглядає на будь-яких пристроях.</span>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      'telegram-bots': {
        badge: 'Автоматизація & Інтеграції',
        title: 'Telegram Bot & Business Automation Ecosystems',
        subtitle: 'Node.js • Telegraf • Webhooks • CRM & Payment Integrations',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Обговорити розробку бота',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Бізнес-автоматизація у месенджерах</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Створення надійних ботів для Telegram: від систем прийому заявок і виставлення рахунків до повноцінних Mini Apps (TMA) та воронок продажів.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Можливості</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Миттєва доставка сповіщень про замовлення та платежі співробітникам компанії.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Інтеграція з платіжними системами (Monobank, LiqPay, Stripe) прямо всередині Telegram.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Синхронізація з базами даних (PostgreSQL, MongoDB) та таблицями Google Sheets.</span>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      'interactive-web': {
        badge: 'Frontend & UI/UX',
        title: 'Інтерактивні лендинги та веб-інтерфейси',
        subtitle: 'Modern CSS • Micro-interactions • GSAP • Performance 95+',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Замовити розробку інтерфейсу',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Швидкість, естетика та конверсія</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Розробка інтерфейсів із плавною 60fps анімацією, адаптивністю під усі роздільні здатності екранів та суворим дотриманням стандартів доступності (a11y) і Core Web Vitals.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Фокус уваги</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Відсутність візуального сміття, вивірена сітка і типографіка.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Плавні переходи та мікровзаємодії, що підвищують залученість користувача.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Оптимізація асетів і коду для моментального першого екрана (LCP &lt; 1.2s).</span>
                </li>
              </ul>
            </div>
          </div>
        `
      }
    },

    en: {
      foodbalance: {
        badge: 'Flagship Project • 2026',
        title: 'FoodBalance — Balanced Meal Delivery & Subscription Platform',
        subtitle: 'Next.js 16 (App Router) • TypeScript • Monobank Plata API • Telegram Webhooks • Google Sheets API',
        url: 'https://foodbalance.com.ua',
        urlLabel: 'Visit foodbalance.com.ua',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Project Scope & Objectives</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                FoodBalance is a full-cycle balanced meal delivery service in Zaporizhzhia. The mission was to develop a high-converting web platform featuring flexible diet customization, multi-day meal pass subscription billing, and zero-touch kitchen operational sync.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Core Engineering Solutions</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Smart Split-Billing Checkout:</strong> Handles meal-pass days deduction with automatic real-time calculation for additional ration days and calorie add-ons.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Monobank Plata Acquiring:</strong> Secure cryptographic webhook verification, idempotent order processing, and zero payment collisions.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Bidirectional Google Sheets Sync:</strong> Real-time automated order batching directly into kitchen production and courier dispatch sheets.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Telegram Operations Bot:</strong> Real-time rich notifications to company managers for every order, complete with customer details and basket breakdown.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Interactive Diet Builder:</strong> Live recalculation of calories, proteins, fats, and carbs tailored to the customer's fitness goals.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; text-transform: uppercase; margin-bottom: 0.35rem;">Technology Stack</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, Monobank API, Telegram Bot Webhook, Zustand, Google Drive & Sheets API.</div>
            </div>
          </div>
        `
      },
      'fantasy-game': {
        badge: 'Game Dev • WebRTC P2P • PWA',
        title: 'Fantasy Tactics 2D — Browser Turn-Based Strategy',
        subtitle: 'JavaScript ES6 • Webpack 5 • PeerJS (WebRTC) • Workbox PWA • Utility AI',
        url: 'https://ru1zy.github.io/game-fantasy-pwa/',
        urlLabel: 'Play in Browser (GitHub Pages)',
        secondaryUrl: 'https://github.com/Ru1zy/game-fantasy-pwa',
        secondaryLabel: 'GitHub Repository',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Concept & Implementation</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                A cross-platform 2D tactical strategy game set in a rich fantasy universe with Progressive Web App capabilities. Features endless wave progression, movement/attack grid visualization, tactical AI, and serverless P2P multiplayer via WebRTC.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Engineering Highlights</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>WebRTC P2P Multiplayer by Link:</strong> Direct browser-to-browser connection via DataChannels (PeerJS). One player creates an invitation link, the other joins, both click Ready — zero-latency play with no backend required. Also supports Hotseat mode.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Endless Levels & High Score:</strong> Removed old 4-level cap in favor of an infinite procedural biome cycle (Steppe, Desert, Glacier, Mountains) with score tracking in localStorage.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Movement & Threat Grid Overlays:</strong> Live pathfinding highlights for movement bounds, attack ranges, and predictive combat damage.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>Tactical Utility AI:</strong> Enemy units prioritize focus fire on injured targets, eliminate priority mages/archers, and kite safely outside player reach.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span><strong>PWA Offline-First:</strong> Installs as a standalone native app on desktop and mobile with Service Worker asset caching.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; text-transform: uppercase; margin-bottom: 0.35rem;">Technology Stack</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, Webpack 5, PeerJS (WebRTC DataChannels), Workbox PWA, CSS Grid, Web Audio API.</div>
            </div>
          </div>
        `
      },
      ecar: {
        badge: 'Game Dev • HTML5 Canvas • Retro Synthwave',
        title: 'e-caR: Neon Highway Arcade',
        subtitle: 'HTML5 Canvas • Web Audio API • Touch D-pad • LocalStorage Highscore',
        url: 'https://ru1zy.github.io/ecar/',
        urlLabel: 'Play e-caR Arcade',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Vision & Gameplay</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                A fast-paced 2D arcade racer drenched in synthwave and cyberpunk aesthetics. Players maneuver an electric supercar along a congested neon expressway, evading oncoming traffic, picking up turbo boosts, and chasing high scores at silky 60 FPS.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Engineering & Controls</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Pure HTML5 Canvas Engine:</strong> Smooth 60fps road rendering with parallax perspective, neon tail light trails, and particle collision effects.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Mobile First Controls:</strong> Virtual semi-transparent touch D-pad with haptic feedback (Vibration API) and strict touch-action locking.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Realtime Web Audio Synthesis:</strong> Procedural engine sound with frequency pitch modulation tied directly to vehicle velocity, drift screeches, and impact audio.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #ec4899;">✔</span>
                  <span><strong>Dynamic Difficulty:</strong> Progressive traffic velocity, near-miss score multipliers, and persistent high scores in LocalStorage.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #f472b6; text-transform: uppercase; margin-bottom: 0.35rem;">Technology Stack</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">HTML5 Canvas, JavaScript ES6+, Web Audio API, Vibration API, Touch Events, CSS Glassmorphism.</div>
            </div>
          </div>
        `
      },
      playver: {
        badge: 'Audio & Video • Media Engine',
        title: 'PlayVer — Cyberpunk Multimedia Station',
        subtitle: 'Web Audio API • Canvas Visualizer • Live Radio Streams • Custom HTML5 Player',
        url: 'https://ru1zy.github.io/playver/',
        urlLabel: 'Launch PlayVer Studio',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Project Overview</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                A modern cross-platform media station uniting a high-definition video player, an audio engine with real-time waveform visualization, and a curated global online radio receiver.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Engineering Highlights</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Web Audio API AnalyserNode:</strong> Live fast-Fourier-transform (FFT) extraction rendered as a glowing neon spectral frequency equalizer on Canvas.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Global Live Streams:</strong> Reliable HTTPS radio broadcasts across Synthwave, Chillstep, Lo-Fi, and Club with metadata and bitrate displays.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Custom Video Controls:</strong> Variable playback speeds, Picture-in-Picture mode, custom seekbar with hover previews, and full keyboard shortcuts.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #06b6d4;">✔</span>
                  <span><strong>Dark Cyberpunk & Glass UI:</strong> Frosted glass surfaces, neon green/cyan glow accents, and responsive fluidity across phones and tablets.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #22d3ee; text-transform: uppercase; margin-bottom: 0.35rem;">Technology Stack</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, Web Audio API, Canvas 2D, HTML5 Media, Webpack 5, Responsive CSS3.</div>
            </div>
          </div>
        `
      },
      cinema: {
        badge: 'Interactive UI • Cinema Reservation',
        title: 'Cin.Emma — IMAX Cinema Seat Booking Platform',
        subtitle: 'Dynamic SVG Hall • Seat Reservation • Snack Add-ons • Virtual QR Pass',
        url: 'https://ru1zy.github.io/cinema/',
        urlLabel: 'Open Cin.Emma Demo',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Vision</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                A next-generation cinema ticketing experience: interactive vector seating auditorium charts, tiered pricing (Standard vs VIP suites), screening format selections (IMAX Laser / Dolby Atmos), and rapid checkout.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ UI Features</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Vector Auditorium (SVG + DOM):</strong> Interactive seat selection in parquet and VIP recliners, dynamic cart calculations with tiered pricing.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Showtime & Format Switcher:</strong> Instant switching between showtimes, dates, and halls with real-time seat availability updates.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Concessions & Snacks:</strong> Seamlessly add popcorn, nachos, and drinks directly to the cart before checkout.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #f59e0b;">✔</span>
                  <span><strong>Digital QR Pass Generator:</strong> Produces a full boarding-pass style digital ticket ready for device saving and entrance scanning.</span>
                </li>
              </ul>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #fbbf24; text-transform: uppercase; margin-bottom: 0.35rem;">Technology Stack</div>
              <div style="color: #f1f5f9; font-size: 0.9rem; font-family: monospace;">JavaScript ES6+, SVG DOM, Modern CSS Glassmorphism, QR Generator, LocalStorage.</div>
            </div>
          </div>
        `
      },
      jacovert: {
        badge: 'E-commerce • Graduation Thesis',
        title: 'Jacovert Inc. — Coffee & Merch Storefront',
        subtitle: 'PHP • JavaScript • MySQL • Responsive UI • Catalog & Cart',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Request Demo via Telegram',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Project Description</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                A multi-page e-commerce storefront for specialty roasted coffee, accessories, and branded apparel. Developed as an academic graduation thesis with emphasis on database normalization, fast page loads, and intuitive UX.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Implemented Architecture</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Instant product filtering by roast profiles, price range, and categories.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Cart subsystem with coupon discounts and subtotal calculations.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Fully responsive design engineered for seamless desktop and mobile viewports.</span>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      'telegram-bots': {
        badge: 'Automation & Integrations',
        title: 'Telegram Bot & Business Automation Ecosystems',
        subtitle: 'Node.js • Telegraf • Webhooks • CRM & Payment Integrations',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Discuss Custom Bot Development',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Business Chat Automation</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Building robust Telegram bots: from lead generation and in-app checkout pipelines to Telegram Mini Apps (TMA) and operations automation.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Core Capabilities</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Real-time instant dispatch of order records and payments to operational teams.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Integration with major payment providers (Monobank, LiqPay, Stripe) inside Telegram.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Bidirectional sync with databases (PostgreSQL, MongoDB) and Google Sheets.</span>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      'interactive-web': {
        badge: 'Frontend & UI/UX',
        title: 'High-Performance Web & Interactive UI',
        subtitle: 'Modern CSS • Micro-interactions • GSAP • Performance 95+',
        url: 'https://t.me/ru1zy',
        urlLabel: 'Request Interface Design & Dev',
        content: `
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.25rem;">
            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 Speed, Aesthetics & Conversion</h4>
              <p style="color: #94a3b8; line-height: 1.65; font-size: 0.95rem;">
                Developing distinctive digital interfaces with 60fps micro-interactions, responsive fluidity across all screen resolutions, and strict compliance with WCAG a11y standards and Core Web Vitals.
              </p>
            </div>

            <div>
              <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ Focus Areas</h4>
              <ul style="color: #cbd5e1; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Zero visual clutter with disciplined typographic hierarchy and balanced layouts.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Tactile micro-animations that captivate users and elevate brand perception.</span>
                </li>
                <li style="display: flex; gap: 0.6rem;">
                  <span style="color: #10b981;">✔</span>
                  <span>Asset and bundle minification delivering lightning-fast initial render (LCP &lt; 1.2s).</span>
                </li>
              </ul>
            </div>
          </div>
        `
      }
    }
  };

  let currentLang = DEFAULT_LANG;

  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('uk')) return 'ua';
    if (navLang.startsWith('ru')) return 'ru';
    if (navLang.startsWith('en')) return 'en';
    return DEFAULT_LANG;
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;

    const dict = translations[lang] || translations[DEFAULT_LANG];

    // 1. Meta / Document Title
    if (dict.pageTitle) document.title = dict.pageTitle;
    const metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl && dict.metaDesc) metaDescEl.setAttribute('content', dict.metaDesc);

    // 2. Text Content bindings
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 3. HTML Content bindings (for rich tags like strong, span, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 4. Attribute bindings (e.g. title, aria-label)
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // 5. Update Switcher Buttons Active State
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // 6. Update open modal if visible
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('open') && window._currentOpenCaseKey) {
      if (typeof window._reopenCurrentModal === 'function') {
        window._reopenCurrentModal();
      }
    }
  }

  function getTranslation(key) {
    const dict = translations[currentLang] || translations[DEFAULT_LANG];
    return dict[key] || '';
  }

  function getProjectData(key) {
    const langStudies = modalStudies[currentLang] || modalStudies[DEFAULT_LANG];
    return langStudies[key] || null;
  }

  function init() {
    const initialLang = detectLanguage();
    setLanguage(initialLang);

    // Event listeners on language buttons
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
          setLanguage(lang);
        }
      }
    });
  }

  return {
    init: init,
    setLanguage: setLanguage,
    getCurrentLang: function () { return currentLang; },
    t: getTranslation,
    getProjectData: getProjectData
  };
})();
