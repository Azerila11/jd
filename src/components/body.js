import React, { useReducer } from "react";
import DragDrop from "../function/function";

const Body = () => {
  //function for drog and drop
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="w-1/2 h-72 border-dashed rounded-lg  flex flex-col items-center justify-around border-2 border-black-dark-black">
        {" "}
        <div>
          <DragDrop data={data} dispatch={dispatch} />
          <ol className="dropped-files">
            {data.fileList.map((f) => {
              return <li key={f.name}>{f.name}</li>;
            })}
          </ol>
        </div>
        <button className="font-vazirBold text-sm w-2/5 p-3 text-white rounded-md  bg-green-700 ">
          انتخاب کنید
        </button>
      </div>
      <div className="w-1/2 flex flex-wrap justify-center pt-7">
        <button className="font-vazirBold text-sm w-1/5 p-3 text-white rounded-l-lg  bg-green-700 ">
          ارسال
        </button>
        <input
          type="text"
          id="success"
          style={{ outline: "none" }}
          class="bg-green-50 border text-right border-green-500 w-4/5 font-vazirBold text-green-900 d placeholder-green-700  text-md rounded-r-lg focus:ring-green-500 focus:border-green-500 block p-2.5  dark:border-green-500"
          placeholder="نام دامدار"
        />
      </div>
    </div>
  );
};

export default Body;
