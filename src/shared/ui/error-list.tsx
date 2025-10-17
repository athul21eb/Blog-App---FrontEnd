export const ErrorList = ({ errors }: { errors?: Record<string, string[]> }) => {

  console.log("ErrorList errors:", errors);
  if (!errors || Object.keys(errors).length === 0) return null;

  return (
    <ul className="error-messages">
      {Object.entries(errors).map(([key, value]) => (
        <li key={key + value.join("")}>
          {key}: {value.join(" ")}
        </li>
      ))}
    </ul>
  );
};
