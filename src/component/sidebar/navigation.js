import * as React from 'react';
import { useState } from 'react';
export const Navigation = () => {
 
  const [activeTab, setActive] = useState(-1);
  const [status, setStatus] = useState("");
  
  let links = [{
    id: 0,
    name: 'VGV',
    website: 'https://www.vgv-berlin.de/',
    description: 'Verwaltungsgesellschaft für Versorgungswerke mbH',
    status:''
  }, {
    id: 1,
    name: 'FB',
    website: 'https://www.facebook.com',
    description: 'Facebook',
    status:''
  }, {
    id: 2,
    name: 'AWS',
    website: 'https://aws.amazon.com/',
    description: 'Amazon Webservice',
    status:''
  },{
    id: 3,
    name: 'DUM',
    website: 'https://dummy/',
    description: 'Broken Link for Error Test',
    status:''
  }];
 
  const setActiveTab = (index, website) => {
    setActive(index);
    //checkStatus(website)
  }

  const setParaStatus=(msg)=>{
    setStatus(msg)
  }

 
  /* get div id as argument */
  const checkStatus = (linkID) => {
    links.filter((link)=>{
      if(link.id === linkID) {
        link.status ='OK'
      }
    })
    console.log(links)
   /*  fetch(website, { mode: 'no-cors' }).then(response => {
      setParaStatus(website+' is reachable')
      //console.log(website + ' is reachable');
    })
      .catch(error => {
        setParaStatus(website+' is not reachable')
        //console.log(website + ' is not reachable');
      }); */
      
  } 

  const linkList = links.map((link, index) => {
   /*  return <div id={'#'+link.id} key={link.id}> 
                <li key={link.id} className='nav-item'>
                    <a href={'#'+link.id}
                       onClick={() => setActiveTab(index, link.website)}
                       className={activeTab === index ? 'nav-link active' : 'nav-link'}
                       data-bs-toggle="tab">
                      {link.name}
                    </a>
                </li>
          </div> */   
          
         return <div id={'#div_'+link.id} key={link.id} className='col-md-6' style={{'margin':'20px'}}>
                  <div className='row'>
                    <div className='col-md-4' style={{'height':'120px',
                      'width':'120px','paddingTop':'40px','backgroundColor':'#66CC33','color':'white'}}>
                        <h2 className='text-center'>{link.name}</h2>
                    </div>
                    <div className='col-md-8'>
                      <div id={'#div_desc'+link.id} className="card-text">{link.description}</div>
                      <div id={'#div_status_'+index}>{link.status} </div>
                      
                      <button className="btn btn-primary" onClick={()=>checkStatus(link.id)}>Check Status</button>
                    </div>
                  </div>         
                </div>

  });

return <div>{linkList}</div>

}

export default Navigation