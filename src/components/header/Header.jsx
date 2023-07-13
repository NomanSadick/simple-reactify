// eslint-disable-next-line react/prop-types

const Header = ({ title }) => {
    return (
        <header className="bg-gray-800 py-4">
            <h1 className="text-white text-center text-xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
        </header>
    );
};

export default Header;