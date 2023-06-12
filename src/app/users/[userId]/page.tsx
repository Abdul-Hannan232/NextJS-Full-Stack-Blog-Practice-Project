import { useRef } from "react";

type Params = {
  params: {
    userId: string;
  };
};

export default function UserPage({ params: { userId } }: Params) {
  const first = useRef(params.userId);

  return <div>page</div>;
}
