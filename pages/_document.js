import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html>
      <Head/>
      <title>Évolution des aides en fonction du salaire</title>
      <body>
        <header>
          <h1><Link href="/">Accueil</Link></h1>
        </header>
        <main>
          <Main />
          <NextScript />
        </main>
        <footer>
          <p>
            Le code source est disponibles sur GitHub : <a
            href="https://github.com/betagouv/mes-aides-changent">
            https://github.com/betagouv/mes-aides-changent</a>
          </p>
          <p>Version : {process.env.commitSHA?.slice(0, 10)}</p>
        </footer>
      </body>
    </Html>
  )
}
