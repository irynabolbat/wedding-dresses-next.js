export type TextInputProps = {
  inputType?: string;
  inputPlaceholder: string;
  inputValue: string;
  inputRef?: React.Ref<HTMLInputElement>;
  error?: string;
  handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
