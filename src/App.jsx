
import './App.css'


export default function App() {


  return (
    <div className='wrapper'>
    <Header/>
    <Stuff/>
    <Footer/>
    </div>
  )
}

function Header() {
  return (
    <div className='page-header'>
    <h1> I am the Header</h1>
    </div> 

  )  
}

function Stuff() {
  return (
  
    <article className='page-body'>
    <div className='container'>
    <section>
        <h2>Section 1</h2>
        <p>bleh blah blew pop pop bing bap</p>
      </section>
      <section>
        <h2>Section 2</h2>
        <p>bleh blah blew pop pop bing bap</p>
      </section>
      <section>
        <h2>Section 3</h2>
        <p>bleh blah blew pop pop bing bap</p>
      </section>

    </div>
    

    </article>
      
    
  )
}

function Footer() {
  return (
    <div>
      <footer className='page-footer'>
        <h3>I am the footer</h3>
      </footer>
    </div>
  )
}

