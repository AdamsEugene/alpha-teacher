export interface TextEditorProps {
  data?: string | null | undefined;
  onChange?: (
    data: string,
    section?: number | string,
    index?: number,
    quizNumber?: number | string
  ) => void;
  onFocus?: (section?: string, index?: number) => void;
  placeholder?: string;
  big?: boolean;
}
