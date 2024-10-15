import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User, Calendar, Users, Clock, MapPin } from 'lucide-react';

const TourSummary: React.FC = () => {
  const { userInfo, selectedActivities } = useSelector((state: RootState) => state.tour);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Tour Summary</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <User size={18} className="mr-2 text-blue-500" />
            <span className="font-medium">Name:</span>
            <span className="ml-2">{userInfo.name}</span>
          </div>
          <div className="flex items-center">
            <User size={18} className="mr-2 text-blue-500" />
            <span className="font-medium">Email:</span>
            <span className="ml-2">{userInfo.email}</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="mr-2 text-blue-500" />
            <span className="font-medium">Number of People:</span>
            <span className="ml-2">{userInfo.numberOfPeople}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-blue-500" />
            <span className="font-medium">Start Date:</span>
            <span className="ml-2">{userInfo.startDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2 text-blue-500" />
            <span className="font-medium">Number of Days:</span>
            <span className="ml-2">{userInfo.numberOfDays}</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
        <ul className="space-y-2">
          {selectedActivities.map((activity, index) => (
            <li key={activity.id} className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                {index + 1}
              </div>
              <div>
                <span className="font-medium">{activity.name}</span>
                <span className="text-sm text-gray-500 ml-2">({activity.category})</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 p-4 bg-green-100 rounded-md">
          <p className="text-green-800 font-medium">
            Thank you for planning your tour with us! We will contact you soon with a price quote for the tour.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourSummary;