export default function TweetForm({ onSubmit }) {
  //Code JavaScript

  //State;

  //Comportement;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      name,
      content,
      liked: 0,
    };

    onSubmit(newTweet);
  };

  //Affichage(render);
  //Code JSX;
  return (
    <div>
      <div className="mx-auto text-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col size-52 gap-4 m-2"
        >
          <h4 className="text-white underline">New Tweet</h4>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="rounded-md"
          />
          <input
            type="text"
            placeholder="content"
            name="content"
            className="rounded-md"
          />
          <input
            type="submit"
            value="AddItems"
            className="text-black bg-white cursor-pointer hover:bg-cyan-300 font-bold rounded-md"
          />
        </form>
      </div>
    </div>
  );
}
