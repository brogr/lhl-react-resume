function ResumeSection(props) {
  return (
    <section className="{props.slug}">
      <h1>{props.title}</h1>
      <p>
        {props.content}
      </p>
    </section>
  );
}

export default ResumeSection;