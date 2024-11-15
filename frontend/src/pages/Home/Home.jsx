import SideBar from './../../components/SideBar/SideBar';
import MessageContainer from './../../components/messages/MessageContainer';

const Home = () => {
    return (
        <div className=' h-screen flex justify-center items-center'>
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <SideBar />
            <MessageContainer />
        </div>
        </div>
    )
}

export default Home