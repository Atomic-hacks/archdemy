export default function DesignPrinciples() {
  return (
    <section className="site-gutter design-principles">
      <p className="section-rule">Context. Collaboration. Craft.</p>
      <h2 data-reveal="text">
        A considered approach,
        <br />
        from the first conversation.
      </h2>
      <div>
        {[
          {
            title: "Context first",
            text: "Site, climate, and the way people use a space guide the design from the beginning.",
          },
          {
            title: "Connected decisions",
            text: "Architecture, interiors, and materials are considered together to create a coherent experience.",
          },
          {
            title: "Attention to detail",
            text: "The design is carried through from the arrangement of spaces to the way materials meet.",
          },
        ].map((item) => (
          <article key={item.title} data-reveal="text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
