export default function Aimg(props) {
  return (
    <div className={`${props.className}`}>
      <a href={props.href} className="text-gray-400 text-sm">
        <span className="flex flex-row">
          {props.text}
          <img
            src={props.src}
            alt={props.alt}
            className="ml-2"
            width={16}
            height={16}
          />
        </span>
      </a>
    </div>
  );
}
