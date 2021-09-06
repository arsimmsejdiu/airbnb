import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    //global styles at styles/global.css
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
