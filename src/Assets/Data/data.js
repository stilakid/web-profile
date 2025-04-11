// Components
import { WallusCaption, WallusContent } from "../../Pages/Projects/Wallus/WallusContent";
import { BunnyWorldCaption, BunnyWorldContent } from "../../Pages/Projects/BunnyWorld/BunnyWorldContent";
import { CMSCaption, CMSContent } from "../../Pages/Projects/CMS/CMSContent";
import { WebProfileCaption, WebProfileContent } from "../../Pages/Projects/WebProfile/WebProfileContent";
import { CartaCaption, CartaContent } from "../../Pages/Projects/Carta/CartaContent";
import { BlenderCaption, BlenderContent } from "../../Pages/Projects/Blender/BlenderContent";
import { ModerationCaption, ModerationContent } from "../../Pages/Projects/Moderation/ModerationContent";
import { CapsuleCaption, CapsuleContent } from "../../Pages/Projects/Capsule/CapsuleContent";
import { CS224NCaption, CS224NContent } from "../../Pages/Projects/CS224N/CS224NContent";
import { CS224SCaption, CS224SContent } from "../../Pages/Projects/CS224S/CS224SContent";
import { CS137ACaption, CS137AContent } from "../../Pages/Projects/CS137A/CS137AContent";
import Dance from "../../Pages/Hobbies/Dance/Dance";
import Music from "../../Pages/Hobbies/Music/Music";
import Rockets from "../../Pages/Hobbies/Rockets/Rockets";
import VideoEditing from "../../Pages/Hobbies/VideoEditing/VideoEditing";


