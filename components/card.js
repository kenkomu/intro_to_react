export default card ({profileName, content,imageUrl}){

    return <div className="bg-gray-50 rounded-lg shadow-lg p-10 max-w-[500px] h-[300px]">
    <img src={imageUrl} width={50} height={50} className="rounded-full"

    </div>
}