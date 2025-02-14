

const VideoSection =()=> {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
    <section className="text-gray-600 body-font" style={{width:'96%'}}>
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <iframe className="object-cover object-center w-full" width="650" height="400" src="https://www.youtube.com/embed/9fTTmwGq5DM" title="JiGO Introduction"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
        {/* <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" /> */}
      </div>
      <div style={{marginLeft:15,marginTop:10}} className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div className="w-full sm:p-4 px-4 mb-6">
          <h1 className="title-font font-medium text-xl mb-2 text-gray-900">JIGO - HIRAWAT ELECTRICALS</h1>
          <div className="leading-relaxed">You are warmly welcome into the JIGO electric World. We assure you of High-Quality, High-technology with well trained sales persons & quick after sales services. Your satisfaction is our prime concern. Your presence is honoured & your any comments/enquiries/suggestions would be appreciated. We always look forward to establishing business relation with you.</div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
          <p className="leading-relaxed">Subscribes</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
          <p className="leading-relaxed">Products</p>
        </div>
      </div>
      
    </div>
  </section>
  </div>
  );
}

export default VideoSection;