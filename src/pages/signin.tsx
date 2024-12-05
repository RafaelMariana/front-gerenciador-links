import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)

  const handleFormChange = (e) => {
    const form = e.target.form;
    const allFieldsFilled = [...form.elements].every(
      (field) => field.type !== "submit" && field.value.trim() !== ""
    );
    setIsFormComplete(allFieldsFilled);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Formulário de Login */}
        {!isSignUp && (
          <div className="w-full space-y-6">
            <h1 className="text-2xl font-semibold text-center">Faça seu Login</h1>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Digite seu email</Label>
                <Input id="email" type="email" placeholder="email" />
              </div>
              <div>
                <Label htmlFor="senha">Digite sua senha</Label>
                <Input id="senha" type="password" placeholder="Senha" />
              </div>
              <Button className="w-full">Logar</Button>
            </form>
            <div className="text-center">
              <p>
                Não tem uma conta?{" "}
                <button
                  className="text-blue-500"
                  onClick={() => setIsSignUp(true)}
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Formulário de Cadastro */}
        {isSignUp && (
          <div
            className={`relative w-full space-y-6 ${
              isFormComplete ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            {/* Barra lateral de cor */}
            <div
              className={`absolute top-0 left-0 h-full w-2 ${
                isFormComplete ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            
            <h1 className="text-2xl font-semibold text-center">Crie sua Conta</h1>
            <form className="space-y-4" onChange={handleFormChange}>
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" type="text" placeholder="Seu nome" />
              </div>
              <div>
                <Label htmlFor="email">Digite seu email</Label>
                <Input id="email" type="email" placeholder="email" />
              </div>
              <div>
                <Label htmlFor="senha">Digite sua senha</Label>
                <Input id="senha" type="password" placeholder="Senha" />
              </div>
              <div>
                <Label htmlFor="confirmar-senha">Confirmar senha</Label>
                <Input
                  id="confirmar-senha"
                  type="password"
                  placeholder="Confirmar senha"
                />
              </div>
              <Button className="w-full">Cadastrar</Button>
            </form>
            <div className="text-center">
              <p>
                Já tem uma conta?{" "}
                <button
                  className="text-blue-500"
                  onClick={() => setIsSignUp(false)}
                >
                  Faça login
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
