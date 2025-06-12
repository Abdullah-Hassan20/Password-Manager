import React from "react";

function Data({ data, handleEdit, handleDelete }) {
  return (
    <div className="w-[90vw]">
      <table className="bg-neutral-950 rounded-t-2xl w-full text-white table-fixed">
      <thead>
        <tr>
          <th className="p-2 text-[12px] font-medium sm:font-bold sm:text-[14px] lg:text-[18px]">App</th>
          <th className="p-2 text-[12px] font-medium sm:font-bold sm:text-[14px] lg:text-[18px]">Username</th>
          <th className="p-2 text-[12px] font-medium sm:font-bold sm:text-[14px] lg:text-[18px]">Email</th>
          <th className="p-2 text-[12px] font-medium sm:font-bold sm:text-[14px] lg:text-[18px]">Pass</th>
          <th className="p-2 text-[12px] font-medium sm:font-bold sm:text-[14px] lg:text-[18px]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((a, index) => (
          <tr key={index} className="bg-neutral-800 text-center wrap-anywhere">
            <td className="p-2  text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px]">{a.appname}</td>
            <td className="p-2  text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px]">{a.username}</td>
            <td className="p-2  text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px]">{a.email}</td>
            <td className="p-2  text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px]">{a.password}</td>
            <td className="p-2  text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px]">
              <div className="flex justify-center gap-2 md:gap-4">
                <button onClick={() => handleEdit(a)}>
                  <lord-icon
                    className='w-[13px] h-[13px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[30px] xl:h-[30px]'
                    src="https://cdn.lordicon.com/exymduqj.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#ffffff"
                  ></lord-icon>
                </button>
                <button onClick={() => handleDelete(a._id)}>
                  <lord-icon
                    className='w-[13px] h-[13px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[30px] xl:h-[30px]'
                    src="https://cdn.lordicon.com/hwjcdycb.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#ffffff"
                  ></lord-icon>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
}

export default Data;

