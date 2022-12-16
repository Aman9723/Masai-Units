import Link from 'next/Link';
export default function product() {
    return (
        <div>
            <h3>Products List</h3>
            <ul>
                <Link href="/products/laptop">Laptop</Link>
            </ul>
        </div>
    );
}
