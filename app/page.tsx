import Link from "next/link";

function home() {
  return(
      <div>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
  )
}

export default home;