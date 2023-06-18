import { Suspense, useRef } from "react";
import getUser from "../../../../lib/getUser";
import getUserPosts from "../../../../lib/getUserPosts";
import UserPosts from "./Components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "../../../../lib/getAllUsers";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the ${user.name}'s page!`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;

  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return users.map((user) => {
    userId: user.id;
  });
}
