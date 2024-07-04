import { Link } from "react-router-dom"

export default function Footer(){

    return (
        <>
            <div className="w-full mt-4 bg-gradient-to-r from-cyan-800 to-indigo-900 flex justify-evenly py-4 items-center border-t-2 border-white">
                <div className="flex">
                <Link className="mx-4 text-white" to="/hotels">Hotels</Link>
                <Link className="mx-4 text-white" to="/hotels">Flüge</Link>
                <Link className="mx-4 text-white" to="/hotels">Buchungen</Link>

                    <Link className="mx-4 text-white" to="/meetings">Meetings</Link>
                </div>
                <Link className="mx-32 text-xl" to="/">
                    <img src="./logo.png" alt="logo" className="object-cover w-40 h-10 rounded-md" />
                </Link>


            </div>
        </>
    )
}