export function Main3() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <div className="flex justify-center mb-8">
                <button className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow text-lg">
                    Experience
                </button>
            </div>
            <p className="text-center mb-10 text-lg text-gray-700">
                Here are some of the companies I've worked with:
            </p>
            <div className="space-y-10">
                {/* TechScape */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">TechScape</h2>
                    <p className="font-semibold">Role: <span className="font-normal">Frontend Developer</span></p>
                    <p className="font-semibold">Duration: <span className="font-normal">April 2023 - Present</span></p>
                    <p className="mt-2"><span className="font-semibold">Responsibilities:</span> Developing and maintaining user interfaces using React and Tailwind CSS. Collaborating with designers and backend developers to create seamless web applications. Implementing responsive design principles to ensure optimal user experience across devices.</p>
                    <p className="mt-2"><span className="font-semibold">Achievements:</span> Successfully launched multiple features that improved user engagement by 20%. Optimized application performance, resulting in a 15% reduction in load times.</p>
                </div>
                {/* InnovateX */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">InnovateX</h2>
                    <p className="font-semibold">Role: <span className="font-normal">Junior Developer</span></p>
                    <p className="font-semibold">Duration: <span className="font-normal">January 2022 - March 2023</span></p>
                    <p className="mt-2"><span className="font-semibold">Responsibilities:</span> Assisted in the development of web applications using JavaScript and React. Participated in code reviews and contributed to team meetings. Helped troubleshoot and debug issues in existing applications.</p>
                    <p className="mt-2"><span className="font-semibold">Achievements:</span> Played a key role in the successful deployment of a major project that increased client satisfaction by 25%. Gained valuable experience in agile development methodologies.</p>
                </div>
                {/* WebSolutions */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">WebSolutions</h2>
                    <p className="font-semibold">Role: <span className="font-normal">Intern</span></p>
                    <p className="font-semibold">Duration: <span className="font-normal">June 2021 - December 2021</span></p>
                    <p className="mt-2"><span className="font-semibold">Responsibilities:</span> Supported the development team with various tasks, including coding, testing, and documentation. Learned best practices in web development and contributed to small projects.</p>
                    <p className="mt-2"><span className="font-semibold">Achievements:</span> Completed a comprehensive internship program that provided hands-on experience in web development. Received positive feedback from mentors for dedication and eagerness to learn.</p>
                </div>
            </div>
        </main>
    );
}