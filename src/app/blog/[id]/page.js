import React from 'react';

// For demonstration purposes, we'll use a simplified data fetching
// In a real application, you would fetch this from an API or database
const allArticles = [
    {
        id: 1,
        title: "Be someone that everyone just thinks to be. Not someone who doesn't know himself",
        category: "Social media",
        categoryColor: "bg-[#FDC0C5]",
        image: "/videos/articlevideo.mp4",
        date: "February 24, 2025",
        content: ["Pirate ipsum arrgh bounty warp jack. Fluke poop schooner nest warp execution bucko. Pounders dock roger pirate seas ipsum jennys splice. Of chain gold blossom a bilge pay maroon hogshead her. Dock round black just cup anchor. Pinnace splice topsail splice mutiny pay weigh yarr warp parrel. Mizzen tails coast me dead spirits corsair bounty. Log crow's lanyard fluke shrouds chase belay ketch dead. Just gold davy poop measured. Boom spanish keelhaul gabion weigh jones' measured sail chase.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Hogshead cutlass maroon privateer arr jolly. Lugsail boat main jack blow lugsail chains buccaneer. Of black maroon chain ballast. Lubber yellow arr furl locker. Brace chase sheet coxswain yellow anchor. Just scurvy yard arr keelhaul. Fluke bilge fleet scurvy boat hempen spot chain tender.",
            "Roger spirits shiver pirate aye hail-shot anchor crack davy. Reef road bilged bilge mutiny. Crimp lee weigh shot plate chandler tails. Pin brethren piracy splice brethren tails bounty. Guns seas o'nine spyglass fluke boatswain arr. American lubber belay on belaying arrgh arrgh lass gold. To tales davy gangplank cup chandler. Men a fer brig davy driver locker piracy prey hogshead.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Splice mutiny chantey chase spot jack gunwalls."
        ],
        featured: true,
    },
    {
        id: 2,
        title: "Be someone that everyone just thinks to be. Not someone who doesn't know himself",
        category: "Social media",
        categoryColor: "bg-[#DD8100]",
        image: "/images/article7.jpg",
        date: "February 24, 2025",
        content: ["Pirate ipsum arrgh bounty warp jack. Fluke poop schooner nest warp execution bucko. Pounders dock roger pirate seas ipsum jennys splice. Of chain gold blossom a bilge pay maroon hogshead her. Dock round black just cup anchor. Pinnace splice topsail splice mutiny pay weigh yarr warp parrel. Mizzen tails coast me dead spirits corsair bounty. Log crow's lanyard fluke shrouds chase belay ketch dead. Just gold davy poop measured. Boom spanish keelhaul gabion weigh jones' measured sail chase.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Hogshead cutlass maroon privateer arr jolly. Lugsail boat main jack blow lugsail chains buccaneer. Of black maroon chain ballast. Lubber yellow arr furl locker. Brace chase sheet coxswain yellow anchor. Just scurvy yard arr keelhaul. Fluke bilge fleet scurvy boat hempen spot chain tender.",
            "Roger spirits shiver pirate aye hail-shot anchor crack davy. Reef road bilged bilge mutiny. Crimp lee weigh shot plate chandler tails. Pin brethren piracy splice brethren tails bounty. Guns seas o'nine spyglass fluke boatswain arr. American lubber belay on belaying arrgh arrgh lass gold. To tales davy gangplank cup chandler. Men a fer brig davy driver locker piracy prey hogshead.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Splice mutiny chantey chase spot jack gunwalls."
        ],
        featured: false,
    },
    {
        id: 3,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "Self Growth",
        categoryColor: "bg-[#DBD700] ",
        image: "/images/article8.jpg",
        date: "5h 5min ago",
        content: ["Pirate ipsum arrgh bounty warp jack. Fluke poop schooner nest warp execution bucko. Pounders dock roger pirate seas ipsum jennys splice. Of chain gold blossom a bilge pay maroon hogshead her. Dock round black just cup anchor. Pinnace splice topsail splice mutiny pay weigh yarr warp parrel. Mizzen tails coast me dead spirits corsair bounty. Log crow's lanyard fluke shrouds chase belay ketch dead. Just gold davy poop measured. Boom spanish keelhaul gabion weigh jones' measured sail chase.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Hogshead cutlass maroon privateer arr jolly. Lugsail boat main jack blow lugsail chains buccaneer. Of black maroon chain ballast. Lubber yellow arr furl locker. Brace chase sheet coxswain yellow anchor. Just scurvy yard arr keelhaul. Fluke bilge fleet scurvy boat hempen spot chain tender.",
            "Roger spirits shiver pirate aye hail-shot anchor crack davy. Reef road bilged bilge mutiny. Crimp lee weigh shot plate chandler tails. Pin brethren piracy splice brethren tails bounty. Guns seas o'nine spyglass fluke boatswain arr. American lubber belay on belaying arrgh arrgh lass gold. To tales davy gangplank cup chandler. Men a fer brig davy driver locker piracy prey hogshead.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Splice mutiny chantey chase spot jack gunwalls."
        ],
        featured: false,
    },
    {
        id: 4,
        title: "Pirate ipsum arrgh bounty warp jack.",
        category: "Social media",
        categoryColor: "bg-[#2954FF]",
        image: "/images/article9.jpg",
        date: "5h 5min ago",
        content: ["Pirate ipsum arrgh bounty warp jack. Fluke poop schooner nest warp execution bucko. Pounders dock roger pirate seas ipsum jennys splice. Of chain gold blossom a bilge pay maroon hogshead her. Dock round black just cup anchor. Pinnace splice topsail splice mutiny pay weigh yarr warp parrel. Mizzen tails coast me dead spirits corsair bounty. Log crow's lanyard fluke shrouds chase belay ketch dead. Just gold davy poop measured. Boom spanish keelhaul gabion weigh jones' measured sail chase.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Hogshead cutlass maroon privateer arr jolly. Lugsail boat main jack blow lugsail chains buccaneer. Of black maroon chain ballast. Lubber yellow arr furl locker. Brace chase sheet coxswain yellow anchor. Just scurvy yard arr keelhaul. Fluke bilge fleet scurvy boat hempen spot chain tender.",
            "Roger spirits shiver pirate aye hail-shot anchor crack davy. Reef road bilged bilge mutiny. Crimp lee weigh shot plate chandler tails. Pin brethren piracy splice brethren tails bounty. Guns seas o'nine spyglass fluke boatswain arr. American lubber belay on belaying arrgh arrgh lass gold. To tales davy gangplank cup chandler. Men a fer brig davy driver locker piracy prey hogshead.",
            "Splice mutiny chantey chase spot jack gunwalls. Yawl crack killick coxswain mutiny spot. Jack jack anchor hands tails. Weigh lateen yawl aft pin. Nipperkin buccaneer arr fleet plate overhaul brig.",
            "Clipper pillage driver across shrouds prey boom round brace. Coast hail-shot brace pirate gangway swab. Brace spirits coffer salmagundi belay gangplank pirate. Fleet roger men lateen hang no pillage. Deck down cup seven sails lee salmagundi pin. Boom jones' yawl tender down smartly tea grog boom seven. Swab line pirate cup on. O'nine gabion privateer coxswain furl lugsail.",
            "Splice mutiny chantey chase spot jack gunwalls."
        ],
        featured: false,
    },
];

