// import React, { useContext } from 'react'
// import Post from '../post_preview'
// import { Link } from 'react-router-dom'
// import UserContext from '../../contexts/UserContext'

// const PostHome = () => {
//   const {setCommunityMiddle, setCommunity} = useContext(UserContext);
//   const communityData = [
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Diabetes Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Mental Health Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Women Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Depression Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Heart Health Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Cronic Pain Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Diabetes Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Mental Health Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Women Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Depression Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Heart Health Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     },
//     {
//       commImg:'./resources/community_icon.svg',
//       commName: 'Cronic Pain Comm',
//       commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
//       commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
//       commStats:'25K'
  
//     }   
//   ]
//   return (
//     <div className='scrollable-div content'>
//         {communityData.map((data,index)=>(
//           <Link to='/PostDisplay'
//           key={index}
//           onClick={()=>{
//             setCommunityMiddle({commImg:`${data.commImg}`,commName:`${data.commName}`,commTitle:`${data.commTitle}`,commContent:`${data.commContent}`,commStats:`${data.commStats}`}
//             )
//             setCommunity({commImg: '',commName: '', commStats:''})
//           }}>
           
//           <Post
//             communityName={data.commName}
//             communityImage={data.commImg}
//             postTitle = {data.commTitle}
//             postContent = {data.commContent}
//           />
//           </Link>
//         ))}
//       </div>
//   )
// }

// export default PostHome


