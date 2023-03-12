export default function Footer() {
    return (
        <div className=" bg-black h-[8rem] text-center">
            <hr className=" border-gray-700"/>
            <h1 className=" text-gray-500 pb-3 pt-7"> Copyright Michal Michalik {new Date().getFullYear() } </h1>
            <h2 className=" text-gray-500 pb-4"> This website was build by me in purpose of learning new stuff :) </h2>
          </div>
    )
}
