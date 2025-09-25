export function Main1() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-10 bg-gray-200 rounded-lg shadow-md">
            {/* Button at the top center */}
            <div className="flex justify-center mb-8">
                <button className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow text-lg">
                    About me
                </button>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-10">
                {/* Image on the left */}
                <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                    <img
                        src="/image/1.jpeg"
                        alt="Muhammad Ilyas"
                        className="w-64 h-80 object-cover rounded-xl shadow-lg"
                    />
                </div>
                
                {/* Text on the right */}
                <div className="flex-1">
                    <p>
                        <span className="text-3xl font-bold">Curious about me? Here you have it:</span> <br />
                        I'm a passionate web developer with a knack for creating dynamic and responsive web applications.
                        With a strong foundation in JavaScript, React, and Tailwind CSS, I specialize in building user-friendly
                        interfaces that provide seamless user experiences. My portfolio showcases a variety of projects that
                        highlight my skills in front-end development, UI/UX design, and problem-solving abilities. I'm always
                        eager to take on new challenges and collaborate on innovative projects. Feel free to explore my work and get
                        in touch! <br />
                        Finally, I'm based in Pakistan, Gilgit and am available for new projects.
                        Let's connect and create something amazing together!
                        <br />
                        <strong>Software Engineer | Web Developer | Tech Enthusiast</strong>
                        <br />
                        <strong>Skills:</strong> HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, Responsive Design.
                        <br />
                        <strong>Hobbies:</strong> Coding, Reading Tech Blogs, Exploring New Technologies, Traveling, Photography.
                    </p>
                </div>
            </div>
        </main>
    )
}