import { Steps } from "rsuite";

interface CustomStepsProps {
  current: number;
  data: { title: string; description?: string }[];
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
        />
      ))}
    </Steps>
  );
}
