import ResumeSectionContent from "./ResumeSectionContent";

function ResumeSection(props) {
  return (
    <section className={props.slug}>
      <h1>{props.title}</h1>
      <ResumeSectionContent content={props.content} />
    </section>
  );
}

export default ResumeSection;