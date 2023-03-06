import Head from "next/head";
import { HtmlHeadProps } from "../interfaces/ComponentProps";

/*
This components is used to generate the <head> tag with title and description
*/
const HtmlHead = (props: HtmlHeadProps) => {
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
