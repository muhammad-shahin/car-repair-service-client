import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from '../../ReuseableComponents/Card/Card';
import Slider from '../../ReuseableComponents/Slider/Slider';
import SocialIcons from '../SocialICons/SocialIcons';

const TeamCard = () => {
  const [teamMembersData, setteamMembersData] = useState([]);
  useEffect(() => {
    axios.get('/ourTeam.json').then((res) => {
      console.log(res.data);
      setteamMembersData(res.data);
    });
  }, []);
  return (
    <div className='my-10 '>
      <div className='min-w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {teamMembersData.slice(0, 3).map((teamMember, index) => (
          <ServicesCard
            key={index}
            image={teamMember.memberImage}
          >
            <div className='space-y-4 mt-4 text-center'>
              <h3 className='text-2xl font-bold'>{teamMember.memberName}</h3>
              <p className='text-lg font-semibold text-[#FF3811]'>
                {teamMember.designation}
              </p>
              <SocialIcons />
            </div>
          </ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
