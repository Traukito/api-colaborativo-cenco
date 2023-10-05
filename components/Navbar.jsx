import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='bg-slate-800 mb-4 flex justify-between items-center px-20 p-5'>
        
        <Link href="/" className='font-bold'>
            Inicio
        </Link>

        <ul>
            <li>
                <Link href="/about" className='font-bold'>
                    About 
                </Link>
            </li>
        </ul>






    </nav>
  )
}

export default Navbar