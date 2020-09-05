import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Container from '../Container';

export interface MDPageProps {
  fileName: string;
}

const MDPage: React.FC<MDPageProps> = ({ fileName }) => {
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    const loadFile = async () => {
      const file = await import(`../../data/tabs/${fileName}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setContents(text);
    };
    loadFile();
  }, [fileName]);

  return (
    <Container title={fileName} seo={{ title: fileName }}>
      <ReactMarkdown source={contents} />
    </Container>
  );
};

export default MDPage;
