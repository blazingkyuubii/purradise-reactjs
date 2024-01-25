import "../../comp-table/Table.css";


export default function TestEnv(){
    return (
      <div className="m-10 p-2 flex flex-row flex-wrap justify-around border border-blue-400">
        <div>
          <button className=" md:px-80 lg:px-80 xl:px-80 bg-purple-300">
            Button 1
          </button>
        </div>
        <div>
          <button className=" md:px-80 lg:px-80 xl:px-80 bg-purple-300">
            Button 2
          </button>
        </div>
      </div>
    );
}