import '../styles/globals.css';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  // any global state or analytics
  useEffect(() => {
    // remove server-side injected CSS if any
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
