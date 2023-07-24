import { Steps } from "rsuite";

type status = "error" | "wait" | "finish" | "process" | undefined;
interface CustomStepsProps {
  current: number;
  data: { title: string; description?: string; status?: status }[];
}

export default function CustomSteps(props: CustomStepsProps) {
  const { current, data } = props;

  return (
    <Steps current={current}>
      {data.map((item) => (
        <Steps.Item
          key={item.title}
          title={item.title}
          description={item.description}
          status={item.status}
        />
      ))}
    </Steps>
  );
}
