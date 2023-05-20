export async function Todos(): Promise<JSX.Element> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  // pendiente el delay

  return <div>Todos: {todos.length}</div>;
}
