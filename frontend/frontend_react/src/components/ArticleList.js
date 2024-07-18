import React from "react";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
        <div className="col-md-12">
        <h1>Articles Data</h1>
          <table className="table table-primary" style={{width:"100%"}}>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
              </tr>
            </thead>
            <tbody>
                {this.props.articles.map((item)=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                    </tr>
                })}
                
            </tbody>
          </table>
        </div>
       
    )
  }
}
export default ArticleList
//In ArticleList.js we are iterating over the array returing this tr ...same like arrowfunction.js file in mapping like this.If articles array will contain two element so it will return two rows simply..You can create with the help of for loop but this will make code easily