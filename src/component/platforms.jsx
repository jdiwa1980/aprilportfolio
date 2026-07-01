

const Platform = () => {
    const platform =[
    "Microsoft Office",
    "Google Workspace",
    "Zoom",
    "Google Meet",
    "Microsoft Teams",
    "Notion",
    "Slack",
    "Fresh Desk",
    "SharePoint",
    "Dropbox",
    "Google Drive",
    "OneDrive",
];

    return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-background to-transparent z-10" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-background to-transparent z-10" />

      <div className="marquee-track">
        <div className="marquee-group">
          {platform.map((skill) => (
            <div key={skill} className="marquee-item">
              <span className="font-serif text-3xl md:text-4xl italic font-light whitespace-nowrap">
                {skill}
              </span>
              <span className="text-light-grey text-2xl">✦</span>
            </div>
          ))}
        </div>

        <div className="marquee-group" aria-hidden="true">
          {platform.map((skill) => (
            <div key={`${skill}-copy`} className="marquee-item">
              <span className="font-serif text-3xl md:text-4xl italic font-light whitespace-nowrap">
                {skill}
              </span>
              <span className="text-light-grey text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div> 
    )
}

export default Platform;