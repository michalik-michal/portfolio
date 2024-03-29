import FooterIcons from 'components/common/FooterIcons.jsx';

export default function Footer() {
    return (
        <div className=" bg-black h-[9rem] text-center sm:px-0 px-5">
            <hr className=" border-gray-700"/>
            <FooterIcons/>
            <h1 className=" text-gray-500 py-3"> Copyright Michal Michalik {new Date().getFullYear() } </h1>
            <h2 className=" text-gray-500 pb-4"> This website was build by me using React and Tailwind in purpose of learning new stuff :) </h2>
          </div>
    )
}
