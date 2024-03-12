export default function Input(props) {
  return (  
    <div className={`flex flex-col text-left ${props.className}`}>
      <label className="font-bold">{props.title}</label>
      <span className="text-sm mb-2 text-gray-200">
        {props.description}
      </span>
      <input
        className="rounded-md p-2 shadow-md text-black"
        type={props.type}
        name="input"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}
