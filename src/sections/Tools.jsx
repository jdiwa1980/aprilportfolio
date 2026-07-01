import Platform from "../component/platforms";

const Tools = () => {

    const toolsList = [
        {
            title: "Productivity & Communication",
            tools:[
                "Microsoft Office Suite",
                "Google Workspace",
                "Zoom ",
                "Google Meet",
                "Microsoft Teams"
            ]

        },
        {
            title: "Project & Task Management",
            tools:[
                "Notion",
                "Slack",
                "Fresh Desk",
            ]

        },
        {
            title: "Digital Collaboration",
            tools:[
                "Sharepoint",
                "Dropbox",
                "Google Drive",
                "OneDrive"
            ]

        },

    ]

    return ( 
        <section className="border-t border-[#e5e1d8] py-20 md:py-24" id="tools">
            <div className="px-6 md:px-12 lg:px-24 mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-light-grey mb-4">
                    Tools & Platform — 05
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight tracking-tight max-w-2xl">
                    The everyday stack that keeps work moving.
                </h2>
            </div>
            <div className="relative overflow-hidden border-y border-[#e5e1d8] py-8 bg-[#f9f8f6]">
                <Platform />
            </div>
            <div className="px-6 md:px-12 lg:px-24 mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                {toolsList.map((item, idx) => (
                    <div key={idx}>
                        <p className="text-xs tracking-[0.25em] uppercase text-light-grey mb-4">
                            {item.title}
                        </p>
                            {item.tools.map((app, ind) => (
                                <ul className="space-y-2" key={ind}>
                                    <li className="text-sm font-light text-dark border-b border-[#e5e1d8] pb-2 pt-2">
                                        {app}
                                    </li>
                                </ul>
                            ))}
                        
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Tools;