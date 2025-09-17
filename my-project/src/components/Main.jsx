export function Main() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-10 space-y-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">Hi, I'm Muhammad Ilyas</h1>
                    <p className="text-lg text-gray-700">
                        I'm a passionate web developer with a knack for creating dynamic and responsive web applications.
                        With a strong foundation in JavaScript, React, and Tailwind CSS, I specialize in building user-friendly
                        interfaces that provide seamless user experiences. My portfolio showcases a variety of projects that
                        highlight my skills in front-end development, UI/UX design, and problem-solving abilities. I'm always
                        eager to take on new challenges and collaborate on innovative projects. Feel free to explore my work and get
                        in touch!
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img
                        src="/image/1.jpeg"
                        alt="Muhammad Ilyas"
                        className="w-64 h-64 object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>
            <div className="">
                <span>Pakistan</span> 
                <br />
                <span>Avilable for new project</span>
            </div>
        </main>
    );
}