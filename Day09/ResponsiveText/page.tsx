export default function ResponsiveText() {
    return(
        <div className="p-4 md:p-8 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
                Responsive text practice
            </h1>
            <p className="sm:text-sm md:text-base lg:text-lg text-center">
                This is a paragraph that adjusts its font size based on the screen size.
                 Resize the window to see the effect!
            </p>
        </div>
    );
}