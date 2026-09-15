export default function FontWeights(){
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Practicing Font Weights</h1>
            <div className="space-y-2">
                <p className="font-bold text-gray-600 text-lg">font-bold</p>
                <p className="font-semibold text-gray-600 text-lg">font -semibold</p>
                <p className="font-medium text-gray-600 text-lg">font -medium</p>
                <p className="font-normal text-gray-600 text-lg">font-normal</p>
                <p className="font-thin text-gray-600 text-lg">font-thin</p>
                <p className="font-full text-gray-600 text-lg">font-full</p>
            </div>
        </div>
    );
}