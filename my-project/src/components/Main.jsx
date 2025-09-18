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
            <div>
                <span>Pakistan, Gilgit</span>
                <br />
                <span>Available for new project</span>
                <div className="flex items-center gap-4 mt-4">
                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="group"
                    >
                        <span className="inline-block w-7 h-7">
                            <svg viewBox="0 0 32 32" className="w-full h-full fill-gray-800 group-hover:fill-blue-600 transition-colors" aria-hidden="true">
                                <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.1"/>
                                <path d="M16 6c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C23.1 24.1 26 20.4 26 16c0-5.5-4.5-10-10-10z"/>
                            </svg>
                        </span>
                    </a>
                    {/* Twitter Icon */}
                    <a
                        href="https://twitter.com/your-twitter-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="group"
                    >
                        <span className="inline-block w-7 h-7">
                            <svg viewBox="0 0 32 32" className="w-full h-full fill-blue-500 group-hover:fill-blue-700 transition-colors" aria-hidden="true">
                                <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.1"/>
                                <path d="M25.5 10.5c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9a4.1 4.1 0 0 0-7 3.7c-3.4-.2-6.4-1.8-8.4-4.3-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.8 2 3.5-.7 0-1.3-.2-1.9-.5v.1c0 2.1 1.5 3.8 3.5 4.2-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.7 2.2 2.9 4.1 2.9A8.3 8.3 0 0 1 8 23.1c-.5 0-1 0-1.5-.1A11.7 11.7 0 0 0 13 25c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.4-1.2 1.9-2z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </main>
    );
}