//import Route from "route"
import { useSearchParams } from "react-router-dom"

function Filter(){
    const [searchParams,setsearchParams]=useSearchParams();
    const showActiveUsers=searchParams.get('filter')==='active'

    return(
        <div>
            <h1>useSearchParams</h1>


            <button onClick={()=>setsearchParams({filter:'active'})}>Active User</button>
            <button onClick={()=>setsearchParams({})}>Reset Filter</button>

            {showActiveUsers ?(<h2>Showing Active Users</h2>):(<h2>Showing All Users</h2>)}
        </div>

    )
}
export default Filter;