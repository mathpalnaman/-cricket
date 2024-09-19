
export default function Stepper({ step }) {
  return (
    <ul className="relative flex flex-row gap-x-2 max-w-xs mx-auto mb-6">
      {["1", "2", "3", "4"].map((item, index) => (
        <li key={item} className="shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span
              className={`size-7 flex justify-center items-center shrink-0 rounded-full font-semibold border ${
                step === index + 1 ? "bg-green-400 text-white border-green-500" : "text-gray-400 border-gray-400"
              }`}
            >
              {item}
            </span>
            {index < 3 && <div className="bg-gray-400 w-full flex-auto h-px" />}
          </div>
        </li>
      ))}
    </ul>
  );
}
