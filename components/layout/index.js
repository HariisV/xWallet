import Head from "next/head";

export default function layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        {/* Title Dari Props */}
      </Head>
      {props.children}
      {/* //Isi dari konten yang mengimport Layout */}
    </>
  );
}
