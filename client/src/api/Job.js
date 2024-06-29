import axios from 'axios';
const BACKEND_ORIGIN_URL = 'http://localhost:3000';


const fetchJobs = async ({ searchTerm, filters }) => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`);
        return response;
    } catch (error) {
        return error;
    }
};

const fetchJobsByQuery = async (query) => {
    const { title,
        skills } = query;
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`, {
            params: {
                title,
                skills
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

const fetchJobById = async (id) => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

const createJob = async (job) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/job/add`, job, config);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};


export { fetchJobs, fetchJobsByQuery, fetchJobById, createJob};