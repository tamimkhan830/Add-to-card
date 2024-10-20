import FormArea from "./FormArea"
import StatusCartArea from "./StatusCartArea"

function Main() {
  return (
   <div className="bg-slate-200 ">
     <div className="min-h-screen container mx-auto w-10/12">
        <h2 className="text-center text-3xl py-5">Token Status</h2>

     <div className="grid grid-cols-2 gap-4 ">
     <FormArea />
     <StatusCartArea />
     </div>


    </div>
   </div>
  )
}

export default Main
