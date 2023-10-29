import { FC } from "react";

interface pageProps {
  params: {
    providerId: string;
  };
}

const page: FC<pageProps> = ({ params: { providerId } }) => {
  console.log(providerId);

  return <div>page</div>;
};

export default page;
