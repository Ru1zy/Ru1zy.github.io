/**
 * 2ez4ru1z Portfolio - Interactive Engine
 * Spotlight tracking, Staggered Reveal, Modal Management & Copy to Clipboard
 */

(function () {
  'use strict';

  // 1. Mouse Spotlight Effect for Bento Cards
  const cards = document.querySelectorAll('.spotlight-card');

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
  });

  // 2. Staggered Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // 3. Project Case Studies Data & Modal System
  const projectsData = {
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
  };

  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBody = document.getElementById('modalBody');
  const modalActionBtn = document.getElementById('modalActionBtn');
  const modalSecondaryBtn = document.getElementById('modalSecondaryBtn');

  function getCaseData(key) {
    if (window.PortfolioI18n && typeof window.PortfolioI18n.getProjectData === 'function') {
      const i18nData = window.PortfolioI18n.getProjectData(key);
      if (i18nData) return i18nData;
    }
    return projectsData[key] || null;
  }

  function openProjectModal(key) {
    window._currentOpenCaseKey = key;
    const data = getCaseData(key);
    if (!data || !modalOverlay) return;

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalBody.innerHTML = data.content;
    modalActionBtn.href = data.url;
    modalActionBtn.textContent = data.urlLabel;

    if (data.secondaryUrl && modalSecondaryBtn) {
      modalSecondaryBtn.href = data.secondaryUrl;
      const defaultSecondaryLabel = (window.PortfolioI18n && typeof window.PortfolioI18n.t === 'function')
        ? window.PortfolioI18n.t('modalRepoGithub')
        : 'Репозиторий на GitHub';
      modalSecondaryBtn.textContent = data.secondaryLabel || defaultSecondaryLabel;
      modalSecondaryBtn.style.display = 'inline-flex';
    } else if (modalSecondaryBtn) {
      modalSecondaryBtn.style.display = 'none';
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window._reopenCurrentModal = function () {
    if (window._currentOpenCaseKey && modalOverlay && modalOverlay.classList.contains('open')) {
      openProjectModal(window._currentOpenCaseKey);
    }
  };

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    window._currentOpenCaseKey = null;
  }

  document.querySelectorAll('[data-open-case]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const caseKey = btn.getAttribute('data-open-case');
      openProjectModal(caseKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // 4. Copy to Clipboard with Toast Notification
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  const toast = document.getElementById('toastNotice');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy-text');
      if (!text) return;

      const copiedMsg = (window.PortfolioI18n && typeof window.PortfolioI18n.t === 'function')
        ? window.PortfolioI18n.t('ctaCopied')
        : '✓ Скопировано в буфер: @ru1zy';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(copiedMsg);
        }).catch(() => {
          showToast(`Контакт: ${text}`);
        });
      } else {
        showToast(`Контакт: ${text}`);
      }
    });
  });

})();
