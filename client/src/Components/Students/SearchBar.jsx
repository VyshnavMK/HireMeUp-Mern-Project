import {  useState } from 'react';

function SearchBar(props) {
    const [searcher, setSearcher] = useState({ keyword: "", category: "All", minwage: 100, selection: 0 })
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        var sel;
        if (name === "keyword")
            sel = 1
        else if (name === "category")
            sel = 2
        else if (name === "minwage")
            sel = 3
        else
            sel = 4
        setSearcher(prevData => ({
            ...prevData,
            [name]: value,
            selection: sel
        }));
       
    }
    function handleSubmit(even) {
        even.preventDefault();
        console.log("The data in searcher is");
        console.log(searcher);
        changeJobs();
    }
    function changeJobs() {
        if (searcher.selection === 1) {
            const copyJobs = (searchValue) => {
                const filteredJobs = props.alljobs.filter(job => {
                    const foundInJobCat = job.title.includes(searchValue);
                    const foundInOrgName = job.jmid && job.jmid.orgName.includes(searchValue);
                    return foundInJobCat || foundInOrgName;
                  });
                  props.setJobs(filteredJobs);
            };
            copyJobs(searcher.keyword);
        }
        else if(searcher.selection === 2){
            const copyJobs = (searchValue) => {
                const filteredJobs = props.alljobs.filter(job => job.jobCat.includes(searchValue));
                props.setJobs(filteredJobs);
                if(searchValue==="All"){
                    props.setJobs(props.alljobs);
                }
            };
            copyJobs(searcher.category);
        }
        else if(searcher.selection === 3){
            const copyJobs = (searchValue) => {
                const filteredJobs = props.alljobs.filter(job => job.wage >= searchValue);
                props.setJobs(filteredJobs);
                
            };
            copyJobs(parseInt(searcher.minwage));
            
        }
    }

    return (
        <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <label class="form-label" htmlFor="keyword">Enter keyword</label>
                                <input type="text" className="form-control border-0" id="keyword" style={{ "margin": "0px", "maxHeight": "36px" }} name="keyword" value={searcher.keyword} onChange={handleChange} />
                            </div>
                            <div className="col-md-4">
                                <label class="form-label" for="category">Category</label>
                                <select className="form-select border-0" id="category" name="category" value={searcher.category} onChange={handleChange}>
                                    <option selected>All</option>
                                    <option value="Catering">Catering</option>
                                    <option value="Customer Service">Customer Service</option>
                                    <option value="Data Entry">Data Entry</option>
                                    <option value="Content writing">Content writing</option>
                                    <option value="Delivery">Delivery</option>
                                    <option value="Teaching & Education3">Teaching & Education</option>
                                    <option value="Others">others</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label class="form-label" htmlFor="minwage">Minimum wage</label>
                                <select className="form-select border-0" id="minwage" name="minwage" value={searcher.minwage} onChange={handleChange}>
                                    <option value="100" selected>100</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label class="form-label" htmlFor="submit">.</label>
                        <button className="btn btn-dark border-0 w-100" id="submit" type="button" onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SearchBar;