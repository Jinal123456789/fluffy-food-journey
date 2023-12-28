const Shimmer = () => {
    return (
        <div className="srestaurant-list">
            {Array(10).fill().map((value,index)=>{
                return(
                    
                    <div key={index+1} className="shimmer-card">
                        {console.log(index+1,"vslue")}
                    </div>
                    
                )
            })}           
        </div>
    
    );
}

export default Shimmer;