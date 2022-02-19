import Head from "next/head";
import EventsContainer from "../../components/eventsContainer/EventsContainer";

const index = () => {
  return (
    <>
      <Head>
        <title>Abhivyakti 2022 | Events</title>
      </Head>
      <EventsContainer></EventsContainer>
    </>
  );
};

export default index;
