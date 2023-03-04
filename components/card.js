export default function Card({profileName, content, imageUrl}){
    return(
        <div className="bg-gray-50 rounded-lg shadow-lg p-10 w-[500px] h-[300px]">
            <div className="flex gap-5">
            <img src={imageUrl} width={50} height={50} className="rounded-full"/>
            <h1 className="text-2xl text-slate-600 font-bold">{profileName}</h1>
            </div>

            <p className="pt-7">{content}</p>
        </div>
    )
}