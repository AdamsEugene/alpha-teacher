/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { styled } from "styled-components";

export default function App() {
  return (
    <RouterProvider
      // fallbackElement={
      //   <FallbackWrapper>
      //     <Loading height={"100px"} text="Getting things ready" />
      //   </FallbackWrapper>
      // }
      router={router}
    />
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
