import { delay } from "../../helpers/delay";

export async function Todos(): Promise<JSX.Element> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  await delay(5000);

  return <div>Todos: {todos.length}</div>;
}
