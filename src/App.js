import './App.css';
import Navigation from './component/sidebar/navigation';
import { Status } from './component/status';

function App() {
  return (
    <div className="">
      <div className='container'>
        <div className='row'>
        <Status website = {
          {name:'VGV', link:'https://www.vgv-berlin.de/', description:'Verwaltungsgesellschaft für Versorgungswerke mbH'}
          } /><br/>
           <Status website = {
          {name:'AWS', link:'https://www.aws.amazon.com/', description:'AWS'}
          } />
          <Status website = {
          {name:'DUM', link:'https://dummy/', description:'Broken link for Test'}
          } />
        </div> 
        {/* <Navigation /> */}
      </div>
    </div>
  );
}

export default App;
