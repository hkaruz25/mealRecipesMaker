"use client";

import { generateRecipeAction } from "./action";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, pending] = useActionState(generateRecipeAction, null);

  return (
    <main className="max-w-2xl m-auto my-12 space-y-4">
      <h1 className="text-xl font-bold">Meal Recipe Generator</h1>
      <form action={formAction} className="space-y-2">
        <input name="ingredients" placeholder="Enter your ingredients ie. chicken, tofu, ..." />
        <select name="cuisine">
          <option>American</option>
          <option>Italian</option>
          <option>Asian</option>
          <option>Chinese</option>
          <option>Japan</option>
          <option>Indonesia</option>
        </select>
        <button disabled={pending}>Generate Dish</button>
      </form>
      <section>
        {state?.status === "success" && (
          <div>
            <h3>{state.data.dishName}</h3>
            <p>{state.data.dishDescription}</p>
            <h3 className="text-lg font-medium">Ingredients</h3>
            <div>
              {state.data.ingredients.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>{" "}
            <h3 className="text-lg font-medium">Instruction</h3>
            <div>
              {state.data.instruction.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