export async function generateMetadata({ params }) {
    const articleId = parseInt(params.id);
    const article = allArticles.find(art => art.id === articleId);

    if (!article) {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
        };
    }

    // Join the array content for the description metadata
    const fullContentString = Array.isArray(article.content) ? article.content.join(' ') : article.content;

    return {
        title: article.title,
        description: fullContentString.substring(0, 150) + '...', // Take a snippet of content for description
    };
}


const BlogDetailsPage = ({ params }) => {
    const articleId = parseInt(params.id); // Get the ID from the URL
    const article = allArticles.find(art => art.id === articleId);

    if (!article) {
        return (
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold">Article Not Found</h1>
            </div>
        );
    }
    return (
        <section className="py-16 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6">
                    <span
                        className={`${article.categoryColor} text-[#333333] px-4 py-1 rounded-full text-2xl font-normal`}
                    >
                        {article.category}
                    </span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-slug">
                    {article.title}
                </h1>
                <p className="text-[#7C7C7C] text-md lg:text-xl mb-8">{article.date}</p>
                <div className="mb-8">
                    {article.image.endsWith('.mp4') ? (
                        <video
                            src={article.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto max-h-[690px] object-cover rounded-[30px]"
                        />
                    ) : (
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-auto max-h-[690px] object-cover rounded-[30px]"
                        />
                    )}
                </div>

                <div className="prose prose-invert text-lg ps-8 pt-8">
                    {Array.isArray(article.content) ? (
                        article.content.map((paragraph, index) => (
                            <p key={index} className='text-black text-4xl my-8 leading-tight font-normal'>{paragraph}</p>
                        ))
                    ) : (
                        <p className='text-black text-4xl font-normal'>{article.content}</p>
                    )}
                </div>
                <div className="flex items-center justify-center mt-24 mb-10 gap-6">
                    {/* Profile Image */}
                    <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img src="/images/Profileimage.jpg" alt="Saleh Bilal" className="w-full h-full object-cover" />
                    </div>

                    {/* Profile Info */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl lg:text-4xl font-medium text-black">Saleh Bilal</h1>
                        <p className="text-lg lg:text-base font-normal text-[#7A7A7AB2]">Founder @ DGTL Network</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsPage;