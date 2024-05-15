import React, { useContext } from 'react'
import Post from '../post_preview'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

const PostHome = () => {
  const {setCommunityMiddle, setCommunity,setCommunityDisplay} = useContext(UserContext);
  const communityData = [
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Diabetes Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Mental Health Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Women Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Depression Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Heart Health Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Cronic Pain Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Diabetes Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Mental Health Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Women Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Depression Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Heart Health Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    },
    {
      commImg:'./resources/community_icon.svg',
      commName: 'Cronic Pain Comm',
      commTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, corrupti?',
      commContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem voluptatibus laborum, esse quasi culpa id eligendi, voluptatum qui sapiente blanditiis nesciunt fugiat quis itaque error aperiam ipsam commodi quas fugit exercitationem nulla non eaque temporibus! Dolore dicta nam asperiores, id, praesentium eos et minima omnis porro laborum dolores vero ipsa perspiciatis inventore sunt sapiente quae consectetur laboriosam officiis. Cum, ex repellendus. Veritatis debitis officia eius, necessitatibus provident dicta praesentium. Repudiandae perferendis quam rerum delectus! Sunt sint molestias assumenda quidem minima atque. Aut distinctio, dolores labore eveniet recusandae repellendus rerum quo sit facilis ducimus commodi quia, quasi saepe, quas sapiente sequi modi in vitae qui? Veniam dolor illum explicabo earum',
      commStats:'25K'
  
    }   
  ]
  return (
    <div className='scrollable-div content'>
        {communityData.map((data,index)=>(
          <Link to='/PostDisplay'
          key={index}
          onClick={()=>{
            setCommunityMiddle({commImg:`${data.commImg}`,commName:`${data.commName}`,commTitle:`${data.commTitle}`,commContent:`${data.commContent}`,commStats:`${data.commStats}`}
            )
            setCommunity({commImg: '',commName: '', commStats:''})
          }}>
           
          <Post
            communityName={data.commName}
            communityImage={data.commImg}
            postTitle = {data.commTitle}
            postContent = {data.commContent}
          />
          </Link>
        ))}
      </div>
  )
}

export default PostHome
