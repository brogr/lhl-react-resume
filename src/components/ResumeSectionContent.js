function ResumeSectionContent(props) {
  // console.log(props);

  let parsedContent = <p>{props.content}</p>;
  // parse content into list if more than one item
  if (props.content.length > 1) {
    parsedContent = (
      <ul>
        {props.content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {parsedContent}
    </>
  );
}

export default ResumeSectionContent;