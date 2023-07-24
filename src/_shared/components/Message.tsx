import { Message, MessageProps } from "rsuite";

interface C {
  text: string;
}

type Props = MessageProps & C;

export default function CustomMessage(props: Props) {
  return (
    <Message showIcon type="info" {...props}>
      {props.text}
    </Message>
  );
}
