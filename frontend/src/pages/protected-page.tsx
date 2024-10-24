import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const ProtectedPage = () => {
  return <div>Protected Content</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProtectedPage;
