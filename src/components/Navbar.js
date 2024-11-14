// components/Navbar.js
export default function Navbar() {
    return (
        <div className="w-full h-16 bg-white flex items-center justify-between p-4 shadow-md">
            <h1 className="text-lg font-semibold">ChatGPT</h1>
            <div className="flex items-center space-x-4">
                <span className="text-green-500">• Online</span>
            </div>
        </div>
    );
}
