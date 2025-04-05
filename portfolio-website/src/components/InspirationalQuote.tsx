export const InspirationalQuote = () => {
    return (
        <>
            {/* Quote section */}
            <div className="bg-[var(--light-orange-10)] py-24 sm:py-32">
                <div id="animate-me" className="mx-auto opacity-0 max-w-7xl px-6 lg:px-8">
                <div className="text-center text-6xl font-semibold tracking-tight text-[var(--discord-gray)]">
                    "Absorb what is useful, Discard what is not, Add what is <span className="transition ease-in-out text-[var(--pinkish-red)] hover:-translate-y-1 hover:text-off-white duration-300">uniquely your own</span>."
                </div>
                <div className="text-right text-2xl font-semibold text-[var(--discord-lighter-gray)] mr-[10%] mt-[3%]">— Bruce Lee</div>
                </div>
            </div>
        </>
    )
};