const CardActions = () => {
    return (
      <div className="flex-col w-full max-w-md mx-auto mt-10">
        <button className="block text-center mx-auto p-2 border w-full my-4 border-black tracking-widest font-medium">
          Freeze card
        </button>
        <button className="block text-center mx-auto p-2 border w-full my-4 border-black tracking-widest font-medium">
          Replace card
        </button>
        <button className="block text-center mx-auto p-2 border w-full my-4 border-black tracking-widest font-medium">
          Cancel card
        </button>
      </div>
    );
  };
  
  export default CardActions;
  