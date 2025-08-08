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
      <style>{`
        .blank {
          width: auto;
          padding: 0 8px 0;
          color: #4B4B4B;
          background: #fff;
          border-radius: 6px;
          border: 1px solid #E5E5E5;
          outline: none;
        }
        .blank.focus {
          background: #DDF4FF;
          border: 1px solid #84D8FF;
        }
      `}</style>
      <div className="">
        <pre style={{ background: '#272822', color: '#fff', padding: '1rem', overflowX: 'auto', fontSize: 15, fontFamily: 'Fira Mono, Menlo, monospace', margin: 0 }}>
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      </div>
    </div>
  );
}

export default Code;
