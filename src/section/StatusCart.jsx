/* eslint-disable react/prop-types */

function StatusCart(props) {
  return (
    <div>

        <div className="bg-white rounded-lg shadow-sm mb-3">
            <div className={`flex justify-between px-5 ${props.bgColor} rounded-t-lg text-white font-normal py-5`}>
                <span>Active Token</span>
                <span>5</span>
            </div>


            <ul className="pb-2">
                <li className="flex  my-4  bg-slate-200 mx-3 items-center px-3 rounded-lg">
                    <div className="px-4 py-3">
                        <p className="text-2xl">Tamim khan</p>
                        <span>01919106682</span>
                    </div>
                    <button className={`btn btn-active ${props.bgColor} ml-auto`}>Primary</button>
                </li>

            </ul>


        </div>



    </div>

  )
}

export default StatusCart
