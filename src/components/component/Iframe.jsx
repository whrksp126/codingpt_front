
const Iframe = ({ src }) => {
  // TODO : 레슨 생성 시 만들어진 파일 구조를 경로를 이용해서 성공 iframe을 그려준다.

  return (
    <iframe
      src={src}
      title="Dynamic Iframe"
      className="w-full h-full"
    ></iframe>
  );
};

export default Iframe;
