export const  FilterReports= (reports,searchValue)=>{
    return reports.filter( (report)=>{

        reports.reports.filter((report)=>{
            report.title?report.title:report.title=""
          return Object.keys(report).some(key=>typeof report[key] === "string" && report.name
                  .includes(searchValue.toLowerCase()) || report.title.includes(searchValue.toLowerCase())
                 );
        });

    
    })
}