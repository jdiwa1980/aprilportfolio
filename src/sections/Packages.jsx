const Packages = () => {
    const packages = [
        {
            name: "Starter Support Package",
            rate: "$200 - $300 / Month",
            idealfor: `Small businesses or startups requiring light 
            operation support 20-30 hrs/month`,
            keyInclusions: `Email & calendar coordination, documentation management, reporting support,
            supplier follow-ups, basic administrative support`
        },
        {
            name: "Operations Support Package",
            rate: "$400 - $600 / Month",
            idealfor: `Growing businesses requiring ongoing project
            and operational coordination 40-60 hrs/month`,
            keyInclusions: `Project coordination, scheduling, quotations & proposals,
            client & contractor communication, reporting`
        },
        {
            name: "Project Operations Package",
            rate: "$800 - $1,200 / Month",
            idealfor: `Retail fit-out, installation, retrofitting, and
            multi-site projects 80-120 hrs/month`,
            keyInclusions: `End-to-end project coordination, budget tracking, supplier
            management, scheduling, workforce planning, client
            updates, operational workflow support`
        },
        {
            name: "Hourly Support",
            rate: "$10/hour",
            idealfor: `Flexible or short-term support
            Minimum 10 hrs/week recommended`,
            keyInclusions: "Operational & admininstrative support"
        }
    ]

    return ( 
        <section id="packages"
                 className="bg-background-litegray py-32"
        >
            <div className="container mx-auto px-6">
                <h1 className="text-darkgrey text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
                    Packages/ <br />
                    Rates
                </h1>
                {/* TABLE WRAPPER  */}
                <div className="overflow-x-auto shadow-md">
                    <table className="w-full border-separate border-spacing-1 bg-white">
                        {/* TABLE HEADER  */}
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="p-6 text-center text-sm font-semibold text-darkgrey uppercase tracking-wide">
                                    Package
                                </th>
                                <th className="p-6 text-center text-sm font-semibold text-darkgrey uppercase tracking-wide">
                                    Starting Rate
                                </th>
                                <th className="p-6 text-center text-sm font-semibold text-darkgrey uppercase tracking-wide">
                                    Ideal For
                                </th>
                                <th className="p-6 text-center text-sm font-semibold text-darkgrey uppercase tracking-wide">
                                    Key Inclusions
                                </th>
                            </tr>
                        </thead>
                        {/* TABLE BODY  */}
                        <tbody>
                            {packages.map((item, idx) => (
                               <tr key={idx}
                                   className="border-b border-gray-200 bg-gray-100/70"
                               >
                                <td className="p-6 text-darkgrey font-medium bg-background-litegray border border-white">
                                    {item.name}
                                </td>
                                <td className="p-6 text-darkgrey bg-background-litegray border border-white">
                                    {item.rate}
                                </td>
                                <td className="p-6 text-darkgrey leading-relaxed bg-background-litegray border border-white">
                                    {item.idealfor}
                                </td>
                                <td className="p-6 text-darkgrey leading-relaxed bg-background-litegray border border-white">
                                    {item.keyInclusions}
                                </td>

                               </tr> 
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>

        </section>
     );
}
 
export default Packages;