const data = {
    projects: {
        capsule: {
            id: "project-capsule",
            url: "/projects/capsule",
            title: "Capsule",
            date: "Mar 11 2024",
            color: {
                background: "bg-gradient-to-r from-capsule-left to-capsule-right",
                border: "border-green-900",
                text: "text-white",
            },
            githubUrl: null,
            toolsUsed: ["Flutter", "Firebase", "Figma", "Google Cloud Platform"],
            navLinks: [
                [["What is Capsule?", "project-capsule-1"], ["Introduction", "project-capsule-1a"], ["Background/Context", "project-capsule-1b"], ["Team Goals", "project-capsule-1c"], ["App Objective", "project-capsule-1d"]],
                [["Prototype Development", "project-capsule-2"], ["Initial Prototype", "project-capsule-2a"], ["Figma Prototype", "project-capsule-2b"], ["User Reviews", "project-capsule-2c"], ["Reflection", "project-capsule-2d"]],
                [["App Development", "project-capsule-3"], ["Firebase", "project-capsule-3a"], ["Google Cloud Platform", "project-capsule-3b"]],
                [["User Testing", "project-capsule-4"], ["Testing Plan", "project-capsule-4a"], ["Actionable Results", "project-capsule-4b"], ],
                [["Measures for Success", "project-capsule-5"], ["KPIs", "project-capsule-5a"], ["OKRs", "project-capsule-5b"]],
                [["Our Team", "project-capsule-6"]],
                [["Outcome & Reflection", "project-capsule-7"], ["App Presentation", "project-capsule-7a"], ["Team Evolution", "project-capsule-7b"], ["Potential Expansion", "project-capsule-7c"], ["Conclusion", "project-capsule-7d"]],
            ],
            caption: <CapsuleCaption />,
            details: <CapsuleContent />
        },

        cs224n: {
            id: "project-cs224n",
            url: "/projects/cs224n",
            title: "Stanford Course & Quarter Classification",
            date: "Mar 18 2024",
            color: {
                background: "bg-gradient-to-r from-cs224n-left to-cs224n-right",
                border: "border-yellow-900",
                text: "text-white",
            },
            githubUrl: "https://github.com/stilakid/cs224n-project",
            toolsUsed: ["PyTorch", "BERT", "FLAN-T5", "DistilBERT", "Google Cloud Platform", "Google Colab", "Hugging Face"],
            navLinks: [
                [["Abstract", "project-cs224n-1"]],
                [["Our Team", "project-cs224n-2"]],
                [["Introduction", "project-cs224n-3"]],
                [["Related Work", "project-cs224n-4"], ["Discriminative vs Generative Models", "project-cs224n-4a"], ["Baseline for Finetuning BERT", "project-cs224n-4b"]],
                [["Approach", "project-cs224n-5"]],
                [["Experiments", "project-cs224n-6"], ["Data", "project-cs224n-6a"], ["Evaluation method", "project-cs224n-6b"], ["Experimental details", "project-cs224n-6c"], ["Results", "project-cs224n-6d"]],
                [["Analysis", "project-cs224n-7"]],
                [["Conclusion", "project-cs224n-8"]],
                [["References", "project-cs224n-9"]],
            ],
            caption: <CS224NCaption />,
            details: <CS224NContent />
        },        

        wallus: {
            id: "project-wallus",
            url: "/projects/wallus",
            title: "Wallus: Your Personal Finance App",
            date: "Dec 09 2022",
            color: {
                background: "bg-gradient-to-r from-wallus-left to-wallus-right",
                border: "border-blue-900",
                text: "text-white",
            },
            githubUrl: "https://github.com/stilakid/CS147-Wallus",
            toolsUsed: ["React Native", "Supabase", "Expo", "Figma", "Adobe Premiere Pro", "Adobe After Effects"],
            navLinks: [
                [["What is Wallus?", "project-wallus-1"], ["Overview", "project-wallus-1a"], ["Vision", "project-wallus-1b"], ["Rationale", "project-wallus-1c"]],
                [["Concept Video", "project-wallus-2"]],
                [["Demo", "project-wallus-3"]],
                [["Try the App!", "project-wallus-4"]],
                [["Our Team", "project-wallus-5"]],
                [["Outcome & Reflection", "project-wallus-6"], ["Project Expo", "project-wallus-6a"], ["Key Takeaways", "project-wallus-6b"], ["Future Investments", "project-wallus-6c"]],
            ],
            caption: <WallusCaption />,
            details: <WallusContent />
        },

        bunnyWorld: {
            id: "project-bunny",
            url: "/projects/bunnyWorld",
            title: "Bunny World",
            date: "Mar 17 2023",
            color: {
                background: "bg-gradient-to-r from-bunny-left to-bunny-right",
                border: "border-purple-900",
                text: "text-white",
            },
            githubUrl: null,
            toolsUsed: ["Java", "Android Studio", "SQLite"],
            navLinks: [
                [["What is Bunny World?", "project-bunny-1"], ["Overview", "project-bunny-1a"], ["Page, Objects, and Inventory", "project-bunny-1b"], ["Shape Inspector", "project-bunny-1c"], ["Dynamic Page Tab", "project-bunny-1d"], ["Dynamic Page Tab", "project-bunny-1e"], ["Script Manager", "project-bunny-1f"]],
                [["Script Manager Details", "project-bunny-2"], ["Scripts", "project-bunny-2a"], ["Script Manager UI", "project-bunny-2b"], ["UI Updates Live Programmatically", "project-bunny-2c"], ["Eliminates Redundancy", "project-bunny-2d"], ["Keeps All Scripts Updated", "project-bunny-2e"]],
                [["Our Team", "project-bunny-3"]],
                [["Outcome & Reflection", "project-bunny-4"], ["Key Takeaways", "project-bunny-4a"]],
            ],
            caption: <BunnyWorldCaption />,
            details: <BunnyWorldContent />
        },

        sura: {
            id: "project-cms",
            url: "/projects/sura",
            title: "Content Management System",
            date: "Mar 23 2022",
            color: {
                background: "bg-gradient-to-r from-cms-left to-cms-right",
                border: "border-cyan-900",
                text: "text-white",
            },
            githubUrl: "https://github.com/stilakid/SURA-Content-Management-System",
            toolsUsed: ["Vanilla JS", "MongoDB", "Node.js"],
            navLinks: [
                [["What is the Project About?", "project-cms-1"]],
                [["Features", "project-cms-2"], ["Admin Controls", "project-cms-2a"], ["Make New Webpage", "project-cms-2b"], ["Edit Webpage", "project-cms-2c"], ["Navbar Editor", "project-cms-2d"], ["Sidebar", "project-cms-2e"], ["Section Templates", "project-cms-2f"], ["Background Editor", "project-cms-2g"], ["Backend", "project-cms-2h"]],
                [["Outcome & Reflection", "project-cms-3"], ["Key Takeaways", "project-cms-3a"]],
            ],
            caption: <CMSCaption />,
            details: <CMSContent />
        },

        webProfile: {
            id: "project-profile",
            url: "/projects/webProfile",
            title: "Web Profile",
            date: "Mar 17 2023",
            color: {
                background: "bg-gradient-to-r from-webprofile-left to-webprofile-right",
                border: "border-gray-700",
                text: "text-white",
            },
            githubUrl: "https://github.com/stilakid/web-profile",
            toolsUsed: ["React", "Tailwind CSS", "React Spring"],
            navLinks: [
                [["About this Project", "project-profile-1"]]
            ],
            caption: <WebProfileCaption />,
            details: <WebProfileContent />
        },

        cs224s: {
            id: "project-cs224s",
            url: "/projects/cs224s",
            title: "Unstuttered Speech Synthesis from Informally Structured Stuttered Text",
            date: "Mar 17 2024",
            color: {
                background: "bg-gradient-to-r from-webprofile-left to-webprofile-right",
                border: "border-gray-700",
                text: "text-white",
            },
            githubUrl: null,
            toolsUsed: ["React", "Tailwind CSS", "React Spring"],
            navLinks: [
                [["About this Project", "project-profile-1"]]
            ],
            caption: <CS224SCaption />,
            details: <CS224SContent />
        },

        cs137a: {
            id: "project-cs137a",
            url: "/projects/cs137a",
            title: "Autonomous Moving Robot",
            date: "Mar 17 2024",
            color: {
                background: "bg-gradient-to-r from-webprofile-left to-webprofile-right",
                border: "border-gray-700",
                text: "text-white",
            },
            githubUrl: "https://github.com/ElisabethHolm/cs137a",
            toolsUsed: ["React", "Tailwind CSS", "React Spring"],
            navLinks: [
                [["About this Project", "project-profile-1"]]
            ],
            caption: <CS137ACaption />,
            details: <CS137AContent />
        },

        carta: {
            id: "project-carta",
            url: "/projects/carta",
            title: "Scrapping Carta!",
            date: "Mar 10 2022",
            color: {
                background: "bg-gradient-to-r from-carta-left to-carta-right",
                border: "border-red-900",
                text: "text-white",
            },
            githubUrl: "https://github.com/stilakid/PWR2_Carta_Webscrapping.git",
            toolsUsed: ["JavaScript", "Python", "Tampermonkey"],
            navLinks: [
                [["About this Project", "project-carta-1"], ["Overview", "project-carta-1a"], ["Rationale", "project-carta-1b"]],
                [["Data Collection and Analysis", "project-carta-2"], ["Data Collection", "project-carta-2a"], ["Data Analysis", "project-carta-2b"], ],
                [["Outcome & Reflection", "project-carta-3"], ["Results", "project-carta-3a"], ["Reflection", "project-carta-3b"]],
            ],
            caption: <CartaCaption />,
            details: <CartaContent />
        },

        blender: {
            id: "project-blender",
            url: "/projects/blender",
            title: "Fun with Blender",
            date: "Dec 09 2022",
            color: {
                background: "bg-gradient-to-r from-blender-left to-blender-right",
                border: "border-orange-900",
                text: "text-white",
            },
            githubUrl: null,
            toolsUsed: ["Blender", "Python", "TurboSquid"],
            navLinks: [
                [["About this Project", "project-blender-1"], ["Overview", "project-blender-1a"]],
                [["Rendered Image", "project-blender-2"], ["Final Image", "project-blender-2a"], ["Variant A (Different Angle)", "project-blender-2b"], ["Variant B (No Texture)", "project-blender-2c"], ["Variant C (No Texture and Volumetric Domain)", "project-blender-2d"]],
                [["Report", "project-blender-3"], ["Inspiration", "project-blender-3a"], ["Motivational Images", "project-blender-3b"]],
                [["Assets", "project-blender-4"], ["Bridge", "project-blender-4a"], ["Asphalt", "project-blender-4b"], ["Road Barrier", "project-blender-4c"], ["Streetlights", "project-blender-4d"], ["Street Railing", "project-blender-4e"], ["Pavement", "project-blender-4f"], ["In-road warning lights", "project-blender-4g"], ["Cars", "project-blender-4h"], ["Smoke", "project-blender-4i"], ["Fog/Mist", "project-blender-4j"], ["Rain", "project-blender-4k"], ["Sky Dome", "project-blender-4l"]],
                [["Outcome & Reflection", "project-blender-5"]]
            ],
            caption: <BlenderCaption />,
            details: <BlenderContent />
        },

        moderation: {
            id: "project-moderation",
            url: "/projects/moderation",
            title: "CSAM Moderation",
            date: "Jun 08 2023",
            color: {
                background: "bg-gradient-to-r from-moderation-left to-moderation-right",
                border: "border-moderation-right",
                text: "text-white",
            },
            githubUrl: "https://github.com/stilakid/cs152bots.git",
            toolsUsed: ["Python", "Pytorch", "Google Cloud Platform", "PyCharm", "Discord", "Canva"],
            navLinks: [
                [["About this Project" , "project-moderation-1"], ["Problem Description", "project-moderation-1a"], ["Our Goal", "project-moderation-1b"]],
                [["Policy", "project-moderation-2"], ["Main Policy", "project-moderation-2a"], ["Exceptions", "project-moderation-2b"], ["Policy Violation", "project-moderation-2c"], ["False Reporting Policy", "project-moderation-2d"]],
                [["Technical Backend", "project-moderation-3"], ["Features", "project-moderation-3a"], ["User Reporting Flow", "project-moderation-3b"], ["Moderator Flow", "project-moderation-3c"], ["Classifier Evaluation", "project-moderation-3d"]],
                [["Demo", "project-moderation-4"]],
                [["Our Team", "project-moderation-5"]],
                [["Outcome & Reflection", "project-moderation-6"], ["Project Expo", "project-moderation-6a"], ["Looking Forward", "project-moderation-6b"]]
            ],
            caption: <ModerationCaption />,
            details: <ModerationContent />
        }
    },
    hobbies: {
        dance: {
            name: "Dance",
            url: "/hobbies/dance",
            content: <Dance />
        },
        music: {
            name: "Music",
            url: "/hobbies/music",
            content: <Music />
        },
        rockets: {
            name: "Rockets",
            url: "/hobbies/rockets",
            content: <Rockets />
        },
        videoEditing: {
            name: "Video Editing",
            url: "/hobbies/videoEditing",
            content: <VideoEditing />
        }
    }
}

export default data;