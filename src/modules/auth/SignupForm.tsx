import { useState } from "react";
import { styled } from "styled-components";
import CustomSteps from "../../_shared/components/CustomSteps";
import BasicInfo from "./form/BasicInfo";
import Selections from "./form/Selections";
import Preview from "./form/Preview";
import Animate from "../../_shared/components/Animate";

type status = "error" | "wait" | "finish" | "process" | undefined;

const formPages: { title: string; description?: string; status?: status }[] = [
  { title: "Basic Info", status: "wait" },
  { title: "Selections", status: "wait" },
  { title: "Finished", status: "wait" },
];

export default function SignupForm() {
  const [currentForm, setCurrentForm] = useState(0);

  // <ButtonToolbar>
  //   <Button onClick={() => setShow(true)}>Open</Button>
  // </ButtonToolbar>;

  const setCurrent = (n: number) => {
    setCurrentForm(n);
  };

  return (
    <LoginWrapper>
      <Header>
        <CustomSteps current={currentForm} data={formPages} />
      </Header>
      <LoginContent>
        <Animate
          children={BasicInfo}
          inn={currentForm === 0}
          setCurrent={setCurrent}
        />
        <Animate
          children={Selections}
          inn={currentForm === 1}
          setCurrent={setCurrent}
        />
        <Animate
          children={Preview}
          inn={currentForm === 2}
          setCurrent={setCurrent}
        />
      </LoginContent>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Header = styled.div`
  position: relative;
  top: 50px;
  width: 40rem;
  z-index: 999;
`;

const LoginContent = styled.div`
  position: relative;
  /* top: 400px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 100vw;
  height: 100vh; */
  /* overflow-y: auto; */
  margin-top: 32px;
  width: 40rem;
`;
