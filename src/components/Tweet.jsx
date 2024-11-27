export const Tweet = ({ id, name, content, liked, onDelete, handleLiked }) => {
  //Code JavasScript;
  function handleLiked() {
    console.log("Cliked !!!", name);
  }

  //Code JSX;
  return (
    <div className="card relative m-auto border-2 bg-cyan-300 w-48 text-center p-3 shadow-lg rounded-lg">
      <button
        className="delete absolute top-0 right-0 text-sm"
        onClick={() => onDelete(id)}
      >
        ❌
      </button>
      <h3 className="font-bold ">{name}</h3>
      <p className="p-1 font-mono">{content}</p>
      <button
        className="bg-gray-400 text-black shadow-xl rounded-md p-0.5 mt-1"
        onClick={() => handleLiked()}
      >
        {liked}❤️
      </button>
    </div>
  );
};
