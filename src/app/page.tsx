"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginForm = { email?: string; password?: string };

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginForm>();

  const onSubmit = async () => {
    router.push("/products"); // redireciona mesmo sem validar
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-lg font-semibold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("email")}
            placeholder="e-mail"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            {...register("password")}
            placeholder="senha"
            className="w-full border p-2 rounded"
          />

          <button
            disabled={isSubmitting}
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              font-medium
              py-2
              px-4
              rounded-lg
              disabled:opacity-50
              cursor-pointer
              transition-colors
              duration-200
              w-full
            "
          >
            entrar
          </button>
        </form>
      </div>
    </div>
  );
}
