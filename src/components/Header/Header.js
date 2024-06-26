import { Link } from "react-router-dom"

export default function Header(){

    return (
        <>
            <div className="mb-8 w-full bg-gradient-to-r from-cyan-800 to-indigo-900 flex justify-between py-4 items-center border-b-2 border-white">
                <Link className="mx-32 text-xl" to="/">
                    <img src="./logo.png" alt="logo" className="object-cover w-40 h-10 rounded-md" />
                </Link>

                <div className="flex gap-8 mx-32 text-xl">
                    <Link className="hover:scale-105" to="/Hotels">Hotels</Link>
                    <Link className="hover:scale-105" to="/Fluege">Flüge</Link>
                    <Link className="hover:scale-105" to="/Buchungen">Meine Buchungen</Link>
                    <Link className="hover:scale-105" to="/Meetings">Meetings</Link>
                </div>

            </div>
        </>
    )
}