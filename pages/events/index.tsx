import Head from "next/head";
import EventsContainer from "../../components/eventsContainer/EventsContainer";

const index = () => {
  return (
    <>
      <Head>
        <title>Abhivyakti 2022 | Events</title>
        <meta name="title" content="Abhivyakti 2022 | EVENTS"></meta>
        <meta
          name="description"
          content="A total of 8 competitions would be organised where participants from all over India would take part. Each competition will be organised on various social media platforms like Instagram, FaceBook, Youtube, etc. There would be opening and closing ceremonies and also an influencer would be invited in the closing ceremony to entertain the participants."
        />
        <meta
          name="keywords"
          content="Abhivyakti 2022 events, cultural festival of iiitn events, Abhivyakti Quizzes, Abhivyakti Competitions, Pitch Perfect, Abhivyakti Got Talent, Personality Contest, Work it up, Elouction Battle, Meme Making Competition, Quizonmania, Picart competition"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta
          property="og:image"
          content="https://abhivyakti.vercel.app/_next/image?url=%2Fsvgs-to-convert%2Fabhivyakti-logo.svg&w=640&q=75"
        ></meta>
      </Head>
      <EventsContainer></EventsContainer>
    </>
  );
};

export default index;
