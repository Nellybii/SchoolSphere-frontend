const ClassList = ({ classes = [] }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Class List</h3>
      {classes.length === 0 ? (
        <p className="text-gray-500">No classes available.</p>
      ) : (
        <ul className="mt-4">
          {classes.map((classItem) => (
            <li key={classItem.id} className="border-b py-2">
              {classItem.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassList;
