export default function Loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-10 max-w-6xl sm:space-x-4 flex flex-col sm:flex-row pb-42">
      <div className="animate-pulse">
        <div className="h-60 w-85 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-80 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-60 w-85 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-80 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="hidden sm:inline-flex sm: space-x-4">
        <div className="animate-pulse">
          <div className="h-60 w-85 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-80 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-60 w-85 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-80 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
