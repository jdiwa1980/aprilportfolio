const Tools = () => {

    const toolsList = [
        {
            title: "Productivity & Communication",
            tools:[
                "Microsoft Office Suite",
                "Google Workspace",
                "Zoom / Google Meet",
                "Microsoft Teams"
            ]

        },
        {
            title: "Project & Task Management",
            tools:[
                "Notion",
                "Slacks",
                "Fresh Desk",
            ]

        },
        {
            title: "Digital Collaboration Tool",
            tools:[
                "Sharepoint",
                "Dropbox",
                "Google Drive",
                "OneDerive"
            ]

        },

    ]

    return ( 
        <section id="tools"
                 className="bg-background-litegray py-32"
        >
            <div className="container relative z-10 mx-auto px-6">
                {/* Title  */}
                <div>
                    <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                    Tools & <br />
                    Platform <br />
                    </h1>

                </div>
                {/* Cards  */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300 mx-auto">
                {/* Tools Cards  */}
                {toolsList.map((item, idx) => (
                    <div className=" bg-white/40 backdrop-blur-md p-8 rounded-4xl animate-fade-in shadow-lg hover:-translate-y-1 hover:bg-white/50 transition-all duration-300 text-left"
                         key={idx}
                         style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        <h3 className="text-darkgrey text-lg font-semibold mb-2">
                                    {item.title}
                        </h3>
                        <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed text-darkgrey">
                        {item.tools.map((platform, platformIdx) => (                            
                            <li key={platformIdx}>{platform}</li>
                        ))}
                        </ul>
                        

                    </div>
                ))}
                </div>
            </div>

        </section>
     );
}
 
export default Tools;