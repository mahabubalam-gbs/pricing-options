import Link from "./Link";

const navData = [
    {
        id: 1,
        path: "/",
        name: "Home"
    },
    {
        id: 2,
        path: "/about",
        name: "About"
    },
    {
        id: 3,
        path: "/services",
        name: "Services"
    },
    {
        id: 4,
        path: "/blog",
        name: "Blog"
    },
    {
        id: 5,
        path: "/contact",
        name: "Contact"
    }
];

const Navbar = () => {
    return (
        <nav>
            <ul className="flex">
                {
                    navData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>

    );
};

export default Navbar;