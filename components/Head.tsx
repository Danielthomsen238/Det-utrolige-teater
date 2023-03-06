import Head from "next/head";

const HtmlHead = (props: any) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};
export default HtmlHead;
