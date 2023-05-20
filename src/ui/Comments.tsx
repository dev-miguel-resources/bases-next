export async function Comments(): Promise<JSX.Element> {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  // pendiente el delay

  return <div>Comments: {comments.length}</div>;
}
