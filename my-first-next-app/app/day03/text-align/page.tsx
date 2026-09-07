export default function TextAlign() {
    return (
        <div className="bg-gray-50 p-8 space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">Text Align Practice</h1>
            <div className="space-y-4">
                <p className="text-left bg-white p-4 rounded">Left Aligned Text</p>
                <p className="text-center bg-white p-4 rounded">Center Aligned Text</p>
                <p className="text-right bg-white p-4 rounded">Right Aligned Text</p>
                <p className="text-justify bg-white p-4 rounded">
                    Justified Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
}
