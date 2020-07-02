const HTML = `
  <div>
    <h1>This is a title</h1>

    <style>

    <h2>This is a subtitle</h2>
  </div>
`;

export default function IndexPage() {
  // The page is always blank with no errors due to invalid HTML added to `dangerouslySetInnerHTML`
  return (
    <div>
      Hello World.
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </div>
  );
}
