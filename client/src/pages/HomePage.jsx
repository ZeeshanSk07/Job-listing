import { useEffect, useState } from "react";
import { fetchJobs, fetchJobsByQuery } from "../api/Job";
import { Header } from "../components/Header";
import { QueryWidget } from "../components/QueryWidget";

function HomePage({ currentUser, setCurrentUser }) {
	const [jobs, setJobs] = useState([]);
	const [query, setQuery] = useState({
		title: "",
		skills: [],
	});
	
	useEffect(() => {
		handleFetchJobs();
	}, []);

	const handleFetchJobs = async () => {
		const response = await fetchJobsByQuery(query);		
        if (response.status == 200) {
			setJobs(response.data.jobs);
		}
	};
	

	return (
		<div>
			<Header currentUser={currentUser} setCurrentUser={setCurrentUser}  />
            <QueryWidget/>
			{jobs.map((job, index) => (
				<div key={index}>
					<h3>{job.companyName}</h3>
					<h4>{job.jobType}</h4>
					<img src={job.logoUrl} alt={altJobIcon} />
				</div>
			))}
		</div>
	);
}
export default HomePage;