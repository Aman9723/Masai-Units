import Link from 'next/Link';
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/products'}>Products</Link>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
