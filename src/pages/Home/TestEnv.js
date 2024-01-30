import "../../comp-table/Table.css";


export default function TestEnv(){
    return (
      <div
        className="lg:rounded-full lg:border-4 lg:border-white lg:bg-red-500
                    sm:rounded-lg sm:border sm:border-yellow-200 sm:bg-gradient-to-r from-yellow-400 to-red-500
                    h-16 w-16 m-4 relative"
      >
        {/* Conditionally render the photo for large screens */}
        {window.innerWidth > 768 && (
          <img
            src="https://assets.teenvogue.com/photos/64765439229c80b13063b8b2/3:2/w_2560%2Cc_limit/FR_1481p.jpg"
            alt="Your Photo"
            className="w-full h-full object-cover rounded-full"
          />
        )}

        {/* Content goes here */}
      </div>
    );
}