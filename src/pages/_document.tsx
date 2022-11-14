import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="스크랩을 통해 꾸밈없는 자신의 모습을 마주해 보세요" />
        <link rel="icon" href="/public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://webfontworld.github.io/SCoreDream/SCoreDream.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <div id="toast-portal" />
        <NextScript />
      </body>
    </Html>
  );
}
