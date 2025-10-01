export function Main5() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex justify-center mb-8">
                <button className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow text-lg">
                    Testimonials
                </button>
            </div>
            <p className="text-center mb-10 text-lg text-gray-700">
                Nice things people have said about me:
            </p>
            <div className="grid gap-8 md:grid-cols-3">

                {/* Testimonial 1 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    <img src="/image/1.jpeg" alt="Client 1" className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-blue-100" />
                    <h2 className="text-lg font-bold mb-2">Client 1</h2>
                    <p className="text-gray-700 text-center">"Ilyas did a fantastic job on our project. Highly recommend!"</p>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    <img src="/image/1.jpeg" alt="Client 2" className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-blue-100" />
                    <h2 className="text-lg font-bold mb-2">Client 2</h2>
                    <p className="text-gray-700 text-center">"Professional and timely delivery. Will hire again."</p>
                </div>
                {/* Testimonial 3 */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    <img src="/image/1.jpeg" alt="Client 3" className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-blue-100" />
                    <h2 className="text-lg font-bold mb-2">Client 3</h2>
                    <p className="text-gray-700 text-center">"Exceeded our expectations in every way."</p>
                </div>
            </div>
        </main>
    )
}