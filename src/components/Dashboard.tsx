import { Bars3Icon } from "@heroicons/react/24/outline";
import Navbar from "../helper/Navbar";
import { PaintBrushIcon } from "@heroicons/react/16/solid";

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
                                                <div className="flex gap-x-3">
                                                    <PaintBrushIcon className="w-5 h-5" style={{color: item.active ? "#686868" : "#B2B2B2"}} />
                                                    <Bars3Icon className="w-5 h-5 text-[#b2b2b2]" />
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