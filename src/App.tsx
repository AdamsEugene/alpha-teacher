/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { styled } from "styled-components";
import GlobalStyle from "./_shared/theme/global";
import useTheme from "./_shared/hooks/useTheme";

export default function App() {
  const { colors } = useTheme();

  return (
    <AppWrapper>
      <GlobalStyle theme={colors} />
      <RouterProvider
        // fallbackElement={
        //   <FallbackWrapper>
        //     <Loading height={"100px"} text="Getting things ready" />
        //   </FallbackWrapper>
        // }
        router={router}
      />
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;
