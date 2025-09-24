export function Main2() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <div className="flex justify-center mb-6">
                <button className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow text-lg">
                    Skills
                </button>
            </div>
            <p className="text-center mb-8 text-lg">
                The skills, tools and technologies I am really good at:
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                {/* JavaScript */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">JavaScript</span>
                </div>

                {/* TypeScript */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">TypeScript</span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">React</span>
                </div>

                {/* Next.js */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 bg-white rounded" />
                    <span className="mt-2 text-sm font-medium">Next.js</span>
                </div>
                {/* Node.js */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">Node.js</span>
                </div>

                {/* Express.js */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-12 h-12 bg-white rounded" />
                    <span className="mt-2 text-sm font-medium">Express.js</span>
                </div>
                {/* MongoDB */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">MongoDB</span>
                </div>

                {/* Socket.io */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.io" className="w-12 h-12 bg-white rounded" />
                    <span className="mt-2 text-sm font-medium">Socket.io</span>
                </div>
                {/* HTML5 */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">HTML5</span>
                </div>
                {/* CSS3 */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">CSS3</span>
                </div>
                {/* Tailwind CSS */}

                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                        alt="Tailwind CSS"
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm font-medium">Tailwind CSS</span>
                </div>
                {/* Git */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">Git</span>
                </div>
                
                {/* GitHub */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
                    <span className="mt-2 text-sm font-medium">GitHub</span>
                </div>
            </div>
        </main>
    )
}