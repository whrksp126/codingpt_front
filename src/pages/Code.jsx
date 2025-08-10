import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import codeFillGap from '../dummys/codeFillGap.json';
import { useParams } from 'react-router-dom';

const Code = () => {
  const { id } = useParams();
  const [code, setCode] = useState('');

  useEffect(() => {
    const code = codeFillGap[id];
    setCode(code);
  }, [id]);

  return (
    <div style={{ flex: 1, position: 'relative' }}>
      <style>{``}</style>
      <div className="">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      </div>
    </div>
  );
}

export default Code;
