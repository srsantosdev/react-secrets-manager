import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

interface Props {
  onSubmit: () => void;
}

export const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="flex flex-col rounded-sm w-96" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Label text="Nome" htmlFor="name" />
        <Input type="text" id="name" />
      </div>

      <div className="flex flex-col mt-4">
        <Label text="E-mail" htmlFor="email" />
        <Input type="email" id="email" />
      </div>

      <div className="flex flex-col mt-4">
        <Label text="Senha" htmlFor="password" />
        <Input type="password" id="password" />
      </div>

      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
