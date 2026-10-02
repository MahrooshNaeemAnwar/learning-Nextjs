export default function HideShow(){
    return(
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-bold text-center mb-4">Hide/Show elements Practice</h1>
            {/*Mobile only  */}
            <div className="block md:hidden bg-blue-500 text-white p-4 rounded mb-4">
                <p className="text-center">This text is visible only on mobile screens.</p>
            </div>
            {/*Desktop only */}
            <div className="hidden md:block bg-green-500 text-white p-4 rounded mb-4">
                <p className="text-center">This text is visible only on desktop screens.</p>
            </div>
            {/*Always Visible */}
            <div className="bg-gray-500 text-white p-4 rounded">
                <p className="text-center">This text is always visible regardless of screen size.</p>
            </div>
        </div>
    );
}