import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/nowplaying'>Now Playing</Link>
                </li>
                <li>
                    <Link href='/upcoming'>Upcoming</Link>
                </li>
                <li>
                    <Link href='/reco'>Recommendations</Link>
                </li>
                
            </ul>
        </nav>
    )
}
export default Navbar