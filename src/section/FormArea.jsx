import { useState } from "react"




function FormArea() {

  let [num, setNum] = useState(0);


  return (
    <div>
      <form action="#" className="bg-white rounded-md shadow-sm py-5 px-4">
        <input type="text" placeholder="Name" className="input input-bordered w-full " />
        <small className="pb-3 px-5 text-red-900 text-sm hidden">somethis is going wrong</small>
        <input type="text" placeholder="Phone" className="input input-bordered w-full my-5" />
        <select className="select select-bordered w-full">
            <option disabled selected>Active</option>
            <option>Han Solo</option>
            <option>Greedo</option>
        </select>
        <small className="pb-3 px-5 text-red-900 text-sm hidden">somethis is going wrong</small>
        <small className="pb-3 px-5 text-red-900 text-sm hidden">somethis is going wrong</small>

        <button onClick={() => setNum(num + 1)} className="btn btn-accent my-4">Add Token {num}</button>





      </form>
      <h3 className="text-3xl text-center mt-5 font-bold">Total Tokens {num}</h3>

    </div>
  )
}

export default FormArea
