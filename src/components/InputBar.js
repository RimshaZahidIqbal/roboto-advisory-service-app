// components/InputBar.js
export default function InputBar() {
    return (
        <div className="bottom-0 w-full p-4 bg-white shadow-md flex items-center fixed">
            <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-3 border rounded-full bg-gray-100 outline-none"
            />
            <button className="ml-3 text-blue-500">
                {/* Icon for Microphone */}
                🎤
            </button>
            <button className="ml-3 text-blue-500">
                {/* Icon for Send */}
                ➤
            </button>
        </div>
    );
}
