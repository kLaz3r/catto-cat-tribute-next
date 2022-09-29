import axios from 'axios';
import Image from 'next/future/image';
import Head from 'next/head';

import logo from '../assets/images/logo.png';

import styled, { ThemeProvider } from 'styled-components';

const theme = {
  dark: '#291415',
  light: '#dee1e6',
  gray: '#aba8a7',
  accent: '#6f3846',
};

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 1.5rem 0;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.light};
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 3rem;
    /* width: 10%; */
    .nav-logo {
      width: 30%;
      height: auto;
      max-height: 5rem;
    }
    p {
      display: inline;
      line-height: 2rem;
      font-size: 2rem;
      margin-left: 0.7rem;
      font-weight: 700;
      position: relative;
      top: 3px;
    }
  }
`;
const Content = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.dark};
  min-height: calc(100vh - 5rem);
  color: ${(props) => props.theme.light};
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
    padding-top: 2rem;
    font-weight: 400;
  }
  h3 {
    font-weight: 700;
    padding-top: 2rem;
    font-size: 2rem;
  }
  p {
    margin-left: 2rem;
    padding: 1rem 0;
    font-size: 1.2rem;
    font-weight: 300;
  }
  .cat-pic {
    width: 100%;
    .image {
      width: 100%;
      height: auto;
    }
  }
`;

const Footer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  color: ${(props) => props.theme.light};
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
`;

export default function Home({ catFact, catPic }) {
  return (
    <div>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#291415' />
        <meta name='msapplication-TileColor' content='#291415' />
        <meta name='theme-color' content='#291415' />
        <meta
          name='description'
          content='A cat tribute app for our cute fluffy catto friends'
        />
        <title>Catto - Cat Tribute App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar>
          <div className='logo'>
            <Image
              responsive='true'
              className='nav-logo'
              src={logo}
              alt='logo'
            ></Image>
            <p>Catto</p>
          </div>
        </Navbar>
        <Content>
          <h1>Welcome!</h1>
          <h2>Your favourite furry friend awaits you.</h2>
          <h3>Fun Fact:</h3>
          <p>{catFact}</p>
          <div className='cat-pic'>
            <Image
              className='image'
              responsive='true'
              src={catPic.url}
              width={catPic.width}
              height={catPic.height}
              alt='cat'
            ></Image>
          </div>
        </Content>
        <Footer>
          <p>Come back after five minutes for more cat facts!</p>
        </Footer>
      </ThemeProvider>
    </div>
  );
}

export async function getStaticProps() {
  async function getCatFacts() {
    const data = await axios
      .get('https://cat-fact.herokuapp.com/facts/random?amount=10')
      .then((res) => res.data);
    // if (data.status.verified === true) {
    //   console.log(data);
    //   return data.text;
    // } else {
    //   return getCatFacts();
    // }

    const filteredData = data.filter((item) => {
      if (item.status.verified === true) {
        return true;
      } else {
        return false;
      }
    });
    if (filteredData.length === 0) {
      return getCatFacts();
    } else {
      console.log(filteredData[0].text);
      return filteredData[0].text;
    }
  }
  async function getCatPic() {
    const data = await axios(
      'https://api.thecatapi.com/v1/images/search?api_key=live_9q9QQroIMxYAFVPp7aU3vEGziRmgbX7ZjDYmXK5Lg0TDuoNT56Ueyph4KJUlQEn4'
    ).then((res) => res.data);
    return data[0];
  }
  let catFact = await getCatFacts();
  let catPic = await getCatPic();

  return {
    props: {
      catFact,
      catPic,
    },
    revalidate: 300,
  };
}
