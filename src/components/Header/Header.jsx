import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between p-4 px-6 items-center mx-auto border-b-2'>
            <h2 className='text-3xl font-bold'>Knowladge Kafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;