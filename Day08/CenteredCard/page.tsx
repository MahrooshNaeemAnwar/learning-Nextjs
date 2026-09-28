export default function CenteredCard(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                <div className="text-center">
                    <div className="bg-blue-600 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl text-white">Emoji</span>
                    </div>
                            <h1 className="text-2xl font-bold mb-2 ">Arthur James</h1>
                            <p className="bg-gray-600 mb-4">Web developer</p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-blue-500 px-6 py-4 rounded-full text-white hover:bg-blue-600">
                                Follow
                            </button>
                            <button className="border border-gray-300 px-6 py-4 rounded-full text-white hover:bg-gray-50 ">
                                Message
                            </button>
                        </div>
                    </div>
               </div>
         </div>
    );
}