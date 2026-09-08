export default function FontSizes(){
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold  text-gray-700 mb-4">Practicing Font Sizes</h1>
            <div className="space-y-2">
                <p className="text-xs  bg-gray-100 text-gray-500 p-2">text - extra small(12px)</p>
                <p className="text-sm  bg-gray-100 text-gray-500 p-2">text - small(14px)</p>
                <p className="text-base  bg-gray-100 text-gray-500 p-2">text - base(16px)</p>
                <p className="text-lg  bg-gray-100 text-gray-500 p-2">text - large(18px)</p>
                <p className="text-xl  bg-gray-100 text-gray-500 p-2">text - extra large(20px)</p>
                <p className="text-2xl  bg-gray-100 text-gray-500 p-2">text - 2x large(24px)</p>
                <p className="text-3xl  bg-gray-100 text-gray-500 p-2">text - 3x large(28px)  </p>

            </div>
         </div>
    );
}