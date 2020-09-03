import React, { useEffect, useState } from 'react';
import marked from 'marked';
import Container from '../Container';

export interface MDPageProps {
  fileName: string;
}

const MDPage: React.FC<MDPageProps> = ({ fileName }) => {
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    const loadFile = async () => {
      const file = await import(`../../data/pages/${fileName}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setContents(text);
    };
    loadFile();
  }, [fileName]);

  return (
    <Container title={fileName}>
      <div dangerouslySetInnerHTML={{ __html: marked(contents) }}></div>
    </Container>
  );
};

export default MDPage;
