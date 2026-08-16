import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Music,
  Mail,
  Youtube,
  Music2
} from 'lucide-react';

import TikTokIcon from '../components/TikTokIcon';

import { useInView } from '../hooks/useInView';
import AboutSection from '../components/AboutSection';
import { Helmet } from 'react-helmet-async';

/* ✔ Spotify icon exact zoals footer */
const SpotifyIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm5.292 17.292a.75.75 0 01-1.03.256c-2.82-1.72-6.364-2.11-10.53-1.16a.75.75 0 11-.334-1.462c4.55-1.04 8.49-.6 11.66 1.33a.75.75 0 01.234 1.036zm1.47-3.27a.94.94 0 01-1.29.32c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 01-.54-1.8c4.32-1.31 9.72-.67 13.51 1.62.44.27.58.85.29 1.26zm.13-3.41C15.03 8.5 8.98 8.2 5.35 9.32a1.13 1.13 0 01-.66-2.16c4.17-1.28 11.11-1.03 15.46 1.6a1.13 1.13 0 11-1.23 1.85z" />
  </svg>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const upcomingShowsRef = useRef<HTMLDivElement>(null);
  const isUpcomingShowsInView = useInView(upcomingShowsRef);

  const galleryImages = [
    {
      src: '/reyck analoog-28 (1) copy copy.jpg',
      alt: 'Reyck Band Photo 1',
      position: 'center 65%'
    },
    {
      src: '/reyck analoog-56 (1) copy copy.jpg',
      alt: 'Reyck Band Photo 2',
      position: 'center 30%'
    },
    {
      src: '/reyck analoog-13 (1) (1) copy copy.jpg',
      alt: 'Reyck Band Photo 3',
      position: 'center 30%'
    },
    {
      src: '/reyckdigi-081 (1) copy copy.jpg',
      alt: 'Reyck Band Photo 4',
      position: 'center 30%'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);

    const newInterval = setInterval(nextSlide, 6000);
    setIntervalId(newInterval);

    return () => clearInterval(newInterval);
  }, [currentSlide]);

  /*
   * BREVO FORM
   * Laad de Brevo stylesheet, Brevo form script en Google reCAPTCHA
   * nadat de pagina geladen is.
   */
  useEffect(() => {
    /* Brevo stylesheet */
    if (!document.querySelector('link[data-brevo-form]')) {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href =
        'https://sibforms.com/forms/end-form/build/sib-styles.css';

      link.setAttribute('data-brevo-form', 'true');

      document.head.appendChild(link);
    }

    /* Brevo configuratie */
    (window as any).REQUIRED_CODE_ERROR_MESSAGE =
      'Please choose a country code';

    (window as any).LOCALE = 'en';

    (window as any).EMAIL_INVALID_MESSAGE =
      'The information provided is invalid. Please review the field format and try again.';

    (window as any).SMS_INVALID_MESSAGE =
      'The information provided is invalid. Please review the field format and try again.';

    (window as any).REQUIRED_ERROR_MESSAGE =
      'This field cannot be left blank. ';

    (window as any).GENERIC_INVALID_MESSAGE =
      'The information provided is invalid. Please review the field format and try again.';

    (window as any).INVALID_NUMBER =
      'The information provided is invalid. Please review the field format and try again.';

    (window as any).INVALID_DATE =
      'Please enter a valid date';

    (window as any).REQUIRED_MULTISELECT_MESSAGE =
      'Please select at least 1 option';

    (window as any).translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected'
      }
    };

    (window as any).AUTOHIDE = Boolean(0);

    /* Brevo main.js */
    if (!document.querySelector('script[data-brevo-main]')) {
      const script = document.createElement('script');

      script.src =
        'https://sibforms.com/forms/end-form/build/main.js';

      script.defer = true;
      script.setAttribute('data-brevo-main', 'true');

      document.body.appendChild(script);
    }

    /* Google reCAPTCHA */
    if (!document.querySelector('script[data-brevo-recaptcha]')) {
      const script = document.createElement('script');

      script.src =
        'https://www.google.com/recaptcha/api.js?render=6LfeS4ktAAAAAFafWqvlJt3wr-DQZUCi_tjhjw0s&hl=en';

      script.async = true;
      script.defer = true;

      script.setAttribute('data-brevo-recaptcha', 'true');

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen">

      <Helmet>
        <title>REYCK</title>
        <meta name="description" content="REYCK" />
      </Helmet>

      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-white/10">
        <div className="w-full px-4 md:px-8 py-2 flex items-center justify-between">

          <a href="#home" className="flex-shrink-0">
            <img
              src="/logozwart wit-vrijstaand copy.png"
              alt="REYCK"
              className="w-16 md:w-24 h-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">

            <a
              href="#home"
              style={{ fontFamily: 'Optien' }}
              className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase"
            >
              Home
            </a>

            <a
              href="#live"
              style={{ fontFamily: 'Optien' }}
              className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase"
            >
              Live
            </a>

            <a
              href="#music"
              style={{ fontFamily: 'Optien' }}
              className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase"
            >
              Music
            </a>

            <a
              href="#about"
              style={{ fontFamily: 'Optien' }}
              className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase"
            >
              About
            </a>

            <a
              href="#contact"
              style={{ fontFamily: 'Optien' }}
              className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase"
            >
              Contact
            </a>

          </div>

          <div className="flex items-center gap-4 text-white">

            <a
              href="https://www.instagram.com/reyck.band"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=rGWmL_YjTlKlZ26VeyRxPA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon size={18} />
            </a>

            <a
              href="https://www.youtube.com/@reyck2368"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@reyck.band"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon size={18} />
            </a>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black scroll-mt-24"
      >
        <div className="absolute inset-0 z-0">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter grayscale"
          >
            <source
              src="/promo vid cinetol1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/40"></div>

        </div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4">

          <img
            src="/logozwart wit-vrijstaand copy.png"
            alt="Reyck Logo"
            className="w-64 md:w-80 h-auto"
          />

        </div>
      </section>

      {/* MAIN CONTENT */}
      <div
        className="py-16"
        style={{
          backgroundImage:
            'url(/achtergrond-sfeerfoto-groenoranje.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >

        <div className="container mx-auto px-4">

          {/* LIVE */}
          <section
            id="live"
            ref={upcomingShowsRef}
            className="mb-16 scroll-mt-24"
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              LIVE
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">

              {[
                {
                  title: "COWLANDS",
                  date: "18",
                  month: "JUL.",
                  location: "KOEDIJK",
                  time: "TBD"
                },
                {
                  title: "ORCA OPEN AIR",
                  date: "11",
                  month: "AUG.",
                  location: "UTRECHT",
                  time: "17:30"
                },
                {
                  title: "WILHELMINA PARK VIERT DE ZOMER",
                  date: "20",
                  month: "AUG.",
                  location: "TILBURG",
                  time: "TBD"
                }
              ].map((gig, index) => (

                <div
                  key={index}
                  className="border-b border-white/20 py-6"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-6">

                      <div className="flex flex-col items-center min-w-[70px]">

                        <div className="text-white font-optien text-4xl leading-none">
                          {gig.date}
                        </div>

                        <div className="font-optien tracking-widest mt-1 text-white text-[16px]">
                          {gig.month}
                        </div>

                      </div>

                      <div>

                        <h3 className="text-white font-optien text-xl">
                          {gig.title}
                        </h3>

                        <p className="text-white/70 text-sm">
                          {gig.location}
                        </p>

                      </div>

                    </div>

                    <div className="text-white font-optien text-lg flex items-center self-center">
                      {gig.time}
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* MUSIC */}
          <section
            id="music"
            className="mb-24 scroll-mt-24"
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              MUSIC
            </h2>

            <div className="flex justify-center">

              <a
                href="https://open.spotify.com/album/38teewL2Jjv1ffc8EfvZBQ?si=kv6T62wPRpijO6Q3tyoMyg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[260px] md:w-[320px]"
              >

                <img
                  src="/spotify-cover.jpg"
                  alt="Latest Release"
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition"
                />

              </a>

            </div>

          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="mb-24 scroll-mt-24"
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              ABOUT
            </h2>

            <AboutSection />

          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="pb-12 scroll-mt-24"
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              CONTACT
            </h2>

            <div className="max-w-5xl mx-auto text-white">

              {/* EMAIL */}
              <div className="text-center mb-10">

                <p className="text-lg">

                  <a
                    href="mailto:info@reyckband.nl"
                    className="underline hover:opacity-80"
                  >
                    info@reyckband.nl
                  </a>

                </p>

              </div>

              {/* BREVO NIEUWSBRIEF FORMULIER */}
              <div className="max-w-[540px] mx-auto">

                <div
                  className="sib-form"
                  style={{
                    textAlign: 'center',
                    backgroundImage:
                      'url(https://img.mailinblue.com/10947331/images/content_library/original/6a06f027ba3d336be9749403.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                  }}
                >

                  <div
                    id="sib-form-container"
                    className="sib-form-container"
                  >

                    {/* ERROR MESSAGE */}
                    <div
                      id="error-message"
                      className="sib-form-message-panel"
                      style={{
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: '16px',
                        textAlign: 'left',
                        color: '#661d1d',
                        backgroundColor: '#ffeded',
                        borderColor: '#ff4949',
                        borderRadius: '3px',
                        maxWidth: '540px'
                      }}
                    >

                      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">

                        <svg
                          viewBox="0 0 512 512"
                          className="sib-icon sib-notification__icon"
                        >

                          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />

                        </svg>

                        <span className="sib-form-message-panel__inner-text">
                          Your subscription could not be saved. Please try again.
                        </span>

                      </div>

                    </div>

                    {/* SUCCESS MESSAGE */}
                    <div
                      id="success-message"
                      className="sib-form-message-panel"
                      style={{
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: '16px',
                        textAlign: 'left',
                        color: '#085229',
                        backgroundColor: '#e7faf0',
                        borderColor: '#13ce66',
                        borderRadius: '3px',
                        maxWidth: '540px'
                      }}
                    >

                      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">

                        <svg
                          viewBox="0 0 512 512"
                          className="sib-icon sib-notification__icon"
                        >

                          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.664-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.668 12.303-.068 16.97z" />

                        </svg>

                        <span className="sib-form-message-panel__inner-text">
                          Your subscription has been successful.
                        </span>

                      </div>

                    </div>

                    {/* FORM CONTAINER */}
                    <div
                      id="sib-container"
                      className="sib-container--large sib-container--vertical"
                      style={{
                        maxWidth: '540px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(253,251,230,0.85)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#C0CCD9',
                        borderRadius: '3px',
                        direction: 'ltr'
                      }}
                    >

                      <form
                        id="sib-form"
                        method="POST"
                        action="https://f27bef1a.sibforms.com/serve/MUIFAMT4SYHCrC_NduyOBARiFNDa7SQrMuIzybzUS-lH-1kcO95A-Blvrntz5gaKsis1EFWPzVbrJlJbuirpxzL-bnNsaz3Wm_gwG4jC807RTLNreiPIeaaZ22z5KFnNy3FyUztOX9OCzX4xC_Mvcb_Zn4AuYC2O3q5zgQocLxUMr_Apyug9rvSf83-gp2MwbCCNHj416p-Z4uVDLQ=="
                        data-type="subscription"
                      >

                        {/* TITLE */}
                        <div style={{ padding: '8px 0' }}>

                          <div
                            className="sib-form-block"
                            style={{
                              fontFamily: 'Helvetica, sans-serif',
                              fontSize: '32px',
                              fontWeight: 700,
                              textAlign: 'left',
                              color: '#020203',
                              backgroundColor: 'transparent'
                            }}
                          >

                            <p>Nieuwsbrief Reyck</p>

                          </div>

                        </div>

                        {/* EMAIL */}
                        <div style={{ padding: '8px 0' }}>

                          <div className="sib-input sib-form-block">

                            <div className="form__entry entry_block">

                              <div className="form__label-row">

                                <div className="entry__field">

                                  <input
                                    className="input"
                                    type="text"
                                    id="EMAIL"
                                    name="EMAIL"
                                    autoComplete="off"
                                    defaultValue=""
                                    placeholder="Email"
                                    data-required="true"
                                    required
                                  />

                                </div>

                              </div>

                              <label
                                className="entry__error entry__error--primary"
                                style={{
                                  fontFamily: 'Helvetica, sans-serif',
                                  fontSize: '16px',
                                  textAlign: 'left',
                                  color: '#661d1d',
                                  backgroundColor: '#ffeded',
                                  borderColor: '#ff4949',
                                  borderRadius: '3px'
                                }}
                              />

                            </div>

                          </div>

                        </div>

                        {/* BUTTON */}
                        <div style={{ padding: '8px 0' }}>

                          <div
                            className="sib-form-block"
                            style={{ textAlign: 'left' }}
                          >

                            <button
                              className="sib-form-block__button sib-form-block__button-with-loader"
                              style={{
                                fontFamily: 'Helvetica, sans-serif',
                                fontSize: '16px',
                                fontWeight: 700,
                                textAlign: 'left',
                                color: '#fdfbe6',
                                backgroundColor: '#020203',
                                borderWidth: '0px',
                                borderRadius: '3px'
                              }}
                              form="sib-form"
                              type="submit"
                            >

                              <svg
                                className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                viewBox="0 0 512 512"
                              >

                                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />

                              </svg>

                              ABONNEER

                            </button>

                          </div>

                        </div>

                        {/* OPT-IN */}
                        <div style={{ padding: '8px 0' }}>

                          <div className="sib-optin sib-form-block">

                            <div className="form__entry entry_mcq">

                              <div className="form__label-row">

                                <div className="entry__choice">

                                  <label>

                                    <input
                                      type="checkbox"
                                      className="input_replaced"
                                      value="1"
                                      id="OPT_IN"
                                      name="OPT_IN"
                                    />

                                    <span
                                      className="checkbox checkbox_tick_positive"
                                      style={{ marginLeft: '' }}
                                    />

                                    <span
                                      style={{
                                        fontFamily: 'Helvetica, sans-serif',
                                        fontSize: '14px',
                                        textAlign: 'left',
                                        color: '#3C4858',
                                        backgroundColor: 'transparent'
                                      }}
                                    >
                                      <p>
                                        I agree to receive your newsletters and accept the data privacy statement.
                                      </p>
                                    </span>

                                  </label>

                                </div>

                              </div>

                              <label
                                className="entry__error entry__error--primary"
                                style={{
                                  fontFamily: 'Helvetica, sans-serif',
                                  fontSize: '16px',
                                  textAlign: 'left',
                                  color: '#661d1d',
                                  backgroundColor: '#ffeded',
                                  borderColor: '#ff4949',
                                  borderRadius: '3px'
                                }}
                              />

                            </div>

                          </div>

                        </div>

                        {/* RECAPTCHA */}
                        <div style={{ padding: '8px 0' }}>

                          <div
                            className="g-recaptcha-v3"
                            data-sitekey="6LfeS4ktAAAAAFafWqvlJt3wr-DQZUCi_tjhjw0s"
                            style={{ display: 'none' }}
                          />

                        </div>

                        {/* HIDDEN FIELDS */}
                        <input
                          type="text"
                          name="email_address_check"
                          defaultValue=""
                          className="input--hidden"
                        />

                        <input
                          type="hidden"
                          name="locale"
                          value="en"
                        />

                      </form>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
};

export default Home;
