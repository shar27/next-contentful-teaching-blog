import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Layout({ children }) {
 
  const hoveredStyle = {
    cursor: 'pointer'
  };
  
  
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>English tips 101</span>
              
            </h1>
            <h2>Start your journey now</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <div className='container'>
        <div className='row'>
        <div className='col'>
        <GitHubIcon onClick={event => window.location.href='https://github.com/shar27/'} 
style={hoveredStyle} 
fontSize="large" 
sx={{ 
  mb: 2,
  display: 'flex-inline'
  
    }}/>
    <div className='col'>
    Teacher-ESL
    </div>
    </div>
    </div>
    </div>
      </footer>
    </div>
  )
}