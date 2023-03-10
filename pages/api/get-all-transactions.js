const posts = [
    {
        profileName: "Komu",
        imageUrl:"komu.jpg",
        content: "I really love Kamilimu",
    },
    {
        profileName: "Azziad",
        imageUrl:"azziad.jpeg",
        content: "I really love Kamilimu",
    },
    {
        profileName: "Pexel",
        imageUrl:"img2.jpg",
        content: "I really love Kamilimu",
    }
]

export default function handler(req, res){
    res.status(200).json({posts})
}