import React, { useContext, useEffect, useState } from 'react';
import Post from '../post_preview';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const PostHome = () => {
  const { setCommunityMiddle, setCommunity } = useContext(UserContext);
  const communityData = [
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Health Concerns Community',
      commTitle: 'Dealing with Chronic Migraines',
      commContent: 'I ve been experiencing chronic migraines for the past few months, and it s really impacting my daily life. The pain is unbearable at times, and I ve tried various treatments without much relief. Im reaching out to see if anyone else in this community has dealt with similar issues and if you have any advice or recommendations for managing chronic migraines.',
      commStats: '15K',
      commPostCount: 23,
      commComments: [
        {
          username: 'MigraineSufferer123',
          timeOfPost: '2 days ago',
          comment: 'I can relate to your struggles with chronic migraines. It can be incredibly frustrating trying to find effective treatments. Have you tried keeping a migraine diary to track triggers? That might help identify patterns.'
        },
        {
          username: 'PainFreeLife',
          timeOfPost: '1 day ago',
          comment: 'I m sorry to hear that you re dealing with chronic migraines. Have you considered seeing a headache specialist? They might be able to offer more targeted treatment options.'
        },
        {
          username: 'WellnessWarrior',
          timeOfPost: '1 day ago',
          comment: 'Sending you positive vibes! Chronic migraines can be tough to manage, but you re not alone in this journey.'
        },
        {
          username: 'MigraineSupportGroup',
          timeOfPost: '1 day ago',
          comment: 'I recommend exploring holistic approaches like acupuncture or meditation. They ve helped me find some relief from chronic migraines.'
        },
        {
          username: 'HealthJourney2023',
          timeOfPost: '6 hours ago',
          comment: 'Stay strong! Dealing with chronic migraines is tough, but remember to prioritize self-care and listen to your body.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Heart Health Community',
      commTitle: 'Managing High Blood Pressure: Tips and Strategies',
      commContent: 'High blood pressure, or hypertension, is a common health issue that can lead to serious complications if not properly managed. Let\'s share our experiences and strategies for keeping blood pressure under control.',
      commStats: '20K',
      commPostCount: 35,
      commComments: [
        {
          username: 'HeartHealthy22',
          timeOfPost: '3 days ago',
          comment: 'Thanks for starting this discussion! Managing high blood pressure is crucial for overall heart health.'
        },
        {
          username: 'BloodPressureWarrior',
          timeOfPost: '2 days ago',
          comment: 'Regular exercise and a balanced diet have been key for me in controlling my blood pressure.'
        },
        {
          username: 'HeartHealthAdvocate',
          timeOfPost: '1 day ago',
          comment: 'Don\'t forget the importance of stress management in reducing blood pressure. Taking time to relax and unwind is essential.'
        },
        {
          username: 'WellnessJourney2023',
          timeOfPost: '1 day ago',
          comment: 'I recommend checking your blood pressure regularly at home and keeping track of your readings. It helps you stay informed about your health.'
        },
        {
          username: 'HealthyHeart123',
          timeOfPost: '6 hours ago',
          comment: 'Limiting sodium intake and maintaining a healthy weight are also important factors in managing high blood pressure.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Diabetes Support Group',
      commTitle: 'Living Well with Type 2 Diabetes',
      commContent: 'Type 2 diabetes requires careful management of blood sugar levels through diet, exercise, and medication. Let\'s share our tips and experiences for living well with diabetes.',
      commStats: '25K',
      commPostCount: 28,
      commComments: [
        {
          username: 'DiabetesWarrior22',
          timeOfPost: '4 days ago',
          comment: 'Finding the right balance of carbs, protein, and fats in my meals has been key for managing my blood sugar levels.'
        },
        {
          username: 'HealthyLiving123',
          timeOfPost: '3 days ago',
          comment: 'Regular physical activity helps improve insulin sensitivity and overall diabetes management.'
        },
        {
          username: 'DiabetesSupportGroup',
          timeOfPost: '2 days ago',
          comment: 'Remember to take your medications as prescribed and attend regular check-ups with your healthcare provider.'
        },
        {
          username: 'BloodSugarControl',
          timeOfPost: '1 day ago',
          comment: 'Don\'t hesitate to reach out for support when you need it. Managing diabetes can feel overwhelming at times, but you\'re not alone.'
        },
        {
          username: 'DiabetesAwareness2023',
          timeOfPost: '6 hours ago',
          comment: 'Monitoring your blood sugar levels regularly and keeping a record can help you identify patterns and make adjustments to your diabetes management plan.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Cancer Support Community',
      commTitle: 'Living with Breast Cancer: My Journey',
      commContent: 'Being diagnosed with breast cancer can be overwhelming, but you\'re not alone. Let\'s share our stories, experiences, and support each other through this journey.',
      commStats: '15K',
      commPostCount: 42,
      commComments: [
        {
          username: 'BreastCancerWarrior',
          timeOfPost: '4 days ago',
          comment: 'Thank you for creating this space. Connecting with others who understand what I\'m going through has been incredibly comforting.'
        },
        {
          username: 'CancerFighter123',
          timeOfPost: '3 days ago',
          comment: 'It\'s amazing how resilient we can be in the face of adversity. Sending strength and support to everyone fighting this battle.'
        },
        {
          username: 'HopeAndHealing',
          timeOfPost: '2 days ago',
          comment: 'Remember to take things one day at a time and celebrate the small victories along the way. You\'ve got this!'
        },
        {
          username: 'CancerAwareness2023',
          timeOfPost: '1 day ago',
          comment: 'Don\'t hesitate to ask for help when you need it, whether it\'s emotional support, practical assistance, or information about treatment options.'
        },
        {
          username: 'SurvivorStrong',
          timeOfPost: '6 hours ago',
          comment: 'Your strength and resilience inspire me every day. We\'re in this together!'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Chronic Pain Warriors',
      commTitle: 'Living with Fibromyalgia: Coping Strategies',
      commContent: 'Fibromyalgia can have a significant impact on daily life, but there are ways to manage symptoms and improve quality of life. Let\'s share our coping strategies and support each other.',
      commStats: '12K',
      commPostCount: 30,
      commComments: [
        {
          username: 'PainWarrior22',
          timeOfPost: '4 days ago',
          comment: 'I\'ve found mindfulness practices and gentle exercise to be helpful in managing fibromyalgia symptoms.'
        },
        {
          username: 'FibroFighter123',
          timeOfPost: '3 days ago',
          comment: 'Don\'t underestimate the importance of self-care. Taking time to rest and recharge is essential when living with chronic pain.'
        },
        {
          username: 'ChronicPainSupportGroup',
          timeOfPost: '2 days ago',
          comment: 'Exploring alternative therapies like acupuncture or massage therapy may provide additional relief from fibromyalgia symptoms.'
        },
        {
          username: 'PainFree2023',
          timeOfPost: '1 day ago',
          comment: 'Joining a support group or connecting with others who understand what you\'re going through can provide invaluable support and encouragement.'
        },
        {
          username: 'ChronicPainAwareness',
          timeOfPost: '6 hours ago',
          comment: 'Remember to listen to your body and pace yourself. It\'s okay to take breaks and ask for help when needed.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Health Concerns Community',
      commTitle: 'Dealing with Chronic Migraines',
      commContent: 'I ve been experiencing chronic migraines for the past few months, and it s really impacting my daily life. The pain is unbearable at times, and I ve tried various treatments without much relief. Im reaching out to see if anyone else in this community has dealt with similar issues and if you have any advice or recommendations for managing chronic migraines.',
      commStats: '15K',
      commPostCount: 23,
      commComments: [
        {
          username: 'MigraineSufferer123',
          timeOfPost: '2 days ago',
          comment: 'I can relate to your struggles with chronic migraines. It can be incredibly frustrating trying to find effective treatments. Have you tried keeping a migraine diary to track triggers? That might help identify patterns.'
        },
        {
          username: 'PainFreeLife',
          timeOfPost: '1 day ago',
          comment: 'I m sorry to hear that you re dealing with chronic migraines. Have you considered seeing a headache specialist? They might be able to offer more targeted treatment options.'
        },
        {
          username: 'WellnessWarrior',
          timeOfPost: '1 day ago',
          comment: 'Sending you positive vibes! Chronic migraines can be tough to manage, but you re not alone in this journey.'
        },
        {
          username: 'MigraineSupportGroup',
          timeOfPost: '1 day ago',
          comment: 'I recommend exploring holistic approaches like acupuncture or meditation. They ve helped me find some relief from chronic migraines.'
        },
        {
          username: 'HealthJourney2023',
          timeOfPost: '6 hours ago',
          comment: 'Stay strong! Dealing with chronic migraines is tough, but remember to prioritize self-care and listen to your body.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Heart Health Community',
      commTitle: 'Managing High Blood Pressure: Tips and Strategies',
      commContent: 'High blood pressure, or hypertension, is a common health issue that can lead to serious complications if not properly managed. Let\'s share our experiences and strategies for keeping blood pressure under control.',
      commStats: '20K',
      commPostCount: 35,
      commComments: [
        {
          username: 'HeartHealthy22',
          timeOfPost: '3 days ago',
          comment: 'Thanks for starting this discussion! Managing high blood pressure is crucial for overall heart health.'
        },
        {
          username: 'BloodPressureWarrior',
          timeOfPost: '2 days ago',
          comment: 'Regular exercise and a balanced diet have been key for me in controlling my blood pressure.'
        },
        {
          username: 'HeartHealthAdvocate',
          timeOfPost: '1 day ago',
          comment: 'Don\'t forget the importance of stress management in reducing blood pressure. Taking time to relax and unwind is essential.'
        },
        {
          username: 'WellnessJourney2023',
          timeOfPost: '1 day ago',
          comment: 'I recommend checking your blood pressure regularly at home and keeping track of your readings. It helps you stay informed about your health.'
        },
        {
          username: 'HealthyHeart123',
          timeOfPost: '6 hours ago',
          comment: 'Limiting sodium intake and maintaining a healthy weight are also important factors in managing high blood pressure.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Diabetes Support Group',
      commTitle: 'Living Well with Type 2 Diabetes',
      commContent: 'Type 2 diabetes requires careful management of blood sugar levels through diet, exercise, and medication. Let\'s share our tips and experiences for living well with diabetes.',
      commStats: '25K',
      commPostCount: 28,
      commComments: [
        {
          username: 'DiabetesWarrior22',
          timeOfPost: '4 days ago',
          comment: 'Finding the right balance of carbs, protein, and fats in my meals has been key for managing my blood sugar levels.'
        },
        {
          username: 'HealthyLiving123',
          timeOfPost: '3 days ago',
          comment: 'Regular physical activity helps improve insulin sensitivity and overall diabetes management.'
        },
        {
          username: 'DiabetesSupportGroup',
          timeOfPost: '2 days ago',
          comment: 'Remember to take your medications as prescribed and attend regular check-ups with your healthcare provider.'
        },
        {
          username: 'BloodSugarControl',
          timeOfPost: '1 day ago',
          comment: 'Don\'t hesitate to reach out for support when you need it. Managing diabetes can feel overwhelming at times, but you\'re not alone.'
        },
        {
          username: 'DiabetesAwareness2023',
          timeOfPost: '6 hours ago',
          comment: 'Monitoring your blood sugar levels regularly and keeping a record can help you identify patterns and make adjustments to your diabetes management plan.'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Cancer Support Community',
      commTitle: 'Living with Breast Cancer: My Journey',
      commContent: 'Being diagnosed with breast cancer can be overwhelming, but you\'re not alone. Let\'s share our stories, experiences, and support each other through this journey.',
      commStats: '15K',
      commPostCount: 42,
      commComments: [
        {
          username: 'BreastCancerWarrior',
          timeOfPost: '4 days ago',
          comment: 'Thank you for creating this space. Connecting with others who understand what I\'m going through has been incredibly comforting.'
        },
        {
          username: 'CancerFighter123',
          timeOfPost: '3 days ago',
          comment: 'It\'s amazing how resilient we can be in the face of adversity. Sending strength and support to everyone fighting this battle.'
        },
        {
          username: 'HopeAndHealing',
          timeOfPost: '2 days ago',
          comment: 'Remember to take things one day at a time and celebrate the small victories along the way. You\'ve got this!'
        },
        {
          username: 'CancerAwareness2023',
          timeOfPost: '1 day ago',
          comment: 'Don\'t hesitate to ask for help when you need it, whether it\'s emotional support, practical assistance, or information about treatment options.'
        },
        {
          username: 'SurvivorStrong',
          timeOfPost: '6 hours ago',
          comment: 'Your strength and resilience inspire me every day. We\'re in this together!'
        }
      ]
    },
    {
      commImg: 'https://i.pinimg.com/564x/92/24/54/922454678fe34137ba14380c1726c81b.jpg',
      commName: 'Chronic Pain Warriors',
      commTitle: 'Living with Fibromyalgia: Coping Strategies',
      commContent: 'Fibromyalgia can have a significant impact on daily life, but there are ways to manage symptoms and improve quality of life. Let\'s share our coping strategies and support each other.',
      commStats: '12K',
      commPostCount: 30,
      commComments: [
        {
          username: 'PainWarrior22',
          timeOfPost: '4 days ago',
          comment: 'I\'ve found mindfulness practices and gentle exercise to be helpful in managing fibromyalgia symptoms.'
        },
        {
          username: 'FibroFighter123',
          timeOfPost: '3 days ago',
          comment: 'Don\'t underestimate the importance of self-care. Taking time to rest and recharge is essential when living with chronic pain.'
        },
        {
          username: 'ChronicPainSupportGroup',
          timeOfPost: '2 days ago',
          comment: 'Exploring alternative therapies like acupuncture or massage therapy may provide additional relief from fibromyalgia symptoms.'
        },
        {
          username: 'PainFree2023',
          timeOfPost: '1 day ago',
          comment: 'Joining a support group or connecting with others who understand what you\'re going through can provide invaluable support and encouragement.'
        },
        {
          username: 'ChronicPainAwareness',
          timeOfPost: '6 hours ago',
          comment: 'Remember to listen to your body and pace yourself. It\'s okay to take breaks and ask for help when needed.'
        }
      ]
    },
    
  ];
  // localStorage.setItem("communeData", JSON.stringify(communityData));
  const [communeStateData, setCommuneStateData] = useState([]);
  useEffect(() => {
    const communeData = JSON.parse(localStorage.getItem("communeData"));
    if(communeData){
      setCommuneStateData(communeData)
    }
  },[])
  
  return (
    <div className='scrollable-div content'>
      {communeStateData.map((data, index) => (
        <Link to='/home/PostDisplay' key={index} onClick={() => {
          setCommunityMiddle({
            commImg: data.commImg,
            commName: data.commName,
            commTitle: data.commTitle,
            commContent: data.commContent,
            commStats: data.commStats,
            comments: data.commComments
          });
          setCommunity({ commImg: '', commName: '', commStats: '' });
        }}>
          <Post
            communityName={data.commName}
            communityImage={data.commImg}
            postTitle={data.commTitle}
            postContent={data.commContent}
          />
        </Link>
      ))}
    </div>
  );
}

export default PostHome;
