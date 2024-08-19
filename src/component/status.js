import * as React from 'react';
import loadingGif from '../assets/loading.gif';
export const Status = (props) => {
    // Website colors for background get via properties? VGV #243289

    const [status, setStatus] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isActive, setActive] = React.useState(true);
    const [timeStamp, setTime] = React.useState('');

    const checkStatus = (link) => {
        setIsLoading(true);
        setActive(false);
        fetch(link, { mode: 'no-cors' }).then(response => {
            setLinkStatus(link + ' is reachable');
            //console.log(link + ' is reachable');
        }).then(() => {
            setIsLoading(false);
            setActive(true);
        }).catch(error => {
            setLinkStatus(link + ' is not reachable');
           //console.log(link + ' is not reachable');
            }).finally(() => {
                setIsLoading(false);
                setActive(true);
            });
    }

    const setLinkStatus = (message) => {
        setStatus(message);
        getTimeStamp();
    }

    const getTimeStamp =()=>{
        let time = new Date();
        let currentTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
        setTime(currentTime);
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-4' style={{
                    'height': '120px',
                    'width': '120px', 'paddingTop': '40px', 'backgroundColor': '#66CC33', 'color': 'white', 'margin': '20px'
                }}>
                    <h2 className='text-center'>{props.website.name}</h2>
                </div>
                <div className='col-md-5' style={{ 'marginTop': '16px' }}>
                    <div id={'#div_desc'} className="card-text">{props.website.description}</div>
                    <div style={{'height':'25px'}}>
                    <div>Last checked: {timeStamp}</div>
                    {/* should status be colored based on reachablility? */ }
                        Status: {status}
                        <span>
                            {isLoading && <img src={loadingGif} style={{ 'height': '28px', 'width': '50px' }}></img>}
                        </span>
                    </div>
                    <a href='#' className={isActive ? "btn btn-primary" : "btn btn-primary disabled"}
                        style={{'marginTop':'36px'}} onClick={() => checkStatus(props.website.link)}
                    >Check Status</a>

                </div>
            </div>
        </div>
    );
}
