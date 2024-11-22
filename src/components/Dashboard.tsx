import Navbar from "../helper/Navbar";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

const Dashboard = () => {

    const DashboardData = [
        {
            title: "Available Positions",
            value: "24",
            notif: "4 Urgently needed",
            color: "#FEEFE7"
        },
        {
            title: "Job Open",
            value: "10",
            notif: "4 Active hiring",
            color: "#E8F0FB"
        },
        {
            title: "new employees",
            value: "24",
            notif: "4 Department",
            color: "#FDEBF9"
        }
    ]

    const AnnouncementData = [
        {
            title: "Outing shcedule for every departement",
            time: "5 Minutes ago",
            active: true
        },
        {
            title: "Meeting HR Departement",
            time: "Yesterday 12:30 PM",
            active: false
        },
        {
            title: "IT Department need two more talents for UX/UI Designer position",
            time: "yesterday 09:15 AM",
            active: false
        }

    ]

    return (
        <div className="w-full md:px-28 px-0">
            <Navbar />
            <div className="w-full py-8 md:px-0 px-5">
                <h1 className="text-2xl font-bold">
                    Dashboard
                </h1>
                <div className="w-full flex 2xl:flex-row flex-col mt-5 gap-10">
                    <div className="2xl:w-1/2 w-full">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {
                            DashboardData.map((item, index) => {
                                return (
                                    <div key={index} className="p-6 flex flex-col items-start gap-y-2 rounded-lg" style={{backgroundColor: item.color}}>
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <span className="text-4xl font-semibold">{item.value}</span>
                                        <span className="text-sm font-semibold">{item.notif}</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="mt-5 border border-gray-200 rounded-md pt-6  flex flex-col">
                            <h2 className="text-lg font-medium px-6">
                                Announcement
                            </h2>
                            <div className="mt-5 flex flex-col gap-y-2 px-6 overflow-y-auto">
                                {
                                    AnnouncementData.map((item, index) => {
                                        return (
                                            <div key={index} className="p-3  flex justify-between items-center gap-y-2 bg-[#FAFAFA] border border-gray-200 rounded-md">
                                                <div className="">
                                                    <h2 className="text-lg font-normal">{item.title}</h2>
                                                    <span className="text-xs ">{item.time}</span>
                                                </div>
                                                <div className="flex gap-x-5 items-center">
                                                    <svg version="1.1" height={"22px"} width={"22px"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xmlSpace="preserve">
                                                        <g><g><path fill={item.active ? "#686868" : "#B2B2B2"} d="M244.2,81L175,11.8c-1.3-1.3-3.2-2-5.1-1.7c-1.9,0.2-3.5,1.3-4.5,3c-5.9,10.4-7,23.5-3.1,36.7L116,95.9c-12-6-24.6-9.2-36.9-9.2c-16.4,0-31.3,5.8-41.8,16.4c-1.1,1.1-1.8,2.7-1.8,4.3c0,1.6,0.7,3.2,1.8,4.3l43.8,43.8L11.5,236c-2.1,2.4-2,6,0.3,8.3c1.2,1.2,2.7,1.8,4.3,1.8c1.4,0,2.8-0.5,3.9-1.5l80.5-69.6l43.8,43.8c2.4,2.4,6.2,2.4,8.6,0c19-18.9,21.6-50.1,7.2-78.8l46.3-46.3c13,3.9,26.4,2.8,36.7-3.1c1.6-0.9,2.7-2.6,3-4.5C246.2,84.2,245.6,82.3,244.2,81z"/></g></g>
                                                    </svg>
                                                    <EllipsisHorizontalIcon className="w-6 h-6 text-[#b2b2b2]" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="mx-auto border-t border-gray-200 py-3 mt-1 w-full text-sm text-[#F65151]">
                                See All Announcements
                            </button>
                        </div>
                    </div>
                    <div className="2xl:w-1/2 w-full space-y-5">
                        <div className="bg-[#121843] rounded-md px-6">
                            <h2 className="bg-[#1B204A] text-white py-4 px-5">
                                Recently Activity
                            </h2>
                            <div className="py-6 space-y-2">
                                <span className="text-xs  text-gray-200">
                                    10.40 AM, Fri 10 Sept 2021 
                                </span>
                                <h2 className="font-semibold text-xl text-white">
                                    You Posted a New Job
                                </h2>
                                <p className="text-sm text-gray-200">
                                    kindly check the requirements and terms of work  and make sure everuthing is right.
                                </p>
                                <div className="flex w-full justify-between items-center mt-auto pt-5">
                                    <span className="text-white text-sm">
                                        Today you makes 12 Activity 
                                    </span>
                                    <button className="px-4 py-2 text-sm text-white bg-[#F65151] rounded-md font-semibold">
                                        See All Activity
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-md border border-gray-200">
                            <h2 className=" text-xl font-semibold p-5">
                                Upcoming Schedule
                            </h2>
                            <div className="px-5">
                                <div className="space-y-2">
                                    <span className="text-sm font-medium text-gray-400">
                                        Priority
                                    </span>
                                    <div>
 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;