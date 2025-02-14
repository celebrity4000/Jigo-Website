import HeaderText from "../components/HeaderText";
import image from '@assets/15-Watt-Series-768x768.jpg';

function about() {
  return (
    <>
      {/* <BreadCrumbs page={"About us"} /> */}
      <HeaderText first={"ABOUT"} sec={"US"} />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:mt-00  sm:mt-10 mt-12" style={{ marginTop: -40 }}>
          <img
            className="lg:block hidden w-full "
            // style={{ height: 250 }}
            src="https://jigoindia.asrtechsolution.com/images/Banner-01.jpg"
            alt="Group of people Chilling"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://jigoindia.asrtechsolution.com/images/Banner-01.jpg"
            alt="Group of people Chilling"
          />
          <img
            className="sm:hidden block w-full"
            src="https://jigoindia.asrtechsolution.com/images/Banner-01.jpg"
            alt="Group of people Chilling"
          />
        </div>
        <div className="lg:w-10/11.5 w-full">
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Since 1987, Hirawat Electricals has been a privately held entity
            beginning as a trading company of fuses to the commercial and
            industrial marketplace. Soon, the customer base expanded and product
            portfolio included relays, contactors and the entire range of
            switchgear and allied products. During the early 2000’s, the company
            started importing Cable Glands, Cable Ties, Panel Accessories to
            supply an increasing base of industrial and OEM customers.
          </p>
        </div>

        <div className="lg:mt-6 sm:mt-6 mt-10 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <p className="mt-6 text-xl leading-8 text-gray-700">
              By late 2000’s, Hirawat Electricals was the largest importer and
              distributor of Electricals Products and our brand JiGO® has become
              a force to reckon with. ONLY THROUG DEALER – A radical and unique
              change in the electrical industry was implemented in JiGO ®. We
              committed to make all sales though our regional dealers and
              distributors. With a strong 300 dealer network throughout India,
              we set the standards in Brand Loyalty, Services, Range of
              Products, Quality and Price.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              In 2014, the setup of our State Of the Art factory started at
              Dhulagarh, Howrah, West Bengal. With a strong in-house technical
              team, the setup was completed in a record 18 months.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 hover:scale-105">
            <img
              className="lg:block hidden w-full"
              style={{
                height: 350,
                borderRadius: 20,
                boxShadow: "10px 20px 20px #999",
              }}
              src="https://jigoindia.com/wp-content/uploads/2018/06/latest-product.jpg"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src="https://jigoindia.com/wp-content/uploads/2018/06/latest-product.jpg"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://jigoindia.com/wp-content/uploads/2018/06/latest-product.jpg"
              alt="people discussing on board"
            />
          </div>
        </div>
        <div className="lg:w-10/12 w-full">
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Today, Hirawat Electricals continues to provide our customers with a
            unique mix of quality products and services through our five product
            divisions. Add in strong technical capabilities, commitment to
            innovation, and a motivated and enthusiastic staff that is eager to
            promote our world-class products insures a secure future and
            expanding market base.
          </p>
        </div>
        <div className="lg:mt-6 sm:mt-6 mt-10 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="lg:flex items-center w-full lg:w-1/2 hover:scale-105">
            <img
              className="lg:block hidden w-full"
              style={{
                height: 350,
                borderRadius: 20,
                boxShadow: "10px 20px 20px #999",
              }}
              src={image}
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src="https://jigoindia.com/wp-content/uploads/2018/06/latest-product.jpg"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src={image}
              alt="people discussing on board"
            />
          </div>
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <p className="mt-6 text-xl leading-8 text-gray-700">
              We plan to setup JiGO® EASY Stores throughout the country at major
              Industrial Hubs to facilitate easy, quick and affordable products
              to Industries.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Our longevity can be attributed to our commitment to high ethical
              standards applied to building partnerships that last. which is
              apparent from
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
