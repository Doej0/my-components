import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Stuff />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="page-header">
      <h1>Welcome To This Fake Site</h1>
      <nav>
        <ul className="main-nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Stuff() {
  return (
    <article className="page-body">
      <div className="container">
        <section>
          <h2>Section 1</h2>
          <p>
            Phasellus pharetra dolor ut dolor porta tristique. Sed rhoncus
            sagittis nisi, sed cursus diam. Aliquam orci elit, fringilla in
            lobortis nec, blandit non leo. Phasellus pharetra dolor ut dolor
            porta tristique. Sed rhoncus sagittis nisi, sed cursus diam. Aliquam
            orci elit, fringilla in lobortis nec, blandit non leo. Phasellus
            pharetra dolor ut dolor porta tristique. Sed rhoncus sagittis nisi,
            sed cursus diam. Aliquam orci elit, fringilla in lobortis nec,
            blandit non leo.
          </p>
          <Button/>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>
            Phasellus pharetra dolor ut dolor porta tristique. Sed rhoncus
            sagittis nisi, sed cursus diam. Aliquam orci elit, fringilla in
            lobortis nec, blandit non leo. Phasellus pharetra dolor ut dolor
            porta tristique. Sed rhoncus sagittis nisi, sed cursus diam. Aliquam
            orci elit, fringilla in lobortis nec, blandit non leo. Phasellus
            pharetra dolor ut dolor porta tristique. Sed rhoncus sagittis nisi,
            sed cursus diam. Aliquam orci elit, fringilla in lobortis nec,
            blandit non leo.
          </p>
          <Button/>
        </section>
        <section>
          <h2>Section 3</h2>
          <p>
            Donec vitae lobortis urna. Nunc eu rutrum risus. Duis iaculis
            efficitur efficitur. Praesent hendrerit, lorem at fermentum iaculis,
            lorem libero placerat arcu, vel dignissim eros justo in arcu. Proin
            felis metus, cursus non felis a, venenatis gravida turpis.
            Suspendisse in elit eget quam sagittis venenatis. Morbi blandit quam
            vel quam eleifend, non elementum velit venenatis. Nulla facilisi.
            Nulla et libero congue, tincidunt tellus eu, laoreet neque. Aliquam orci elit
           
          </p>
          <Button/>
        </section>
        <section>
          <h2>Section 4</h2>
          <p>
            Nulla bibendum ornare bibendum. Nam eget mauris fringilla, pretium
            massa elementum, rutrum nunc. Donec sit amet laoreet lectus.
            Suspendisse efficitur ex in eros porttitor, ac imperdiet lorem
            interdum. Integer vehicula turpis ipsum, vitae iaculis magna
            ultrices in. Sed pulvinar sodales mi, mollis molestie orci
            scelerisque eget. Nulla bibendum ornare bibendum. Nam eget mauris
            fringilla, pretium massa elementum.
          </p>
         <Button/>
        </section>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="page-footer">
      <h3>Copyright 2023</h3>
    </footer>
  );
}

function Button() {
  return (
    <button onClick={DisplayFlag}>Click Here</button>
  );
}

function DisplayFlag() {
alert('Clicked!')
}