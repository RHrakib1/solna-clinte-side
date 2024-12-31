import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobsCard from '../JobsCard.jsx/JobsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCatagorices = () => {
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        const getJobs = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
                setjobs(data);
            } catch (err) {
                console.log('Error fetching jobs:', err);
            }
        };
        getJobs();
    }, []);
    
    return (
        <div >
            <Tabs>
                <div className='px-5 py-10 mx-auto'>
                    <div className='text-center space-y-3 mb-8'>
                        <h1 className='text-4xl font-bold'>Browse Jobs By Categories</h1>
                        <p>
                            Three categories available for the time being. They are Web Development, Graphics Design and <br /> Digital Marketing. Browse them by clicking on the tabs below.
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <TabList>
                            <Tab>Web Development</Tab>
                            <Tab>Graphics Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className=' mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                            {
                                jobs.filter(j => j.category === 'Web_Development').map(copy => <JobsCard key={copy._id} job={copy}></JobsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                            {
                                jobs.filter(j => j.category === 'Graphics_Design').map(copy => <JobsCard key={copy._id} job={copy}></JobsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                            {
                                jobs.filter(j => j.category === 'Digital_Marketing').map(copy => <JobsCard key={copy._id} job={copy}></JobsCard>)
                            }
                        </div>
                    </TabPanel>
                </div>

            </Tabs>

        </div>
    );
};

export default TabCatagorices;